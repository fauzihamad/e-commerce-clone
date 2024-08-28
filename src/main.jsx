import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css'

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// https://www.figma.com/design/K1XMo5aK51934TnVvYfuFq/E-commerce-Website-Template-(Freebie)-(Community)?node-id=0-1&t=ZDKxyvqGFLVPpNjR-0