import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ResetPassword from '@/pages/ResetPassword';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Navigate to="/reset-password?token=demo" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
