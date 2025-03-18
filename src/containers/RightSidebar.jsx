import "../assets/css/RightSidebar.css";
import ButtonPost from "../components/ButtonPost";
import SuggestionCard from "../components/SuggestionCard";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <ButtonPost />

      <div className="suggest-container">
        <h4 className="suggest-title">Friend Suggestion</h4>
        <div>
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
