import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';  // Applies global styles like backgrounds
import './App.css';    // Applies any hover animations

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);