import { createTheme } from '@mui/material/styles';

const light = createTheme({
    palette: {
        mode: "light",
        common: {
            black: "#000000",
            white: "#FFFFFF"
        },
        primary: {
            light: "#64748B",
            main: "#3B4A5C",
            dark: "#2A3441",
            contrastText: "#FFFFFF"
        },
        secondary: {
            light: "#F3C896",
            main: "#E5A663",
            dark: "#D4924A",
            contrastText: "#1E293B"
        },
        error: {
            light: "#FCA5A5",
            main: "#EF4444",
            dark: "#DC2626",
            contrastText: "#FFFFFF"
        },
        warning: {
            light: "#FCD34D",
            main: "#F59E0B",
            dark: "#D97706",
            contrastText: "#1E293B"
        },
        info: {
            light: "#7DD3FC",
            main: "#0EA5E9",
            dark: "#0284C7",
            contrastText: "#FFFFFF"
        },
        success: {
            light: "#86EFAC",
            main: "#22C55E",
            dark: "#16A34A",
            contrastText: "#FFFFFF"
        },
        grey: {
            50: "#F7FAFC",
            100: "#EDF2F7",
            200: "#E2E8F0",
            300: "#CBD5E0",
            400: "#A0AEC0",
            500: "#718096",
            600: "#4A5568",
            700: "#2D3748",
            800: "#1A202C",
            900: "#171923",
            A100: "#EDF2F7",
            A200: "#E2E8F0",
            A400: "#A0AEC0",
            A700: "#2D3748"
        },
        contrastThreshold: 4.5,
        text: {
            primary: "#2D3748",
            secondary: "#4A5568",
            disabled: "#A0AEC0",
            hint: "#A0AEC0"
        },
        background: {
            default: "#F8F9FA",
            paper: "#FDFDFD"
        },
        action: {
            active: "#3B4A5C",
            hover: "rgba(59, 74, 92, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(59, 74, 92, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(59, 74, 92, 0.26)",
            disabledBackground: "rgba(59, 74, 92, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(59, 74, 92, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12
        },
        divider: "rgba(59, 74, 92, 0.12)"
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#2D3748'
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.75rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: '#2D3748'
        },
        h3: {
            fontWeight: 600,
            fontSize: '2.25rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: '#2D3748'
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.875rem',
            lineHeight: 1.4,
            letterSpacing: '0em',
            color: '#2D3748'
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.4,
            letterSpacing: '0em',
            color: '#2D3748'
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.5,
            letterSpacing: '0em',
            color: '#2D3748'
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: '#4A5568'
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: '#4A5568'
        }
    },
    shadows: [
        'none',
        '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontSize: '0.95rem',
                    letterSpacing: '0.01em',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)'
                    }
                },
                contained: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)'
                    }
                },
                outlined: {
                    borderWidth: '1.5px',
                    '&:hover': {
                        borderWidth: '1.5px',
                        backgroundColor: 'rgba(59, 74, 92, 0.04)'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    border: '1px solid rgba(59, 74, 92, 0.08)',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
                        borderColor: 'rgba(59, 74, 92, 0.12)'
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    letterSpacing: '0.01em'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                elevation1: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)'
                },
                elevation2: {
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)'
                },
                elevation3: {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(253, 253, 253, 0.85)'
                }
            }
        }
    }
});

export default light;