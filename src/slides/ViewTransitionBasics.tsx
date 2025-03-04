import Slide from '../Slide';

const ViewTransitionBasics = () => {
    return (
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
        </Slide>
    );
};

export default ViewTransitionBasics;
