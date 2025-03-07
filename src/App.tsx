import Slide from './Slide';
import SlidesRouter from './SlidesRouter';
import KeyVisual from './assets/key_visual.gif';
import LevelUp from './assets/level_up.svg';

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
        invertLogo
        background={
            <div className="flex h-full w-full flex-row">
                <div className="h-full flex-1 bg-[#063773]" />
                <div className="h-full flex-1 bg-white" />
            </div>
        }
    >
        <h1>App vs. Web</h1>
    </Slide>,

    <Slide invertLogo>
        <h1>Previous Solutions</h1>
        <ul>
            <li>React Transition Group</li>
            <li>GSAP</li>
            <li>Framer Motion</li>
        </ul>
    </Slide>,

    <Slide invertLogo>
        <h1>Some examples</h1>
        <ul>
            <li>Simple</li>
            <li>Slide In</li>
            <li>Slide To Key Visual</li>
        </ul>
    </Slide>,

    <Slide invertLogo>
        <h1>View Transition Basics</h1>
        <ul>
            <li>Focus On Same Document View Transitions</li>
        </ul>
        <pre>
            <code>
                {`
const transition = document.startViewTransition(() => {
    updateTheDom();
})
`}
            </code>
        </pre>
        <pre>
            <code>
                {`
::view-transition,
::view-transition-group(root),
::view-transition-image-pair(root),
::view-transition-old(root),
::view-transition-new(root) {
    /* define animation here */
}
`}
            </code>
        </pre>
    </Slide>,

    <h1 className="text-white">Slide 7</h1>,
];

function App() {
    return (
        <main className="relative mx-auto h-[67.5rem] w-[120rem]">
            <SlidesRouter slides={SLIDES} />
        </main>
    );
}

export default App;
