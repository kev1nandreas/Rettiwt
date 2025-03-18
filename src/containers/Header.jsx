import "../assets/css/Header.css";

function Header() {
  return (
    <header className="header">
      <div
        style={{ display: "flex", alignItems: "center", gap: "0.3rem", cursor: "pointer" }}
        onClick={() => window.location.replace("/")}
      >
        <img src="/Logo.png" alt="logo" className="logo" />
        <h3>Rettiwt</h3>
      </div>
    </header>
  );
}

export default Header;
