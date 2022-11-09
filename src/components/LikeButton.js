import { useState } from 'react';
import { BiLike } from 'react-icons/bi';

function LikeButton() {
  const [contador, setContador] = useState(0);
  const [checkCor, setCheckCor] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function changeColor() {
    if (checkCor > 5) {
      setCheckCor(0);
    }
    return colors[checkCor];
  }

  return (
    <div className="LikeButton">
      <div>
        <button
          onClick={() => {
            setContador(contador + 1);
            setCheckCor(checkCor + 1);
          }}
          style={{ background: changeColor() }}
        >
          <BiLike />
          <b> {contador} Likes</b>
        </button>
      </div>
    </div>
  );
}
export default LikeButton;
