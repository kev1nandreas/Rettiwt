import "./App.css";
import "./reset.css";
import Sidebar from "./containers/Sidebar.jsx";
import MainSection from "./containers/MainSection.jsx";
import RightSidebar from "./containers/RightSidebar.jsx";
import Header from "./containers/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-container">
        <Sidebar></Sidebar>
        <MainSection></MainSection>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default App;
