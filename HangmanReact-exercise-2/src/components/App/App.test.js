import React from 'react';
import { createRoot} from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const container = document.getElementById('app');
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  })