import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    palette: {
        mode: "dark",
        common: {
            black: "#000000",
            white: "#FFFFFF"
        },
        primary: {
            light: "#94A3B8",
            main: "#64748B",
            dark: "#475569",
            contrastText: "#F8FAFC"
        },
        secondary: {
            light: "#FCD34D",
            main: "#F59E0B",
            dark: "#D97706",
            contrastText: "#1E293B"
        },
        error: {
            light: "#FCA5A5",
            main: "#EF4444",
            dark: "#DC2626",
            contrastText: "#F8FAFC"
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
            contrastText: "#F8FAFC"
        },
        success: {
            light: "#86EFAC",
            main: "#22C55E",
            dark: "#16A34A",
            contrastText: "#F8FAFC"
        },
        grey: {
            50: "#0F172A",
            100: "#1E293B",
            200: "#334155",
            300: "#475569",
            400: "#64748B",
            500: "#94A3B8",
            600: "#CBD5E1",
            700: "#E2E8F0",
            800: "#F1F5F9",
            900: "#F8FAFC",
            A100: "#1E293B",
            A200: "#334155",
            A400: "#64748B",
            A700: "#E2E8F0"
        },
        contrastThreshold: 4.5,
        text: {
            primary: "#F8FAFC",
            secondary: "#CBD5E1",
            disabled: "#64748B",
            hint: "#64748B"
        },
        background: {
            default: "#0F172A",
            paper: "#1E293B"
        },
        action: {
            active: "#F8FAFC",
            hover: "rgba(248, 250, 252, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(248, 250, 252, 0.12)",
            selectedOpacity: 0.12,
            disabled: "rgba(248, 250, 252, 0.26)",
            disabledBackground: "rgba(248, 250, 252, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(248, 250, 252, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.16
        },
        divider: "rgba(248, 250, 252, 0.12)"
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
            color: '#F8FAFC'
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.75rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: '#F8FAFC'
        },
        h3: {
            fontWeight: 600,
            fontSize: '2.25rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: '#F8FAFC'
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.875rem',
            lineHeight: 1.4,
            letterSpacing: '0em',
            color: '#F8FAFC'
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.4,
            letterSpacing: '0em',
            color: '#F8FAFC'
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.5,
            letterSpacing: '0em',
            color: '#F8FAFC'
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: '#CBD5E1'
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: '#CBD5E1'
        }
    },
    shadows: [
        'none',
        '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
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
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
                    }
                },
                contained: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
                    }
                },
                outlined: {
                    borderWidth: '1.5px',
                    borderColor: 'rgba(248, 250, 252, 0.2)',
                    '&:hover': {
                        borderWidth: '1.5px',
                        backgroundColor: 'rgba(248, 250, 252, 0.08)',
                        borderColor: 'rgba(248, 250, 252, 0.3)'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    border: '1px solid rgba(248, 250, 252, 0.08)',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: '#1E293B',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                        borderColor: 'rgba(248, 250, 252, 0.12)'
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
                    backgroundImage: 'none',
                    backgroundColor: '#1E293B'
                },
                elevation1: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)'
                },
                elevation2: {
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
                },
                elevation3: {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: '#64748B #1E293B',
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: '#1E293B',
                        width: '8px'
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: '8px',
                        backgroundColor: '#64748B',
                        minHeight: '24px',
                        border: '2px solid #1E293B'
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: '#94A3B8'
                    },
                    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                        backgroundColor: '#94A3B8'
                    },
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#94A3B8'
                    },
                    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                        backgroundColor: '#1E293B'
                    }
                }
            }
        }
    }
});

export default dark;