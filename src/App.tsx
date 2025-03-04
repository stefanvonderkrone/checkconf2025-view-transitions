import AppVsWeb from './slides/AppVsWeb';
import InitialExamples from './slides/InitialExamples';
import Intro from './slides/Intro';
import PreviousSolutions from './slides/PreviousSolutions';
import ViewTransitionBasics from './slides/ViewTransitionBasics';
import SlidesRouter from './SlidesRouter';

const SLIDES = [
    <Intro />,
    <AppVsWeb />,
    <PreviousSolutions />,
    <InitialExamples />,
    <ViewTransitionBasics />,
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
