import { cn } from '@/utils/twMerge';

import { texts } from '@/constants/texts';
import { assets } from '@/constants/assets';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn('flex flex-col gap-1', className)}>
            <p className="mx-auto text-xs">{texts.footer.cards}</p>
            <img
                src={assets.footer_cards}
                alt="Credit cards we accept"
                draggable="false"
            />
        </footer>
    );
};

export default Footer;
