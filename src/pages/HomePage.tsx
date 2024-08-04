import Section from '@/components/Section';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import React from 'react';
import { texts } from '@/constants/texts';
import { assets } from '@/constants/assets';
import Features from '@/components/Features';

const HomePage: React.FC = () => {
    return (
        <>
            <Features
                header={texts.featureSection.header}
                features={texts.featureSection.features}
            />
            <Section
                src={assets.products_1}
                alt="AboutSection"
                header={texts.aboutSection.header}
                firstParagraph={texts.aboutSection.firstParagraph}
                secondParagraph={texts.aboutSection.secondParagraph}
                reverseLayout={true}
            />
            <Section
                src={assets.products_2}
                alt="productSection"
                header={texts.productSection.header}
                firstParagraph={texts.productSection.firstParagraph}
                secondParagraph={texts.productSection.secondParagraph}
            />
            <Faq />
            <Footer />
        </>
    );
};

export default HomePage;
