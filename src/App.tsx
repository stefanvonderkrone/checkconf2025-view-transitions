import KeyVisual from './assets/key_visual.gif';
import LevelUp from './assets/level_up.svg';

function App() {
    return (
        <main className="relative mx-auto h-[67.5rem] w-[120rem]">
            <picture className="absolute top-0 left-0 z-0 block h-screen">
                <img
                    alt="key visual"
                    className="h-full w-full"
                    src={KeyVisual}
                />
            </picture>

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-9">
                <picture>
                    <img
                        alt="level up"
                        src={LevelUp}
                        className="w-[36.25rem]"
                    />
                </picture>
                <h1 className="text-[3rem] font-bold text-[#FFBB1C]">
                    Your user journey with view transitions
                </h1>
                <hr className="w-[57.5rem] border-[0.125rem] border-white" />
                <h3 className="h-2 text-[2.125rem] text-white">
                    Stefan von der Krone | 28/06/24 | 14:00 Uhr
                </h3>
            </div>
        </main>
    );
}

export default App;
