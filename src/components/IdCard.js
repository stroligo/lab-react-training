function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <div className="picture">
        <img src={picture} alt="{firstName}" />
      </div>

      <div className="infos">
        <h6>Infos:</h6>
        <div>
          <b>First Name:</b> {firstName}
        </div>
        <div>
          <b>Last Name:</b> {lastName}
        </div>
        <div>
          <b>Gender:</b> {gender}
        </div>
        <div>
          <b>Height:</b> {height}
        </div>
        <div>
          <b>Birth:</b> {birth}
        </div>
      </div>
    </div>
  );
}
export default IdCard;
