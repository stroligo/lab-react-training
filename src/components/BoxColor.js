function BoxColor(props) {
  // GERA HEX
  function valueToHex(color) {
    if (color === 0) {
      return '00';
    }
    const hex = color.toString(16);
    return hex;
  }
  // MONTA O RGB
  function rgb(red, green, blue) {
    return valueToHex(red) + valueToHex(green) + valueToHex(blue);
  }

  const corHexa = '#' + String(rgb(props.r, props.g, props.b));

  return (
    <div className="BoxColor" style={{ backgroundColor: corHexa }}>
      <div className="result">
        <b>
          rgb({props.r},{props.g},{props.b})
        </b>
      </div>
      <b>
        <div className="result">{corHexa}</div>
      </b>
    </div>
  );
}
export default BoxColor;
