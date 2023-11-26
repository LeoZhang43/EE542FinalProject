import logo from './logo.svg';
import './App.css';
import PhoneCanvas from './component/PhoneCanvas';
import LineChart from './component/ChartComponents';
import TrashCanInfo from './component/TrashCanInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneCanvas/>} />
        <Route path="/about" element={<TrashCanInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
