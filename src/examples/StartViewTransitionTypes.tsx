import { FC } from 'react';
import { CodeBlock } from '../CodeBlock';
import { Highlighter } from '../Highlighter';

export const StartViewTransitionTypes: FC<{
    highlightedLines?: number[];
    className?: string;
}> = ({ highlightedLines, className }) => {
    return (
        <CodeBlock className={className}>
            <Highlighter lines={highlightedLines}>
                <code>
                    <span className="Keyword">interface</span>{' '}
                    <span className="Type">Document</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="Comment">
                        <span className="-spell">
                            // starts the view transition
                        </span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-variable-member">
                        <span className="Function">startViewTransition</span>
                    </span>
                    <span className="Delimiter">
                        <span className="Delimiter">:</span>
                    </span>{' '}
                    <span className="-punctuation-bracket">(</span>
                </code>
                <code>
                    <span className="NonText">{'        '}</span>
                    <span className="-variable">
                        <span className="-variable-parameter">callback</span>
                    </span>
                    <span className="Delimiter">
                        <span className="Delimiter">:</span>
                    </span>{' '}
                    <span className="-punctuation-bracket">(</span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="Operator">=&gt;</span>{' '}
                    <span className="-type-builtin">void</span>{' '}
                    <span className="Operator">
                        <span className="Delimiter">|</span>
                    </span>{' '}
                    <span className="Type">Promise</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&lt;</span>
                    </span>
                    <span className="-type-builtin">void</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&gt;</span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="Operator">=&gt;</span>{' '}
                    <span className="Type">ViewTransition</span>
                    <span className="Delimiter">;</span>
                </code>
                <code>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="Keyword">interface</span>{' '}
                    <span className="Type">ViewTransition</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="Comment">
                        <span className="-spell">// DOM update is done</span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-variable-member">updateCallbackDone</span>
                    <span className="Delimiter">
                        <span className="Delimiter">:</span>
                    </span>{' '}
                    <span className="Type">Promise</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&lt;</span>
                    </span>
                    <span className="-type-builtin">void</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&gt;</span>
                    </span>
                    <span className="Delimiter">;</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="Comment">
                        <span className="-spell">
                            // Animation is about to start
                        </span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-variable-member">ready</span>
                    <span className="Delimiter">
                        <span className="Delimiter">:</span>
                    </span>{' '}
                    <span className="Type">Promise</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&lt;</span>
                    </span>
                    <span className="-type-builtin">void</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&gt;</span>
                    </span>
                    <span className="Delimiter">;</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="Comment">
                        <span className="-spell">// Animation finished</span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-variable-member">finished</span>
                    <span className="Delimiter">
                        <span className="Delimiter">:</span>
                    </span>{' '}
                    <span className="Type">Promise</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&lt;</span>
                    </span>
                    <span className="-type-builtin">void</span>
                    <span className="Operator">
                        <span className="-punctuation-bracket">&gt;</span>
                    </span>
                    <span className="Delimiter">;</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="Comment">
                        <span className="-spell">
                            // skip this ViewTransition
                        </span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-variable-member">
                        <span className="Function">skipTransition</span>
                    </span>
                    <span className="Delimiter">
                        <span className="Delimiter">:</span>
                    </span>{' '}
                    <span className="-punctuation-bracket">(</span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="Operator">=&gt;</span>{' '}
                    <span className="-type-builtin">void</span>
                    <span className="Delimiter">;</span>
                </code>
                <code>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
            </Highlighter>
        </CodeBlock>
    );
};
