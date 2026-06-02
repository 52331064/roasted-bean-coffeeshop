import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';  // Global styles & typography
import './App.css';    // Hover effect animations

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);