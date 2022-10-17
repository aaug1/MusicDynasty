import { red, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fffefa',
      main: '#d6cbc7',
      dark: '#a59a96',
      contrastText: '#000',
    },
  },
});

export default theme;