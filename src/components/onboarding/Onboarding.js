import { useState } from "react";
import Modal from "../core/Modal";
import OnboardingBackCare from "./OnboardingBackCare";
import OnboardingBackTrain from "./OnboardingBackTrain";
import OnboardingHow from "./OnboardingHow";
import OnboardingName from "./OnboardingName";
import OnboardingNotifs from "./OnboardingNotifs";
import OnboardingSteps from "./OnboardingSteps";

const Onboarding = () => {
  const [card, setCard] = useState("name");

  return (
    <Modal>
      {card === "name" && <OnboardingName setCard={setCard} />}

      {card === "features" && <OnboardingSteps setCard={setCard} />}

      {card === "how" && <OnboardingHow setCard={setCard} />}

      {card === "notifs" && <OnboardingNotifs setCard={setCard} />}

      {card === "backcare" && <OnboardingBackCare setCard={setCard} />}

      {card === "backtrain" && <OnboardingBackTrain setCard={setCard} />}
    </Modal>
  );
};

export default Onboarding;
