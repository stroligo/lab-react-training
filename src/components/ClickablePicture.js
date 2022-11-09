import { useState } from 'react';

function ClickablePicture(props) {
  const [img, setImg] = useState(props.img);
  function click() {
    setImg(img === props.img ? props.imgClicked : props.img);
  }

  return (
    <div className="ClickPicture">
      <img src={img} alt="Click" onClick={click} />
    </div>
  );
}
export default ClickablePicture;
