import './App.css';
import Homepage from './Homepage.jsx';
import ThemeProvider from './Themes/ThemeProvider.jsx';

function App() {
  return (
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;