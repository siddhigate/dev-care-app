import Nav from "./components/core/Nav";
import Score from "./components/core/Score";
import Sidebar from "./components/core/Sidebar";
import TimerClock from "./components/core/TimerClock";
import Toggles from "./components/core/Toggles";
import "./css/style.css";

function App() {
  return (
    <>
      <Nav></Nav>

      <div class="main-wrapper">
        <Sidebar></Sidebar>

        <main className="main">
          <h1>Hello Siddhi👋</h1>

          <div class="main-content">
          <div className="timer">
          <TimerClock minutes="20" seconds="00"></TimerClock>
            <Toggles />
          </div>
          <div className="cta">
            <div>
              <button className="btn btn-primary">Start</button>
            </div>
          </div>
          </div>
        </main>

        <Score/>
      </div>
    </>
  );
}

export default App;
