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
            <div style={{ height: 'calc-size(max-content, size * 1.5)' }}>
                <pre className="flex origin-top-left scale-y-150 flex-col text-base">
                    {children}
                </pre>
            </div>
        </div>
    );
};
