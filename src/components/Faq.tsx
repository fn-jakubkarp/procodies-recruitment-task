import { cn } from '@/utils/twMerge';

import { texts } from '@/constants/texts';

interface FaqProps {
    className?: string;
}

const Faq: React.FC<FaqProps> = ({ className }) => {
    return (
        <>
            <section
                className={cn('flex bg-secondary gap-8 px-4 py-4', className)}
            >
                <div className="flex-1 flex-col gap-1">
                    <h3 className="text-xs font-semibold">
                        {texts.faqSection.firstQuestion}
                    </h3>
                    <p className="text-[0.625rem]">
                        {texts.faqSection.firstAnswer}
                    </p>
                </div>
                <div className="flex-1 flex-col gap-1">
                    <h3 className="text-xs font-semibold">
                        {texts.faqSection.secondQuestion}
                    </h3>
                    <p className="text-[0.625rem]">
                        {texts.faqSection.secondAnswer}
                    </p>
                </div>
                <div className="flex-1 flex-col gap-1">
                    <h3 className="text-xs font-semibold">
                        {texts.faqSection.thirdQuestion}
                    </h3>
                    <p className="text-[0.625rem]">
                        {texts.faqSection.thirdAnswer}
                    </p>
                </div>
            </section>
        </>
    );
};

export default Faq;
