import React from 'react';
import ReactDOM from 'react-dom/client';
// Update the import path if App is in a different folder, e.g. './components/App'
// Update the import path if App is in a different folder, e.g. './components/App'
// Update the import path below to match the actual location of App.tsx or App.jsx
// Update the import path below to match the actual location of App.tsx or App.jsx
import App from './App'; // If App.tsx is in the same folder as index.tsx
export const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
} else {
  throw new Error("Root element not found");
}
