import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  font: {
    family: {
      main: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
      mono: "'Roboto Mono', 'Helvetica', 'Arial', 'sans-serif'",
    },
  },
  palette: {
    primary: {
      main: '#705FDE',
    },
    secondary: {
      main: '#fff',
    },
    red: {
      main: '#F75454',
    },
    yellow: {
      main: '#F9D423',
    },
    black: {
      main: '#222',
    },
    green: {
      main: '#286E30',
    },
  },
});

export default theme;
