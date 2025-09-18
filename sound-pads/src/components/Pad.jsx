const Pad = ({ color, onn, toggle, id }) => {
  return (
    <button
      onClick={() => toggle(id)}
      className={onn ? "on" : null}
      style={{ backgroundColor: color }}
    ></button>
  );
};

export default Pad;
