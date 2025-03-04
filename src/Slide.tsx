import { FC, ReactNode } from 'react';
import CheckConf from './assets/check_conf.svg';
import CheckConf2 from './assets/check_conf_2.svg';

const Slide: FC<{
    background?: ReactNode;
    children: ReactNode;
    invertLogo?: boolean;
}> = ({ background, children, invertLogo = false }) => {
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
                    src={invertLogo ? CheckConf2 : CheckConf}
                />
            </picture>
        </div>
    );
};

export default Slide;
