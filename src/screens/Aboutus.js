import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";

function Aboutus() {
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 clasName="mb-xxl">About Us</h1>
            <div className="line-graph">
              <p>
                Dev care will help you to take care of your health as
                developers.
              </p>

              <h2 className="mt-xl mb-md">Back health</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                For back health, the app has the feature of posture detection.
                It detects your posture at regular intervals and reminds you to
                sit straight if you are not.
              </p>

              <h2 className="mt-xl mb-md">Eye health</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                To relax your eyes there is a 20-20-20 rule which states that:
                For every 20 minutes spent looking at a screen, a person should
                look at something 20 feet away for 20 seconds This exercise
                relaxes our eyes and reduces eye strain. The app reminds you to
                follow this exercise at regular intervals.
              </p>

              <h2 className="mt-xl mb-md">Ear health</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                For ear health, there is a 60-60 rule: Only turn your device
                volume up to 60% and listen for no more than 60 minutes per day
                The app checks if you are using earphones for longer than 60
                minutes and reminds you to control your earphone usage if it is
                becoming unhealthy.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
