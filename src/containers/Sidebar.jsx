import "../assets/css/Sidebar.css";
import MenuSidebar from "../components/MenuSidebar";
import { menuItems } from "../utils/data";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Profile */}
      <div className="profile-container">
        <img src="female-ava.png" alt="avatar" className="avatar" />
        <div className="profile-label">
          <p id="name">Kevin Andreas</p>
          <p id="username">@kev1nandreas</p>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <MenuSidebar key={index} menu={item.menu} icon={item.icon} location={item.redirect} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
