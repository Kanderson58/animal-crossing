import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);