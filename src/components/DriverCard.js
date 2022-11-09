import IdCard from './IdCard';

function DriverCard(props) {
  return (
    <div className="DriverCard">
      <IdCard
        firstName={props.name}
        picture={props.img}
        rating={props.rating}
        car={props.car}
      ></IdCard>
    </div>
  );
}
export default DriverCard;
