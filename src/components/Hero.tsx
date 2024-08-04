import FormComponent from './ui/FormComponent';

import { texts } from '@/constants/texts';
import { assets } from '@/constants/assets';

import { cn } from '@/utils/twMerge';

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <>
            <div className={cn('flex gap-4', className)}>
                <div className="flex w-1/3">
                    <img
                        src={assets.products_1}
                        className="w-full h-full object-cover"
                        alt="Hero picture"
                    />
                </div>
                <div className="flex w-2/3 flex-col gap-4">
                    <h1 className="font-extrabold text-[3.25rem] max-w-[90%]">
                        {texts.hero.header}
                    </h1>
                    <h2 className="text-[1.375rem]">{texts.hero.subheader}</h2>
                    <FormComponent />
                </div>
            </div>
        </>
    );
};

export default Hero;
