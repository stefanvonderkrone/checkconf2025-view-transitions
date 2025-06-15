import { FC, ReactNode } from 'react';
import { Backgrounds } from './Backgrounds';
import Slide from './Slide';
import SlidesRouter from './SlidesRouter';
import KeyVisual from './assets/key_visual.gif';
import LevelUp from './assets/level_up.svg';
import { cn } from './cn';
import iosNative from './assets/videos/ios_native.mp4';
import iosWebapp from './assets/videos/ios_webapp.mp4';
import iosWebappViewTransitions from './assets/videos/ios_webapp_view_transitions.mp4';
import { StartViewTransition } from './examples/StartViewTransition';
import { UseViewTransition } from './examples/UseViewTransition';
import qrCode from './assets/qr_code.svg';
import { CssExamples } from './examples/CssExamples';
import { ViewTransition } from './examples/ViewTransition';
import { StartViewTransitionTypes } from './examples/StartViewTransitionTypes';

const BackgroundImage: FC<{ src: string; className?: string }> = ({
    src,
    className,
}) => (
    <img
        src={src}
        width={1920}
        height={1080}
        className={cn('pixelated block h-full w-full', className)}
    />
);

const ContentBox: FC<{
    className?: string;
    children: ReactNode;
    invert?: boolean;
}> = ({ className, children, invert = false }) => (
    <div
        className={cn(
            'absolute flex h-full flex-col items-center justify-center gap-[24px] bg-sky-100 px-16 text-amber-950 drop-shadow-2xl [&_p]:text-amber-900',
            className,
            {
                '[&_h1]:text-amber-500': invert,
                '[&_p]:text-sky-100': invert,
                'bg-amber-950': invert,
            },
        )}
    >
        {children}
    </div>
);

