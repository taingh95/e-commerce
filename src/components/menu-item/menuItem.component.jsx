import "./menuItem.styles.scss";

const MenuItem = (props) => {
  //Destructuring
  const { title, imageUrl, size } = props.section;

  return (
    <div className={`menu-item ${size}`}>
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

export default MenuItem;
