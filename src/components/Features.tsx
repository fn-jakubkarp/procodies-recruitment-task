import React from 'react';

interface FeaturesProps {
    header: string;
    features: string;
}

const Features: React.FC<FeaturesProps> = ({ header, features }) => {
    return (
        <>
            <section className="flex flex-col items-center gap-2">
                <header className="font-bold text-5xl">{header}</header>
                <p className="text-accent text-xl">{features}</p>
            </section>
        </>
    );
};

export default Features;
