import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('main.jsx: Rendering App');
const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}
