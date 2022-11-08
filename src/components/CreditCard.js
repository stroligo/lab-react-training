import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreditCard(props) {
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div>
        <div> {props.type} </div>
        <div> {props.number} </div>
        <div>
          Expires: {props.expirationMonth}/{props.expirationYear} /{props.bank}
        </div>

        <div>{props.owner} </div>
        <div>
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <FontAwesomeIcon icon={['fab', 'microsoft']} />
          <FontAwesomeIcon icon={['fab', 'google']} />
          <FontAwesomeIcon icon="check-square" />
          With Coffee Checked, these companies always know their coffee is hot
          and ready!
        </div>
      </div>
    </div>
  );
}
export default CreditCard;
