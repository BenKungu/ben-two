import Backdrop from "./Backdrop";

function Modal(props) {
  return (
    <div className="modal" onClick={props.onClick}>
      <Backdrop />
    </div>
  );
}
export default Modal;
