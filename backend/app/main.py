from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import resend
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Check required environment variables
required_env_vars = ["RESEND_API_KEY", "CONTACT_EMAIL", "FROM_EMAIL", "CORS_ORIGINS"]
missing_vars = [var for var in required_env_vars if not os.getenv(var)]
if missing_vars:
    print(f"Warning: Missing environment variables: {', '.join(missing_vars)}")
else:
    print("All required environment variables are set.")

# Initialize FastAPI app
app = FastAPI(title="Portfolio Contact API", description="Backend API for portfolio contact form")

# Configure CORS
cors_origins = os.getenv("CORS_ORIGINS")
if cors_origins:
    allow_origins = [origin.strip() for origin in cors_origins.split(",")]
    print(f"CORS allowed origins: {allow_origins}")
else:
    allow_origins = ["*"]
    print("Warning: CORS_ORIGINS not set, allowing all origins")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allow_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Resend
resend_api_key = os.getenv("RESEND_API_KEY")
if resend_api_key:
    resend.api_key = resend_api_key
    print("Resend API key configured.")
else:
    print("Error: RESEND_API_KEY not set.")

# Pydantic models
class ContactRequest(BaseModel):
    name: str
    email: str
    company: str = None
    phone: str = None
    projectType: str
    budget: str
    description: str
    timeline: str = None

# Helper functions
def format_project_type(project_type: str) -> str:
    """Format project type for display"""
    types = {
        'web-application': 'Web Application',
        'api-development': 'API Development',
        'frontend-modernization': 'Frontend Modernization',
        'cloud-deployment': 'Cloud Deployment',
        'consultation': 'Technical Consultation',
        'other': 'Other'
    }
    return types.get(project_type, project_type)

def format_budget(budget: str) -> str:
    """Format budget for display"""
    budgets = {
        'under-5k': 'Under $5,000',
        '5k-15k': '$5,000 - $15,000',
        '15k-30k': '$15,000 - $30,000',
        '30k-50k': '$30,000 - $50,000',
        'over-50k': 'Over $50,000',
        'discuss': 'Let\'s Discuss'
    }
    return budgets.get(budget, budget)

async def send_contact_email(form_data: ContactRequest):
    """Send contact email using Resend"""
    try:
        print("Attempting to send contact email...")

        from_email = os.getenv("FROM_EMAIL")
        contact_email = os.getenv("CONTACT_EMAIL")

        if not from_email:
            raise ValueError("FROM_EMAIL environment variable not set")
        if not contact_email:
            raise ValueError("CONTACT_EMAIL environment variable not set")

        print(f"From email: {from_email}")
        print(f"To email: {contact_email}")

        # Format email content
        email_text = f"""
New Quote Request

Contact Information:
Name: {form_data.name}
Email: {form_data.email}
{f"Company: {form_data.company}" if form_data.company else ""}
{f"Phone: {form_data.phone}" if form_data.phone else ""}

Project Details:
Project Type: {format_project_type(form_data.projectType)}
Budget: {format_budget(form_data.budget)}
{f"Timeline: {form_data.timeline}" if form_data.timeline else ""}

Project Description:
{form_data.description}

---
This quote request was sent from your portfolio website.
        """

        print("Formatted email content successfully.")

        # Send email using Resend
        print("Sending email via Resend...")
        result = resend.Emails.send({
            "from": from_email,
            "to": [contact_email],
            "subject": f"New Quote Request from {form_data.name} - {format_project_type(form_data.projectType)}",
            "text": email_text,
            "reply_to": form_data.email,
        })

        print(f"Resend API response: {result}")
        return {"success": True, "data": result}
    except Exception as error:
        print(f"Error sending email: {error}")
        print(f"Error type: {type(error).__name__}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return {"success": False, "error": str(error)}

# API endpoints
@app.post("/api/contact")
async def contact_endpoint(request: ContactRequest):
    """Handle contact form submissions"""
    print(f"Received contact request: {request.model_dump()}")

    try:
        result = await send_contact_email(request)

        if result["success"]:
            print("Email sent successfully")
            return {"message": "Email sent successfully"}
        else:
            print(f"Failed to send email: {result['error']}")
            raise HTTPException(status_code=500, detail=f"Failed to send email: {result['error']}")
    except Exception as error:
        print(f"API Error: {error}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(error)}")

@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "Welcome to API"
    }

@app.get("/health")
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    import socket
    port = int(os.getenv("PORT", 8000))  # Default to 8000 if not set
    print(f"Attempting to start backend server on port {port}")

    # Check if port is already in use
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        sock.bind(("0.0.0.0", port))
        sock.close()
        print(f"Port {port} is available, starting server...")
    except OSError as e:
        print(f"Port {port} is already in use: {e}")
        print("Please stop the existing server or use a different port.")
        exit(1)

    print(f"Backend server running on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)