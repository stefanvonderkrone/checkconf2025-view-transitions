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

const root = document.querySelector<HTMLDivElement>('#root');
if (!root) {
    throw new Error('no root');
}

window.addEventListener('resize', () => {
    root.style.setProperty('zoom', (window.innerWidth / 1920).toString());
});
window.dispatchEvent(new UIEvent('resize'));

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
