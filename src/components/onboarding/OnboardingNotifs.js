import { useEffect } from "react";

const OnboardingNotifs = ({ setCard }) => {
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <div className="onboarding-name">
      <div className="flex flex-justify-between flex-items-center">
        <h2 className="fs-xl" style={{ flexGrow: "1" }}>
          Reminder
        </h2>
        <img
          src="./assets/cartoon/smileydev.svg"
          style={{ width: "50%" }}
        ></img>
      </div>

      <div>
        <div className="flex flex-wrap notifs">
          <p>
            <i class="fa-regular fa-bell"></i>Allow Notifications to remind you
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <button
          style={{ background: "var(--clr-primary-500) " }}
          onClick={() => setCard("backcare")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingNotifs;
