import { cn } from '@/utils/twMerge';

import { texts } from '@/constants/texts';

interface FaqProps {
    className?: string;
}

const Faq: React.FC<FaqProps> = ({ className }) => {
    return (
        <>
            <section
                className={cn('flex bg-secondary gap-8 mx-auto', className)}
            >
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold">
                        {texts.faqSection.firstQuestion}
                    </h3>
                    <p className="text-xs">{texts.faqSection.firstAnswer}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold">
                        {texts.faqSection.secondQuestion}
                    </h3>
                    <p className="text-xs">{texts.faqSection.secondAnswer}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold">
                        {texts.faqSection.thirdQuestion}
                    </h3>
                    <p className="text-xs">{texts.faqSection.thirdAnswer}</p>
                </div>
            </section>
        </>
    );
};

export default Faq;
