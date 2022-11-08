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
      </div>
    </div>
  );
}
export default CreditCard;
