import "./styleBigSection.scss";

function BigSection() {
  return (
    <div className="bigDiv">
      <h2>Which side do you select?</h2>
      <div className="leftPart">
        <img src="/images/hope.jpeg" alt="image" className="backgroundImg" />
      </div>
      <div className="rightPart">
        <img src="/images/justice.jpeg" alt="image" className="backgroundImg" />
      </div>
    </div>
  );
}

export default BigSection;
