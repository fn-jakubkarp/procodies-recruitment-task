import { texts } from '@/constants/texts';
import { assets } from '@/constants/assets';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col gap-1">
            <p className="mx-auto text-xs">{texts.footer.cards}</p>
            <img src={assets.footer_cards} alt="Credit cards we accept" />
        </footer>
    );
};

export default Footer;
