import { FC } from 'react';
import { cn } from '../cn';
import { Highlighter } from '../Highlighter';

export const UseViewTransition: FC<{
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
            <pre className="flex flex-col">
                <Highlighter lines={highlightedLines}>
                    <code>
                        <span className="Keyword">const</span>{' '}
                        <span className="-variable">deferredRef</span>{' '}
                        <span className="Operator">=</span>{' '}
                        <span className="-variable">
                            <span className="Function">useRef</span>
                        </span>
                        <span className="Operator">
                            <span className="-punctuation-bracket">&lt;</span>
                        </span>
                        <span className="Type">Deferred</span>
                        <span className="Operator">
                            <span className="-punctuation-bracket">&gt;</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-constant-builtin">null</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText"> </span>
                    </code>
                    <code>
                        <span className="Keyword">const</span>{' '}
                        <span className="-variable">
                            <span className="Function">transitionTo</span>
                        </span>{' '}
                        <span className="Operator">=</span>{' '}
                        <span className="-punctuation-bracket">(</span>
                        <span className="-variable">
                            <span className="-variable-parameter">to</span>
                        </span>
                        <span className="Delimiter">
                            <span className="Delimiter">:</span>
                        </span>{' '}
                        <span className="-type-builtin">string</span>
                        <span className="-punctuation-bracket">)</span>{' '}
                        <span className="Operator">=&gt;</span>{' '}
                        <span className="-punctuation-bracket">{'{'}</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // create a deferred Promise
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // to be resolved later on
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Keyword">const</span>{' '}
                        <span className="-variable">deferred</span>{' '}
                        <span className="Operator">=</span>{' '}
                        <span className="-punctuation-bracket">(</span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="-variable">deferredRef</span>
                        <span className="Delimiter">.</span>
                        <span className="-variable-member">current</span>{' '}
                        <span className="Operator">=</span>{' '}
                        <span className="Operator">new</span>{' '}
                        <span className="-variable">
                            <span className="Type">
                                <span className="-constructor-tsx">
                                    Deferred
                                </span>
                            </span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-variable">
                            <span className="Function">runTransition</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>{' '}
                        <span className="Operator">=&gt;</span>{' '}
                        <span className="-punctuation-bracket">{'{'}</span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // initiate the dom update
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="-variable">history</span>
                        <span className="Delimiter">.</span>
                        <span className="-variable-member">
                            <span className="Function">pushState</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">{'{'}</span>
                        <span className="-punctuation-bracket">{'}'}</span>
                        <span className="Delimiter">,</span>{' '}
                        <span className="String">''</span>
                        <span className="Delimiter">,</span>{' '}
                        <span className="-variable">to</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText"> </span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // return the deferred promise
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'        '}</span>
                        <span className="-keyword-return">return</span>{' '}
                        <span className="-variable">deferred</span>
                        <span className="Delimiter">.</span>
                        <span className="-variable-member">promise</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-punctuation-bracket">{'}'}</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="-punctuation-bracket">{'}'}</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="NonText"> </span>
                    </code>
                    <code>
                        <span className="-variable">
                            <span className="Function">useEffect</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>{' '}
                        <span className="Operator">=&gt;</span>{' '}
                        <span className="-punctuation-bracket">{'{'}</span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // resolve the deferred promise
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="Comment">
                            <span className="-spell">
                                // after dom updates are done
                            </span>
                        </span>
                    </code>
                    <code>
                        <span className="NonText">{'    '}</span>
                        <span className="-variable">deferredRef</span>
                        <span className="Delimiter">.</span>
                        <span className="-variable-member">current</span>
                        <span className="Delimiter">?.</span>
                        <span className="-variable-member">
                            <span className="Function">resolve</span>
                        </span>
                        <span className="-punctuation-bracket">(</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                    <code>
                        <span className="-punctuation-bracket">{'}'}</span>
                        <span className="Delimiter">,</span>{' '}
                        <span className="-punctuation-bracket">[</span>
                        <span className="-punctuation-bracket">]</span>
                        <span className="-punctuation-bracket">)</span>
                        <span className="Delimiter">;</span>
                    </code>
                </Highlighter>
            </pre>
        </div>
    );
};
