import Level from './Level';
import Slide from './Slide';
import SlidesRouter from './SlidesRouter';
import KeyVisual from './assets/key_visual.gif';
import LevelUp from './assets/level_up.svg';

const SCREEN_01 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '111111111111111111111111111',
    '232323232323232323232323232',
].join('\n');

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
        <picture>
            <img alt="level up" src={LevelUp} className="w-[36.25rem]" />
        </picture>
        <h1>Stop the Flash, Start the Flow</h1>
        <hr className="w-[57.5rem] border-[0.125rem] border-white" />
        <h3>Leveling Up with View Transitions</h3>
        <h3>Stefan von der Krone | 28/06/24 | 14:00 Uhr</h3>
    </Slide>,

    <Slide
        lightMode
        background={
            <div className="flex h-full w-full flex-row">
                <div className="h-full flex-1 bg-[#063773]" />
                <div className="h-full flex-1 bg-white" />
            </div>
        }
    >
        <Level
            tileSize={18}
            background={null}
            blueprint={SCREEN_01}
            pixelScale={2}
        />
        <h1>App vs. Web</h1>
        <p>TODO: show video of app navigation vs video of web navigation</p>
        <p>QUESTION: can we have nice transitions in web as well?</p>
    </Slide>,

    <Slide lightMode>
        <h1>Some examples</h1>
        <ul>
            <li>Simple Fade In</li>
            <li>Slide In</li>
            <li>Hero transition</li>
        </ul>
        <p>TODO: show all three transitions</p>
    </Slide>,

    <Slide lightMode>
        <h1>Benefits</h1>
        <ul>
            <li>reduced cognitive load</li>
            <li>perceived performance</li>
            <li>enhanced engagement</li>
        </ul>
    </Slide>,

    <Slide lightMode>
        <h1>How do View Transitions work?</h1>
        <ul>
            <li>have a new ViewState</li>
            <li>
                call <code>document.startViewTransition()</code>
            </li>
            <li>Win!</li>
            <li>fade in example</li>
        </ul>
    </Slide>,

    <Slide lightMode>
        <h1>How do they actually work?</h1>
        <ul>
            <li>document.startViewTransition()</li>
            <li>ViewTransition Result</li>
            <li>::view-transition pseudo elements</li>
            <li>view-transition-name CSS property</li>
            <li>slide in example</li>
            <li>hero transition example</li>
        </ul>
    </Slide>,

    <Slide lightMode>
        <h1>UX Considerations</h1>
        <ul>
            <li>keep it simple</li>
            <li>respect prefers-reduced-motion</li>
            <li>Progressive enhancement</li>
        </ul>
    </Slide>,

    <Slide lightMode>
        <h1>The end</h1>
        <ul>
            <li>
                Link to this repo and a README with additional material/links
            </li>
        </ul>
    </Slide>,
];

function App() {
    return (
        <main className="relative mx-auto h-[67.5rem] w-[120rem]">
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
