import { FC, ReactNode } from 'react';
import CheckConf from './assets/check_conf.svg';
import CheckConf2 from './assets/check_conf_2.svg';
import { useSlidesRouterContext } from './SlidesRouterContext';
import { cn } from './cn';

const Slide: FC<{
    background?: ReactNode;
    children: ReactNode;
    lightMode?: boolean;
}> = ({ background, children, lightMode = false }) => {
    const { currentSlide } = useSlidesRouterContext();
    return (
        <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 z-0 h-full w-full bg-white">
                {background}
            </div>

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-9">
                {children}
            </div>

            <picture className="absolute right-4 bottom-4 z-20">
                <img
                    alt="CHECK.conf logo"
                    className="w-64"
                    src={lightMode ? CheckConf2 : CheckConf}
                />
            </picture>

            <div
                className={cn(
                    'absolute bottom-4 left-1/2 z-20 -translate-x-1/2',
                    {
                        'text-white': !lightMode,
                    },
                )}
            >
                <span>{currentSlide + 1}</span>
            </div>
        </div>
    );
};

export default Slide;
