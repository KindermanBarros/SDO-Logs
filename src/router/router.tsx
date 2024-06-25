import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../pages/App/App';
import HomePage from '../pages/Home';

function AppRouter() {
  return (
    <Router basename="/SDO-Logs">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
