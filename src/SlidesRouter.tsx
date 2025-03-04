import { createBrowserHistory } from 'history';
import {
    FC,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useSyncExternalStore,
} from 'react';
import { Deferred } from './Deferred';

const SlidesRouter: FC<{ slides: ReactElement[] }> = ({ slides }) => {
    const history = useMemo(() => createBrowserHistory(), []);
    const location = useSyncExternalStore(
        onChange => history.listen(onChange),
        () => history.location,
    );
    const slideIndex = useMemo(() => {
        const match = location.pathname.match(/\d+/g);
        if (match) {
            const [indexString] = match;
            const index = parseInt(indexString);
            if (Number.isNaN(index)) {
                return 0;
            }
            return index;
        }
        return 0;
    }, [location.pathname]);
    const transitionRef = useRef<ViewTransition>(null);
    const deferredRef = useRef<Deferred>(null);

    useEffect(function initHistory() {
        const abortController = new AbortController();
        // jump back to the slide the the history was initially at
        const onPopState = () => {
            history.replace('/0');
            let localIndex = 0;
            while (localIndex < slideIndex) {
                localIndex++;
                history.push(`/${localIndex}`);
            }
            abortController.abort();
        };
        window.addEventListener('popstate', onPopState, {
            signal: abortController.signal,
        });
        const idx = window.history.state?.idx;
        if (typeof idx === 'number' && idx > 0 && idx < slides.length) {
            // go to the start of the slides
            history.go(-idx);
        } else {
            onPopState();
        }

        return () => {
            abortController.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(
        function checkPathName() {
            if (`/${slideIndex}` !== location.pathname) {
                history.replace(`/${slideIndex}`);
            } else if (slideIndex >= slides.length) {
                history.replace(`/${slides.length - 1}`);
            }
        },
        [history, location.pathname, slideIndex, slides.length],
    );

    useEffect(
        function resolveViewTransition() {
            deferredRef.current?.resolve();
        },
        [location],
    );

    useEffect(
        function handleKeyboardEvents() {
            const abortController = new AbortController();
            const onKeyPress = (e: KeyboardEvent) => {
                switch (e.key) {
                    case 'ArrowLeft':
                    case 'Backspace':
                        if (slideIndex > 0) {
                            history.go(-1);
                        }
                        break;
                    case 'ArrowRight':
                    case ' ':
                    case 'Enter':
                        if (slideIndex < slides.length - 1) {
                            transitionRef.current?.skipTransition();
                            const deferred = (deferredRef.current =
                                new Deferred());
                            transitionRef.current =
                                document.startViewTransition(() => {
                                    history.push(`/${slideIndex + 1}`);
                                    return deferred.promise;
                                });
                        }
                        break;
                }
            };
            document.addEventListener('keydown', onKeyPress, {
                signal: abortController.signal,
            });
            return () => {
                abortController.abort();
            };
        },
        [history, slideIndex, slides.length],
    );

    return slides[slideIndex];
};

export default SlidesRouter;
