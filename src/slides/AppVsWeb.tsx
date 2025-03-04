import Slide from '../Slide';

const AppVsWeb = () => {
    return (
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
        </Slide>
    );
};

export default AppVsWeb;
