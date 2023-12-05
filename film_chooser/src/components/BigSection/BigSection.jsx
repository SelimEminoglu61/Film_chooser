import { Link } from "react-scroll";
import "./styleBigSection.scss";

function BigSection() {
  return (
    <div className="bigDiv">
      <h2>Which side do you select?</h2>
      <div className="leftPart">
        <Link to="hope" smooth={true} duration={500} offset={-70}>
          <img src="/images/hope.jpeg" alt="image" className="backgroundImg" />
        </Link>
      </div>
      <div className="rightPart">
        <Link to="justice" smooth={true} duration={500} offset={-70}>
          <img
            src="/images/justice.jpeg"
            alt="image"
            className="backgroundImg"
          />
        </Link>
      </div>
    </div>
  );
}

export default BigSection;
