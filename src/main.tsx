import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

window.addEventListener('keypress', e => {
    if (e.key === 'f') {
        const promise = document.fullscreenElement
            ? document.exitFullscreen()
            : document.documentElement.requestFullscreen({
                  navigationUI: 'hide',
              });
        promise.catch(e => console.error(e));
    }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
