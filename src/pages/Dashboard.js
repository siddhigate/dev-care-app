import Score from "../components/core/Score";
import TimerClock from "../components/core/TimerClock";
import Toggles from "../components/core/Toggles";

const Dashboard = () => {
    return (
        <>
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
        </>
    );
};

export default Dashboard;