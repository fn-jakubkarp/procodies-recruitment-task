import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Section from '@/components/Section';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

import { texts } from '@/constants/texts';
import { assets } from '@/constants/assets';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero className="mb-12" />
            <Features
                header={texts.featureSection.header}
                features={texts.featureSection.features}
                className="mb-8"
            />
            <Section
                src={assets.products_2}
                alt="AboutSection"
                header={texts.aboutSection.header}
                firstParagraph={texts.aboutSection.firstParagraph}
                secondParagraph={texts.aboutSection.secondParagraph}
                reverseLayout={true}
                className="mb-12"
            />
            <Section
                src={assets.products_1}
                alt="productSection"
                header={texts.productSection.header}
                firstParagraph={texts.productSection.firstParagraph}
                secondParagraph={texts.productSection.secondParagraph}
                className="mb-12"
            />
            <Faq className="mb-4" />
            <Footer className="mb-4" />
        </>
    );
};

export default HomePage;
