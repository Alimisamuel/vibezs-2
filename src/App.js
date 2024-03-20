
import { ThemeProvider } from '@mui/material';
import './App.css';
import Routes from './Routes';
import theme from './Style/Theme';
import ScrollToTop from './ScrollToTop';




function App() {
  return (
  <>
  <ThemeProvider theme={theme}>
    <ScrollToTop/>
 <Routes/> 
 </ThemeProvider>
  </>
  );
}

export default App;
