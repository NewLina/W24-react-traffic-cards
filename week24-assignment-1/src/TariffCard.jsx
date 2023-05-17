import {useState} from 'react';
import './tariffCard.scss';

function TariffCard(props) {
    const [pressed, setPressed] = useState(false);
    const {headerColor, tariffColor, price, speed} = props;
    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
<div className={pressed ? 'selected' : ''} onClick={handleChange}>
        <div className={`card__heading ${headerColor}`}>Безлимитный <span>{price}</span></div>
        <div className={`card__tariff ${tariffColor}`}>
            <div className="card__tariff-rub">руб</div>
            <div className="card__tariff-month"><span className="card__tariff-price">{price}</span> /мес</div>
        </div>
        <div className="card__volume">до {speed} Мбит/сек</div>
        <div className="card__text">Объем включенного трафика не ограничен</div>
</div>
    );
}
export default TariffCard;