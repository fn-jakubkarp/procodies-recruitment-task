import React from 'react';

interface SectionProps {
    src?: string;
    alt?: string;
    header?: string;
    firstParagraph?: string;
    secondParagraph?: string;
    reverseLayout?: boolean;
}

const Section: React.FC<SectionProps> = ({
    src,
    alt,
    header,
    firstParagraph,
    secondParagraph,
    reverseLayout = false,
}) => {
    const imageElement = src && (
        <div className="w-1/2">
            <img
                src={src}
                alt={alt || 'About section image'}
                className="w-full h-auto object-cover"
            />
        </div>
    );

    const contentElement = (
        <div className="w-1/2 flex flex-col justify-center">
            {header && <h2 className="text-xl font-bold">{header}</h2>}
            {firstParagraph && <p className="mt-2">{firstParagraph}</p>}
            {secondParagraph && <p className="mt-2">{secondParagraph}</p>}
        </div>
    );

    return (
        <article
            className={`flex gap-4 ${reverseLayout ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {imageElement}
            {contentElement}
        </article>
    );
};

export default Section;
