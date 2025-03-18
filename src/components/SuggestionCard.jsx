import "../assets/css/SuggestionCard.css";

function SuggestionCard() {
  return (
    <div className="sc-container">
      <img src="/female-ava.png" alt="" className="avatar" />
      <div className="profile-label">
        <p id="name">Kevin Andreas</p>
        <p id="username">@kev1nandreas</p>
      </div>
    </div>
  );
}

export default SuggestionCard;
