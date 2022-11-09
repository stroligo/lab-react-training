import Rating from './Rating';

function IdCard(props) {
  return (
    <div className="IdCard">
      <div className="picture">
        <img src={props.picture} alt="{props.firstName}" />
      </div>

      <div className="infos">
        <div>
          <b>Name:</b> {props.firstName}
        </div>
        {props.lastName != null ? (
          <div>
            <b>Last Name:</b> {props.lastName}
          </div>
        ) : (
          ''
        )}
        {props.gender != null ? (
          <div>
            <b>Gender:</b> {props.gender}
          </div>
        ) : (
          ''
        )}
        {props.height != null ? (
          <div>
            <b>Height:</b> {props.height}
          </div>
        ) : (
          ''
        )}

        {props.birth != null ? (
          <div>
            <b>Birth:</b> {props.birth}
          </div>
        ) : (
          ''
        )}

        {props.rating != null ? <Rating>{props.rating}</Rating> : ''}

        {props.car != null ? (
          <div>
            {props.car.model} | <b>{props.car.licensePlate}</b>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
export default IdCard;
