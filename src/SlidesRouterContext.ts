import { createContext, useContext } from 'react';

export const SlidesRouterContext = createContext({
    currentSlide: 0,
    numSlides: 0,
});
SlidesRouterContext.displayName = 'SlidesRouterContext';

export const useSlidesRouterContext = () => {
    return useContext(SlidesRouterContext);
};
