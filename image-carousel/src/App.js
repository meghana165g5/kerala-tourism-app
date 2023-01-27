// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import {Box} from '@mui/material'

function App() {
  return (
    <div className="App">
      <Box sx={{display:'flex', flexDirection: 'column', margin: 2}}>
        <Header />
        <ImageCarousel />
      </Box>
    </div>
  );
}

export default App;
