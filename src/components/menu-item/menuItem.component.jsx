import { withRouter } from "react-router"; 
import "./menuItem.styles.scss";

const MenuItem = ({size, imageUrl, title, linkUrl,history, match}) => {

  return (
    <div 
        className={`menu-item ${size}`}
        onClick={() => {
            history.push(`${match.path}${linkUrl}`)
        }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
