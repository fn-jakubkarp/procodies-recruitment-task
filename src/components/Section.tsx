import { cn } from '@/utils/twMerge';

interface SectionProps {
    src?: string;
    alt?: string;
    header?: string;
    firstParagraph?: string;
    secondParagraph?: string;
    reverseLayout?: boolean;
    className?: string;
}

const Section: React.FC<SectionProps> = ({
    src,
    alt,
    header,
    firstParagraph,
    secondParagraph,
    className,
    reverseLayout = false,
}) => {
    const imageElement = src && (
        <div className="w-1/2">
            <img
                src={src}
                alt={alt || 'About section image'}
                className="w-full h-auto object-cover rounded-[1.875rem]"
                draggable="false"
            />
        </div>
    );

    const contentElement = (
        <div className="w-1/2 flex flex-col justify-center">
            {header && <h2 className="text-xl font-bold mb-6">{header}</h2>}
            {firstParagraph && <p className="mb-8">{firstParagraph}</p>}
            {secondParagraph && <p className="">{secondParagraph}</p>}
        </div>
    );

    return (
        <article
            className={cn(
                'flex gap-8',
                reverseLayout ? 'flex-row' : 'flex-row-reverse',
                className,
            )}
        >
            {imageElement}
            {contentElement}
        </article>
    );
};

export default Section;
