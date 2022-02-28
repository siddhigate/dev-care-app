import { useState, useEffect } from "react";

const OnboardingName = ({ setCard }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    localStorage.setItem("name", e.target.value);
    setName(e.target.value);
    setError(false);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (name.length > 1) {
      setCard("features");
    } else {
      setError(true);
    }
  };

  return (
    <div className="onboarding-name">
      <div className="flex flex-justify-between flex-items-center">
        <h2 className="fs-xl" style={{ flexGrow: "1" }}>
          Hello!
        </h2>
        <img
          src="./assets/cartoon/smileydev.svg"
          style={{ width: "50%" }}
        ></img>
      </div>
      <form name="name" data-netlify="true">
      <div>
        <p className="mt-sm">What can I call you?</p>
        
        <input
          className="mt-md mb-md"
          type="text"
          placeholder="your name"
          onChange={inputHandler}
          value={name}
        ></input>
        {error && <p className="txt-red">Please enter your name</p>}
      </div>

      <div className="flex flex-col flex-items-end">
        <button
          type="submit"
          style={{ background: "var(--clr-primary-500) " }}
          onClick={clickHandler}
        >
          Next
        </button>
      </div>
      </form>
    </div>
  );
};

export default OnboardingName;
