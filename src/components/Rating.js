import { FaStar, FaRegStar } from 'react-icons/fa';

function Rating(children) {
  const stars = [];
  let value = Math.round(children.children);

  for (let i = 0; i < 5; i++) {
    if (value > 0) {
      stars[i] = 'A';
    } else {
      stars[i] = 'B';
    }
    value--;
  }

  return (
    <div className="Rating">
      {stars.map((el, index) => {
        return (
          <div className="star" key={index}>
            {el === 'A' ? <FaStar /> : <FaRegStar />}
          </div>
        );
      })}
    </div>
  );
}
export default Rating;
