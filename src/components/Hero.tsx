import React, { useState } from 'react';
import FormComponent from './FormComponent';
import { texts } from '@/constants/texts';
import { assets } from '@/constants/assets';
import { cn } from '@/utils/twMerge';

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    const [mainImage, setMainImage] = useState(assets.products_0);
    const [fadeIn, setFadeIn] = useState(true);

    const handleImageChange = (newImage: string) => {
        setFadeIn(false);
        setTimeout(() => {
            setMainImage(newImage);
            setFadeIn(true);
        }, 200);
    };

    return (
        <div id="wrapper" className={cn('flex gap-4 items-center', className)}>
            <div
                id="images"
                className="flex flex-col flex-shrink-0 w-auto gap-4 min-w-[481px]"
            >
                <div className="relative">
                    <div className="min-w-[481px] min-h-[480px]">
                        <img
                            src={mainImage}
                            className={cn(
                                'object-cover w-full h-full transition-opacity duration-200 ease-in-out',
                                fadeIn ? 'opacity-100' : 'opacity-50',
                            )}
                            alt="Multiple tech gadgets spread over image"
                            draggable="false"
                        />
                    </div>
                    <div className="absolute right-0 top-0">
                        <div className="w-[160px] h-[160px] rounded-full bg-accent flex flex-col justify-center items-center">
                            <span className="text-white text-[2.375rem] font-bold">
                                $1.99
                            </span>
                            <span className="text-white text-sm">
                                Original value $500
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <img
                        src={assets.products_tb_1}
                        className="object-cover ring-inset ring-[0.93px] rounded-[13.94px] border-accent cursor-pointer"
                        alt="Multiple tech gadgets spread over image"
                        draggable="false"
                        onClick={() => handleImageChange(assets.products_tb_1)}
                    />
                    <img
                        src={assets.products_tb_2}
                        className="object-cover ring-inset ring-[0.93px] rounded-[13.94px] border-accent cursor-pointer"
                        alt="Multiple tech gadgets spread over image"
                        draggable="false"
                        onClick={() => handleImageChange(assets.products_tb_2)}
                    />
                    <img
                        src={assets.products_tb_3}
                        className="object-cover ring-inset ring-[0.93px] rounded-[13.94px] border-accent cursor-pointer"
                        alt="Multiple tech gadgets spread over image"
                        draggable="false"
                        onClick={() => handleImageChange(assets.products_tb_3)}
                    />
                </div>
            </div>
            <div id="form" className="flex flex-col w-full">
                <h1 className="font-extrabold text-[3.25rem] mb-2">
                    {texts.hero.header}
                </h1>
                <h2 className="text-[1.375rem] mb-6">{texts.hero.subheader}</h2>
                <FormComponent />
            </div>
        </div>
    );
};

export default Hero;
