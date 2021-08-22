import './App.css';
import Homepage from './Homepage';
import ThemeProvider from './Themes/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  )
}

export default App;
