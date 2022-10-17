import Home from "./pages/Home"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red, orange } from '@mui/material/colors';
import theme from './theme'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Home/>
    </ThemeProvider>
    
    </>
    
  );
}

export default App;
