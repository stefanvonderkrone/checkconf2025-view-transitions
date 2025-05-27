/* eslint-disable react-refresh/only-export-components */
import { FC } from 'react';
import { CodeBlock } from '../CodeBlock';

const FadeIn: FC<{ className?: string }> = ({ className }) => {
    return (
        <CodeBlock className={className}>
            <code>
                <span className="PreProc">
                    <span className="LspReferenceWrite">@keyframes</span>
                </span>{' '}
                <span className="-variable">fade-in</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="Keyword">from</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">opacity</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-number-css">0</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
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
                    <span className="-type-tag-css">fade-in</span>
                </span>
                <span className="-punctuation-bracket">)</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-property-css">animation</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-string-plain-css">fade-in</span>{' '}
                <span className="-number-css">
                    500<span className="String">ms</span>
                </span>{' '}
                <span className="-string-plain-css">ease-in-out</span>{' '}
                <span className="-string-plain-css">forwards</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
        </CodeBlock>
    );
};

const SlideFromLeft: FC<{ className?: string }> = ({ className }) => {
    return (
        <CodeBlock className={className}>
            <code>
                <span className="PreProc">@keyframes</span>{' '}
                <span className="-variable">slide-from-left</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="Keyword">from</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">transform</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">translateX</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    -100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
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
                    <span className="-type-tag-css">slide-from-left</span>
                </span>
                <span className="-punctuation-bracket">)</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-property-css">animation</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-string-plain-css">slide-from-left</span>{' '}
                <span className="Number">
                    1.2<span className="String">s</span>
                </span>{' '}
                <span className="-string-plain-css">ease-in-out</span>{' '}
                <span className="-string-plain-css">forwards</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
        </CodeBlock>
    );
};

const SlideFromRight: FC<{ className?: string }> = ({ className }) => {
    return (
        <CodeBlock className={className}>
            <code>
                <span className="PreProc">@keyframes</span>{' '}
                <span className="-variable">slide-from-right</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="Keyword">from</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">transform</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">translateX</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
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
                    <span className="-type-tag-css">slide-from-right</span>
                </span>
                <span className="-punctuation-bracket">)</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-property-css">animation</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-string-plain-css">slide-from-right</span>{' '}
                <span className="Number">
                    1.2<span className="String">s</span>
                </span>{' '}
                <span className="-string-plain-css">ease-in-out</span>{' '}
                <span className="-string-plain-css">forwards</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
        </CodeBlock>
    );
};

const StarWarsSimpleFromLeft: FC<{ className?: string }> = ({ className }) => {
    return (
        <CodeBlock className={className}>
            <code>
                <span className="PreProc">@keyframes</span>{' '}
                <span className="-variable">star-wars-simple-from-left</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">clip-path</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">polygon</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    -120<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    -20<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    -100<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText"> </span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">clip-path</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">polygon</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    120<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText"> </span>
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
                    <span className="-type-tag-css">
                        star-wars-simple-from-left
                    </span>
                </span>
                <span className="-punctuation-bracket">)</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-property-css">animation</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-string-plain-css">
                    star-wars-simple-from-left
                </span>{' '}
                <span className="Number">
                    1.2<span className="String">s</span>
                </span>{' '}
                <span className="-string-plain-css">ease-in-out</span>{' '}
                <span className="-string-plain-css">forwards</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
        </CodeBlock>
    );
};

const StarWarsSimpleFromRight: FC<{ className?: string }> = ({ className }) => {
    return (
        <CodeBlock className={className}>
            <code>
                <span className="PreProc">@keyframes</span>{' '}
                <span className="-variable">star-wars-simple-from-right</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">clip-path</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">polygon</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    -120<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    -20<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    -100<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText"> </span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">clip-path</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">polygon</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    120<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="Delimiter">,</span>{' '}
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText"> </span>
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
                    <span className="-type-tag-css">
                        star-wars-simple-from-right
                    </span>
                </span>
                <span className="-punctuation-bracket">)</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-property-css">animation</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-string-plain-css">
                    star-wars-simple-from-right
                </span>{' '}
                <span className="Number">
                    1.2<span className="String">s</span>
                </span>{' '}
                <span className="-string-plain-css">ease-in-out</span>{' '}
                <span className="-string-plain-css">forwards</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
        </CodeBlock>
    );
};

const StarWarsCircleIn: FC<{ className?: string }> = ({ className }) => {
    return (
        <CodeBlock className={className}>
            <code>
                <span className="PreProc">@keyframes</span>{' '}
                <span className="-variable">star-wars-circle-in</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">clip-path</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">circle</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    0<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText"> </span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'        '}</span>
                <span className="-property-css">clip-path</span>
                <span className="Delimiter">:</span>{' '}
                <span className="Function">circle</span>
                <span className="-punctuation-bracket">(</span>
                <span className="-number-css">
                    100<span className="String">%</span>
                </span>
                <span className="-punctuation-bracket">)</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
            <code>
                <span className="NonText"> </span>
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
                    <span className="-type-tag-css">star-wars-circle-in</span>
                </span>
                <span className="-punctuation-bracket">)</span>{' '}
                <span className="-punctuation-bracket">{'{'}</span>
            </code>
            <code>
                <span className="NonText">{'    '}</span>
                <span className="-property-css">animation</span>
                <span className="Delimiter">:</span>{' '}
                <span className="-string-plain-css">star-wars-circle-in</span>{' '}
                <span className="Number">
                    1.2<span className="String">s</span>
                </span>{' '}
                <span className="-string-plain-css">ease-in-out</span>{' '}
                <span className="-string-plain-css">forwards</span>
                <span className="Delimiter">;</span>
            </code>
            <code>
                <span className="-punctuation-bracket">{'}'}</span>
            </code>
        </CodeBlock>
    );
};

export const CssExamples = {
    FadeIn,
    SlideFromLeft,
    SlideFromRight,
    StarWarsSimpleFromLeft,
    StarWarsSimpleFromRight,
    StarWarsCircleIn,
};
