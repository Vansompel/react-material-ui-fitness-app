import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: blue[900]
      },
      secondary: {
        main: orange.A400,
        light: orange[200],
        dark: orange[700]
      },
    }
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
