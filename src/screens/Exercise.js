import Modal from "../components/core/Modal";

const Exercise = () => {
  const handleClose = () => {
    
  };
  return (
    <div>
      <Modal handleClose={handleClose}>
      <div className="modal-content" style={{"textAlign": "center"}}>
            <h1 class="h1">Take care👋</h1>
            <div className="img-modal">
              <img src="./assets/exercise.png" width="350" height="150" className="img-modal" alt="exercise"/> 
            </div>   
            <div className="txt-center desc">Look 20 feet away for 20 seconds.</div>
            <div className="btn-center">
              <button className="done-btn btn btn-primary">Done</button>
            </div>
            
            </div>
      </Modal>
    </div>
  );
};

export default Exercise;
