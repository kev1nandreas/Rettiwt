import "../assets/css/MenuSidebar.css";

function MenuSidebar({ menu, icon: Icon, location }) {
  return (
    <div className="menu" onClick={() => window.location.replace(location)}>
      {Icon && <Icon className="icon" />}
      <p>{menu}</p>
    </div>
  );
}

export default MenuSidebar;
