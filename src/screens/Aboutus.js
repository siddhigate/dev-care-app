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
              <p>Dev care will help you to take care of your health as developers.</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
