import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Waigata(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
      {modalIsOpen && <Modal onClick={closeModalHandler} />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default Waigata;
