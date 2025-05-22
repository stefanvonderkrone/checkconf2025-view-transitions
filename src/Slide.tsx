import { FC, ReactNode } from 'react';
import CheckConf from './assets/check_conf.svg';
import CheckConf2 from './assets/check_conf_2.svg';
import { useSlidesRouterContext } from './SlidesRouterContext';
import { cn } from './cn';

type ViewTransitionName =
    | 'none'
    | 'do-nothing'
    | 'fade-in'
    | 'slide-from-left'
    | 'slide-from-right'
    | 'star-wars-simple-from-left'
    | 'star-wars-simple-from-right'
    | 'star-wars-circle-in'
    | 'star-wars-circle-out';

type ViewTransitionClassMap = {
    [Name in ViewTransitionName]: `[view-transition-name:${Name}]`;
};

const viewTransitionClassMap: ViewTransitionClassMap = {
    none: '[view-transition-name:none]',
    'do-nothing': '[view-transition-name:do-nothing]',
    'slide-from-left': '[view-transition-name:slide-from-left]',
    'slide-from-right': '[view-transition-name:slide-from-right]',
    'star-wars-circle-in': '[view-transition-name:star-wars-circle-in]',
    'star-wars-circle-out': '[view-transition-name:star-wars-circle-out]',
    'star-wars-simple-from-left':
        '[view-transition-name:star-wars-simple-from-left]',
    'star-wars-simple-from-right':
        '[view-transition-name:star-wars-simple-from-right]',
    'fade-in': '[view-transition-name:fade-in]',
};

const Slide: FC<{
    background?: ReactNode;
    children: ReactNode;
    lightMode?: boolean;
    viewTransitionName?: ViewTransitionName;
}> = ({
    background,
    children,
    lightMode = false,
    viewTransitionName = 'fade-in',
}) => {
    const { currentSlide, numSlides } = useSlidesRouterContext();
    return (
        <div className="flex h-full w-full flex-col">
            <div
                className={cn(
                    'relative w-full flex-1',
                    viewTransitionClassMap[viewTransitionName],
                )}
            >
                <div className="absolute top-0 left-0 z-0 h-full w-full bg-white">
                    {background}
                </div>

                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[36px] text-2xl tracking-widest">
                    {children}
                </div>

                <picture className="absolute right-[16px] bottom-[16px] z-20">
                    <img
                        alt="CHECK.conf logo"
                        className="w-[256px]"
                        src={lightMode ? CheckConf2 : CheckConf}
                    />
                </picture>
            </div>
            <div
                className={cn(
                    'relative h-[8px] w-full bg-sky-200 [view-transition-name:slides-track]',
                    {
                        'text-white': !lightMode,
                    },
                )}
            >
                <span
                    className="absolute top-0 left-0 h-[8px] bg-amber-300 [view-transition-name:slides-progress]"
                    style={{
                        width: `calc(${currentSlide} / ${numSlides} * 100%)`,
                    }}
                />
            </div>
        </div>
    );
};

export default Slide;
