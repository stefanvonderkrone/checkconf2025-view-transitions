import { FC, ReactNode } from 'react';
import { cn } from './cn';

export const CodeBlock: FC<{ children: ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                'mb-12 rounded-3xl bg-[#1E1E2E] p-8 text-[#CDD6F4]',
                className,
            )}
        >
            <pre className="flex origin-top-left flex-col text-2xl">
                {children}
            </pre>
        </div>
    );
};
