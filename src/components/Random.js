function Random(props) {
  const randomico = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <div className="Ramdom">
      <div>
        Value between {props.min} and {props.max} = <b>{randomico}</b>
      </div>
    </div>
  );
}
export default Random;
