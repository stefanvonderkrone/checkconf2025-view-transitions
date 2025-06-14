import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// @ts-expect-error
import { registerSW } from 'virtual:pwa-register';

// add this to prompt for a refresh
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('New content available. Reload?')) {
            updateSW(true);
        }
    },
    onOfflineReady() {
        alert('slides now offline available');
    },
});

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
    root.style.setProperty(
        'zoom',
        Math.min(
            window.innerHeight / 1080,
            window.innerWidth / 1920,
        ).toString(),
    );
});
window.dispatchEvent(new UIEvent('resize'));

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
