import Modal from "../components/core/Modal";
import { useEffect, useState } from "react";

const ExerciseCard = ({ setIsDone }) => {
  return (
    <div className="modal-content" style={{ textAlign: "center" }}>
      <h1 className="h1">Take care👋</h1>
      <div className="img-modal">
        <img
          src="./assets/exercise.png"
          width="350"
          height="150"
          className="img-modal"
          alt="exercise"
        />
      </div>
      <div className="txt-center desc">Look 20 feet away for 20 seconds.</div>
      <div className="btn-center">
        <button
          className="done-btn btn btn-primary"
          onClick={() => setIsDone(true)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

const DoneExerciseCard = () => {
  return (
    <div className="modal-content" style={{ textAlign: "center" }}>
      <h1 className="h1">Hurray!</h1>
      <div className="img-modal">
        <img
          src="./assets/cartoon/happydev.png"
          width="200"
          height="200"
          className="img-modal"
          alt="exercise"
        />
      </div>
      <div className="txt-center desc">
        Yayy! You have done the exercise. You can close this tab now.
      </div>
      <div className="btn-center">
        <button className="done-btn btn btn-primary">Done</button>
      </div>
    </div>
  );
};

const Exercise = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let eyedata = JSON.parse(localStorage.getItem("eyedata"));
    let todayDate = new Date();
    let today = todayDate.getDay();
    eyedata[today] = Number(eyedata[today]) + 1;
    localStorage.setItem("eyedata", JSON.stringify(eyedata));
  }, []);

  return (
    <div>
      <Modal>
        {isDone ? (
          <DoneExerciseCard></DoneExerciseCard>
        ) : (
          <ExerciseCard setIsDone={setIsDone}> </ExerciseCard>
        )}
      </Modal>
    </div>
  );
};

export default Exercise;
