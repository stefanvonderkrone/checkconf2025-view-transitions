import KeyVisual from '../assets/key_visual.gif';
import LevelUp from '../assets/level_up.svg';
import Slide from '../Slide';

const Intro = () => {
    return (
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
        </Slide>
    );
};

export default Intro;
