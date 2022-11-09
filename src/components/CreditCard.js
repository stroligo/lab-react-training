import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

function CreditCard(props) {
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div>
        <div className="icon">
          {props.type === 'Visa' ? <FaCcVisa /> : ''}
          {props.type === 'Master Card' ? <FaCcMastercard /> : ''}
        </div>
        <div className="number">•••• •••• •••• {props.number.slice(-4)} </div>
        <div className="infos">
          <div>
            Expires: {props.expirationMonth}/{props.expirationYear}
          </div>
          <div>
            <b>{props.bank}</b>
          </div>
        </div>
        <div className="name">{props.owner} </div>
      </div>
    </div>
  );
}
export default CreditCard;
