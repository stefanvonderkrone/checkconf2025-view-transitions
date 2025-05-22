import {
    Children,
    cloneElement,
    ComponentPropsWithoutRef,
    FC,
    ReactElement,
    ReactNode,
} from 'react';

const toIndex = (_: unknown, index: number) => index;
const createIndicesFromChildren = (children: ReactNode) =>
    Array.from({ length: Children.count(children) }, toIndex);

export const Highlighter: FC<{
    lines?: number[];
    children: ReactElement<ComponentPropsWithoutRef<'code'>>[];
}> = ({ children, lines = createIndicesFromChildren(children) }) => {
    return (
        <>
            {Children.map(children, (child, index) =>
                cloneElement(child, {
                    style: {
                        ...child.props.style,
                        opacity: lines.includes(index) ? 1 : 0.25,
                    },
                }),
            )}
        </>
    );
};
