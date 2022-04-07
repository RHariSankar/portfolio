import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { darkTheme } from './pages/home';
import PersonalSection from './pages/personal';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
<Home/>
    </ThemeProvider>
    
  );
}

export default App;
