import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from "./theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);