const SLIDES = [
    <Slide
        background={
            <picture className="block h-full w-full">
                <img
                    alt="key visual"
                    className="h-full w-full"
                    src={KeyVisual}
                />
            </picture>
        }
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds1} />
        <picture>
            <img alt="level up" src={LevelUp} className="w-[580px]" />
        </picture>
        <h1 className="text-amber-400 uppercase text-shadow-lg">
            Stop the Flash, <br />
            Start the Flow
        </h1>
        <hr className="w-[920px] border-[2px] border-white" />
        <h3 className="text-center text-white text-shadow-lg">
            Leveling Up with View Transitions
            <br />
            Stefan von der Krone | 28/06/24 | 11:15 Uhr
        </h3>
    </Slide>,

    <Slide background={<BackgroundImage src={Backgrounds.GrasTreeClouds1} />}>
        <ContentBox className="left-1/3 w-1/3">
            <h1>View Transitions</h1>
        </ContentBox>
    </Slide>,

    <Slide background={<BackgroundImage src={Backgrounds.GrasTreeClouds1} />}>
        <link rel="prefetch" href={Backgrounds.BeatEmUp3} />:
        <link rel="prefetch" href={iosNative} />
        <link rel="prefetch" href={iosWebapp} />
        <ContentBox className="left-1/3 w-1/3">
            <h1>App vs. Web</h1>
            <p>smooth UI transitions</p>
            <p>perception of good performance</p>
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={<BackgroundImage src={Backgrounds.BeatEmUp3} />}
    >
        <ContentBox className="left-0 w-1/3">
            <h1>App</h1>
            <video className="w-3/4 rounded-4xl border-0 drop-shadow-lg">
                <source src={iosNative} />
            </video>
        </ContentBox>
        <ContentBox className="left-2/3 w-1/3">
            <h1>Web</h1>
            <video className="w-3/4 rounded-4xl border-0 drop-shadow-lg">
                <source src={iosWebapp} />
            </video>
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={<BackgroundImage src={Backgrounds.BeatEmUp3} />}
    >
        <ContentBox className="left-0 w-1/3">
            <h1>App</h1>
            <video
                key="play"
                autoPlay
                loop
                className="w-3/4 rounded-4xl border-0 drop-shadow-lg"
            >
                <source src={iosNative} />
            </video>
        </ContentBox>
        <ContentBox className="left-2/3 w-1/3 opacity-50">
            <h1>Web</h1>
            <video className="w-3/4 rounded-4xl border-0 drop-shadow-lg">
                <source src={iosWebapp} />
            </video>
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={<BackgroundImage src={Backgrounds.BeatEmUp3} />}
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds2} />
        <ContentBox className="left-0 w-1/3 opacity-50">
            <h1>App</h1>
            <video
                key="stop"
                className="w-3/4 rounded-4xl border-0 drop-shadow-lg"
            >
                <source src={iosNative} />
            </video>
        </ContentBox>
        <ContentBox className="left-2/3 w-1/3">
            <h1>Web</h1>
            <video
                key="play"
                autoPlay
                loop
                className="w-3/4 rounded-4xl border-0 drop-shadow-lg"
            >
                <source src={iosWebapp} />
            </video>
        </ContentBox>
    </Slide>,

    <Slide background={<BackgroundImage src={Backgrounds.GrasTreeClouds2} />}>
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds3} />
        <ContentBox className="left-0 w-1/3">
            <h1>View Transitions</h1>
            <p>Reduced cognitive load</p>
            <p>Perceived performance</p>
            <p>Enhanced engagement</p>
        </ContentBox>
    </Slide>,

    <Slide background={<BackgroundImage src={Backgrounds.GrasTreeClouds3} />}>
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds4} />
        <ContentBox invert>
            <h1>Examples of View Transitions</h1>
            <p>Simple fade-in</p>
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={<BackgroundImage src={Backgrounds.GrasTreeClouds4} />}
        viewTransitionName="slide-from-left"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds5} />
        <ContentBox className="right-0">
            <h1>Examples of View Transitions</h1>
            <p>Slide from left</p>
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.GrasTreeClouds5} />}
        viewTransitionName="slide-from-right"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds6} />
        <ContentBox invert className="left-0">
            <h1>Examples of View Transitions</h1>
            <p>Slide from right</p>
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.GrasTreeClouds6} />}
        viewTransitionName="star-wars-simple-from-left"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds7} />
        <ContentBox>
            <h1>Examples of View Transitions</h1>
            <p>Star Wars diagonal wipe from left</p>
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.GrasTreeClouds7} />}
        viewTransitionName="star-wars-simple-from-right"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeClouds8} />
        <ContentBox invert>
            <h1>Examples of View Transitions</h1>
            <p>Star Wars diagonal wipe from right</p>
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.GrasTreeClouds8} />}
        viewTransitionName="star-wars-circle-in"
    >
        <link rel="prefetch" href={Backgrounds.BigCityScape} />
        <ContentBox>
            <h1>Examples of View Transitions</h1>
            <p>Star Wars iris wipe</p>
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.BigCityScape} />}
        viewTransitionName="batman"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeCloudsMoutain2} />
        <link rel="prefetch" href="/fonts/PressStart2P.ttf" />
        <ContentBox invert className="[view-transition-name:do-nothing-2]">
            <h1>Examples of View Transitions</h1>
            <p>60s Batman TV Show</p>
        </ContentBox>
        <picture className="absolute top-[calc(1080px_*_1.5)] left-1/2 -translate-1/2 [view-transition-name:checkconf-logo-batman]">
            <img alt="level up" src={LevelUp} className="w-[580px]" />
        </picture>
    </Slide>,

    <Slide
        background={
            <BackgroundImage
                className="[view-transition-name:slide-from-left]"
                src={Backgrounds.GrasTreeCloudsMoutain2}
            />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:slide-from-right]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes highlightedLines={[0, 1, 2, 3, 4, 5]} />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes
                highlightedLines={[
                    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                ]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes highlightedLines={[8, 9]} />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes highlightedLines={[11, 12]} />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes highlightedLines={[14, 15]} />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes highlightedLines={[17, 18]} />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:fade-in-code]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox
            invert
            className="left-0 [view-transition-name:slide-from-left]"
        >
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[0, 1]}
            />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[3, 4, 5, 17]}
            />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[6, 7]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[9, 10, 11, 16]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[13, 14, 15]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox className="right-0 [view-transition-name:slide-out-to-right]">
            <h1>How do View Transitions work?</h1>
            <StartViewTransitionTypes />
        </ContentBox>
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition className="[view-transition-name:fade-in-code]" />
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0 [view-transition-name:slide-from-right-react-example]">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[0, 3, 4, 5, 6, 7]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[8, 14]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[9, 10]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[12, 13]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition
                className="[view-transition-name:fade-in-code]"
                highlightedLines={[17, 18, 19, 20, 21]}
            />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition className="[view-transition-name:fade-in-code]" />
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:slide-from-top]">
            <h1>How to style View Transitions</h1>
            <ViewTransition />
        </ContentBox>
    </Slide>,

    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[0, 1]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[3, 4]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[6, 7]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[9, 10]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[12, 13]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[15, 16]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition highlightedLines={[18, 19, 20, 21]} />
        </ContentBox>
    </Slide>,
    <Slide
        lightMode
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain2} />
        }
        viewTransitionName="do-nothing"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeCloudsMoutain3} />
        <ContentBox invert className="left-0">
            <h1>How do View Transitions work?</h1>
            <StartViewTransition />
        </ContentBox>
        <ContentBox className="right-0">
            <h1>React Example</h1>
            <UseViewTransition />
        </ContentBox>
        <ContentBox className="[view-transition-name:fade-in-code]">
            <h1>How to style View Transitions</h1>
            <ViewTransition />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain3} />
        }
        viewTransitionName="fade-in"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeCloudsMoutain4} />
        <ContentBox invert>
            <h1>Fade In</h1>
            <CssExamples.FadeIn />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain4} />
        }
        viewTransitionName="slide-from-left"
    >
        <link rel="prefetch" href={Backgrounds.GrasTreeCloudsMoutain5} />
        <ContentBox>
            <h1>Slide from left</h1>
            <CssExamples.SlideFromLeft />
        </ContentBox>
    </Slide>,

    <Slide
        background={
            <BackgroundImage src={Backgrounds.GrasTreeCloudsMoutain5} />
        }
        viewTransitionName="slide-from-right"
    >
        <link rel="prefetch" href={Backgrounds.Scifi1} />
        <ContentBox invert>
            <h1>Slide from right</h1>
            <CssExamples.SlideFromRight />
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.Scifi1} />}
        viewTransitionName="star-wars-simple-from-left"
    >
        <link rel="prefetch" href={Backgrounds.Scifi2} />
        <ContentBox className="left-0">
            <h1>Star Wars diagonal wipe from left</h1>
            <CssExamples.StarWarsSimpleFromLeft />
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.Scifi2} />}
        viewTransitionName="star-wars-simple-from-right"
    >
        <link rel="prefetch" href={Backgrounds.Scifi3} />
        <ContentBox invert className="right-0">
            <h1>Star Wars diagonal wipe from right</h1>
            <CssExamples.StarWarsSimpleFromRight />
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.Scifi3} />}
        viewTransitionName="star-wars-circle-in"
    >
        <ContentBox>
            <h1>Star Wars iris wipe</h1>
            <CssExamples.StarWarsCircleIn />
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.BigCityScape} />}
        viewTransitionName="batman"
    >
        <link rel="prefetch" href={Backgrounds.SnowyMountain2} />
        <ContentBox
            invert
            className="left-0 [view-transition-name:do-nothing-2]"
        >
            <h1>60s Batman TV Show</h1>
            <CssExamples.Batman />
        </ContentBox>
        <picture className="absolute top-[calc(1080px_*_1.5)] left-1/2 -translate-1/2 [view-transition-name:checkconf-logo-batman]">
            <img alt="level up" src={LevelUp} className="w-[580px]" />
        </picture>
    </Slide>,

    <Slide
        background={
            <BackgroundImage
                src={Backgrounds.SnowyMountain2}
                className="[view-transition-name:slide-from-right]"
            />
        }
        viewTransitionName="none"
    >
        <link rel="prefetch" href={iosWebappViewTransitions} />
        <ContentBox
            invert
            className="left-0 w-1/3 [view-transition-name:slide-from-left]"
        >
            <h1>UX Considerations</h1>
            <p>keep it simple</p>
            <p>respect prefers-reduced-motion</p>
            <p>Progressive enhancement</p>
        </ContentBox>
    </Slide>,
    <Slide
        background={
            <BackgroundImage
                src={Backgrounds.SnowyMountain2}
                className="[view-transition-name:do-nothing-2]"
            />
        }
        viewTransitionName="do-nothing"
    >
        <link rel="prefetch" href={Backgrounds.SnowyMountain1} />
        <ContentBox className="left-1/3 w-1/3 [view-transition-name:slide-from-left-2]">
            <h1>WebApp</h1>
            <video
                className="w-3/4 rounded-4xl border-0 drop-shadow-lg"
                autoPlay
                loop
            >
                <source src={iosWebappViewTransitions} />
            </video>
        </ContentBox>
        <ContentBox
            invert
            className="left-0 w-1/3 [view-transition-name:do-nothing-3]"
        >
            <h1>UX Considerations</h1>
            <p>keep it simple</p>
            <p>respect prefers-reduced-motion</p>
            <p>Progressive enhancement</p>
        </ContentBox>
    </Slide>,

    <Slide
        background={<BackgroundImage src={Backgrounds.SnowyMountain1} />}
        viewTransitionName="slide-from-top"
    >
        <ContentBox className="left-0 w-1/2">
            <h1>Q & A</h1>
            <p className="text-center">
                Link to the repo and a README with additional material/links
            </p>
            <img src={qrCode} width={480} height={480} />
        </ContentBox>
    </Slide>,
];

function App() {
    return (
        <main className="relative mx-auto h-[1080px] w-[1920px]">
            <SlidesRouter slides={SLIDES} />
            <svg>
                <defs>
                    <mask id="circle-mask">
                        <circle cx="0" cy="0" r="10" fill="#000" />
                    </mask>
                </defs>
            </svg>
        </main>
    );
}

export default App;
