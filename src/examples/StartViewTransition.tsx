import { FC } from 'react';
import { cn } from '../cn';
import { Highlighter } from '../Highlighter';

export const StartViewTransition: FC<{
    highlightedLines?: number[];
    className?: string;
}> = ({ highlightedLines, className }) => {
    return (
        <div
            className={cn(
                'rounded-3xl bg-[#1E1E2E] p-8 text-[#CDD6F4]',
                className,
            )}
        >
            <pre className="flex flex-col text-base">
                <Highlighter lines={highlightedLines}>
                    <code>
                        <span className="Comment">
                            <span className="-spell">
                                // reference the ViewTransition for later
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="Keyword">let</span>{' '}
                        <span className="-variable">transition</span>
                        <span className="Delimiter">
                            <span className="Delimiter">:</span>
                        </span>{' '}
                        <span className="Type">ViewTransition</span>{' '}
                        <span className="Operator">
                            <span className="Delimiter">|</span>
                        </span>{' '}
                        <span className="-constant-builtin">null</span>{' '}
                        <span className="Operator">=</span>{' '}
                        <span className="-constant-builtin">null</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText"> </span>
                    </code>
                    <code>
                        <span className="Keyword">function</span>{' '}
                        <span className="-variable">
                            <span className="Function">runTransition</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-variable">
                            <span className="-variable-parameter">
                                updateDomAsync
                            </span>
                        </span>
                        <span className="Delimiter">
                            <span className="Delimiter">:</span>
                        </span>{' '}
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>{' '}
                        <span className="Operator">=&gt;</span>{' '}
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
                        <span className="-punctuation-bracket">)</span>{' '}
                        <span className="-punctuation-bracket">{'{'}</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // skip running ViewTransitions
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-variable">transition</span>
                        <span className="Delimiter">?.</span>
                        <span className="-variable-member">
                            <span className="Function">skipTransition</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // create a new ViewTransition
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-variable">transition</span>{' '}
                        <span className="Operator">=</span>{' '}
                        <span className="-variable">
                            <span className="-variable-builtin">document</span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="Delimiter">.</span>
                        <span className="-variable-member">
                            <span className="Function">
                                startViewTransition
                            </span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>{' '}
                        <span className="Operator">=&gt;</span>{' '}
                        <span className="-punctuation-bracket">{'{'}</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                    </code>
                    <code>
                        <span className="NonText">{'            '}</span>
                        <span className="Comment">
                            <span className="-spell">// update the DOM</span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'            '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // can be asynchronous
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'            '}</span>
                        <span className="-keyword-return">return</span>{' '}
                        <span className="-variable">
                            <span className="Function">updateDomAsync</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="-punctuation-bracket">{'}'}</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="-punctuation-bracket">{'}'}</span>
                        <span className="Delimiter">;</span>
                    </code>
                </Highlighter>
            </pre>
        </div>
    );
};
