import React from 'react';
import { ThemeProvider as MThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    status: {
        danger: orange[500],
    },
});


export default function ThemeProvider(props) {
    return (
        <MThemeProvider theme={theme}>
            {props.children}
        </MThemeProvider>
    )
};