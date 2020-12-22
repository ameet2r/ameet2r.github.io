import '../App.css';

function AboutPage(props) {
    let intro = "Hello, my name is Ameet! And I am a Software Developer."
    let currentWork = "I am currently working at Alliance Enterprises helping create portals to make life easier for our customers."
    let outsideWork = "Outside of work I like to solve problems using engineering in hopes of making the world around me a little bit better."

    let profile = require('../images/Ameet_Toor_Headshot.jpeg');

    return (
        <div className="App-Content">
            <img src={profile.default}  alt="Profile" />
            <p>{intro}</p>
            <p>{currentWork}</p>
            <p>{outsideWork}</p>
        </div>
    );
}

export default AboutPage;