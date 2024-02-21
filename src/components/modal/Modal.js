import ReactDOM from "react-dom";

const Modal = ({ children, actionBar, header, closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  return ReactDOM.createPortal(
    <div>
      <div
        className="absolute inset-0 bg-zinc-700 opacity-90"
        onClick={handleClose}
      ></div>
      <div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-zinc-600 rounded-md overflow-hidden bg-black text-white p-2">
          <div>{header}</div>
          <div>{children}</div>
          <div>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-container")
  );
};

export default Modal;
