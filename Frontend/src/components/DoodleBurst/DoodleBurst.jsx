import "./DoodleBurst.css";

const DoodleBurst = () => {
  return (
    <div className="doodleBurst" aria-hidden="true">
      <img
        src="/images/fan1.png"
        alt=""
        className="doodleBurst-layer doodleBurst-layer1"
      />
      <img
        src="/images/fan2.png"
        alt=""
        className="doodleBurst-layer doodleBurst-layer2"
      />
      <img
        src="/images/fan3.png"
        alt=""
        className="doodleBurst-layer doodleBurst-layer3"
      />
    </div>
  );
};

export default DoodleBurst;