import { FC } from 'react';
import { CodeBlock } from '../CodeBlock';
import { Highlighter } from '../Highlighter';

export const ViewTransition: FC<{
    className?: string;
    highlightedLines?: number[];
}> = ({ className, highlightedLines }) => {
    return (
        <CodeBlock className={className}>
            <Highlighter lines={highlightedLines}>
                <code>
                    <span className="Comment">
                        <span className="-spell">
                            /* an overlay over the entire page */
                        </span>
                    </span>
                </code>
                <code>
                    <span className="Delimiter">::</span>
                    <span className="-tag">
                        <span className="Constant">
                            <span className="-type-tag-css">
                                view-transition
                            </span>
                        </span>
                    </span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="Comment">
                        <span className="-spell">
                            /* e.g for setting z-index */
                        </span>
                    </span>
                </code>
                <code>
                    <span className="Delimiter">::</span>
                    <span className="-tag">
                        <span className="Constant">
                            <span className="-type-tag-css">
                                view-transition-group
                            </span>
                        </span>
                    </span>
                    <span className="-punctuation-bracket">(</span>
                    <span className="-tag">
                        <span className="-type-tag-css">root</span>
                    </span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="Comment">
                        <span className="-spell">
                            /* contains the snapshots */
                        </span>
                    </span>
                </code>
                <code>
                    <span className="Delimiter">::</span>
                    <span className="-tag">
                        <span className="Constant">
                            <span className="-type-tag-css">
                                view-transition-image-pair
                            </span>
                        </span>
                    </span>
                    <span className="-punctuation-bracket">(</span>
                    <span className="-tag">
                        <span className="-type-tag-css">root</span>
                    </span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="Comment">
                        <span className="-spell">
                            /* a screenshot of the old view */
                        </span>
                    </span>
                </code>
                <code>
                    <span className="Delimiter">::</span>
                    <span className="-tag">
                        <span className="Constant">
                            <span className="-type-tag-css">
                                view-transition-old
                            </span>
                        </span>
                    </span>
                    <span className="-punctuation-bracket">(</span>
                    <span className="-tag">
                        <span className="-type-tag-css">root</span>
                    </span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="Comment">
                        <span className="-spell">
                            /* a live representation of the new view */
                        </span>
                    </span>
                </code>
                <code>
                    <span className="Delimiter">::</span>
                    <span className="-tag">
                        <span className="Constant">
                            <span className="-type-tag-css">
                                view-transition-new
                            </span>
                        </span>
                    </span>
                    <span className="-punctuation-bracket">(</span>
                    <span className="-tag">
                        <span className="-type-tag-css">root</span>
                    </span>
                    <span className="-punctuation-bracket">)</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="Comment">
                        <span className="-spell">
                            /* change animation if the other snapshot is missing
                            */
                        </span>
                    </span>
                </code>
                <code>
                    <span className="Delimiter">::</span>
                    <span className="-tag">
                        <span className="Constant">
                            <span className="-type-tag-css">
                                view-transition-new
                            </span>
                        </span>
                    </span>
                    <span className="-punctuation-bracket">(</span>
                    <span className="-tag">
                        <span className="-type-tag-css">root</span>
                    </span>
                    <span className="-punctuation-bracket">)</span>
                    <span className="Delimiter">:</span>
                    <span className="-type-css">
                        <span className="Constant">
                            <span className="-property-class-css">
                                only-child
                            </span>
                        </span>
                    </span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
                <code>
                    <span className="NonText"> </span>
                </code>
                <code>
                    <span className="-punctuation-bracket">[</span>
                    <span className="-tag-attribute">
                        your-very-own-selector
                    </span>
                    <span className="-punctuation-bracket">]</span>{' '}
                    <span className="-punctuation-bracket">{'{'}</span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="Comment">
                        <span className="-spell">/* must be unique */</span>
                    </span>
                </code>
                <code>
                    <span className="NonText">{'    '}</span>
                    <span className="-property-css">view-transition-name</span>
                    <span className="Delimiter">:</span>{' '}
                    <span className="-string-plain-css">
                        your-very-own-transition-name
                    </span>
                    <span className="Delimiter">;</span>
                </code>
                <code>
                    <span className="-punctuation-bracket">{'}'}</span>
                </code>
            </Highlighter>
        </CodeBlock>
    );
};
