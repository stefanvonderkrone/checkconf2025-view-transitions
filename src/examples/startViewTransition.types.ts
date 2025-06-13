// @ts-expect-error
interface Document {
    // starts the view transition
    startViewTransition: (
        callback: () => void | Promise<void>,
    ) => ViewTransition;
}

interface ViewTransition {
    // DOM update is done
    updateCallbackDone: Promise<void>;

    // Animation is about to start
    ready: Promise<void>;

    // Animation finished
    finished: Promise<void>;

    // skip this ViewTransition
    skipTransition: () => void;
}
