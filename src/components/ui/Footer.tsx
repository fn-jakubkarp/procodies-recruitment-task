import { texts } from '@/constants/texts';
import { footer_cards } from '@/constants/assets';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col gap-1">
            <p className="mx-auto text-xs">{texts.footer.cards}</p>
            <img src={footer_cards} alt="Credit cards we accept" />
        </footer>
    );
};

export default Footer;
