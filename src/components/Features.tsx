import { cn } from '@/utils/twMerge';

interface FeaturesProps {
    header: string;
    features: string;
    className?: string;
}

const Features: React.FC<FeaturesProps> = ({ header, features, className }) => {
    return (
        <>
            <section
                className={cn('flex flex-col items-center gap-2', className)}
            >
                <header className="font-bold text-5xl text-center">
                    {header}
                </header>
                <p className="text-accent text-xl text-center">{features}</p>
            </section>
        </>
    );
};

export default Features;
