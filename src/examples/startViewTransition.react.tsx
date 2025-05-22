import { useEffect, useRef } from 'react';
import { Deferred } from '../Deferred';

export const useViewTransition = () => {
    const deferredRef = useRef<Deferred>(null);

    const transitionTo = (to: string) => {
        const deferred = (deferredRef.current = new Deferred());
        runTransition(() => {
            history.pushState({}, '', to);
            return deferred.promise;
        });
    };

    useEffect(() => {
        deferredRef.current?.resolve();
    }, []);

    return transitionTo;
};

const createViewTransition = () => {
    // reference the ViewTransition for later
    let transition: ViewTransition | null = null;

    const runTransition = (updateDomAsync: () => Promise<void>) => {
        // skip running ViewTransitions
        transition?.skipTransition();

        // create a new ViewTransition
        transition = document.startViewTransition(() => {
            // update the DOM
            // can be asynchronous
            return updateDomAsync();
        });
    };

    return runTransition;
};

const runTransition = createViewTransition();
