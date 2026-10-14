import "./App.css";

function App() {
  return (
    <div className="congrats-container">
      <h1 className="main-heading">Congratulations</h1>

      <div className="congrats-card">
        <img
          src="/images/congrats-card-profile-img.png"
          alt="Kiran V profile"
          className="profile-image"
        />

        <h2 className="profile-name">Kiran V</h2>

        <p className="college-name">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>

        <img
          src="/images/congrats-card-watch-img.png"
          alt="Smart watch"
          className="watch-image"
        />
      </div>
    </div>
  );
}

export default App;
