import React from 'react'

const Modal = ({ show, setShow, children }) => {
  const className = show ? "modal-content" : "modal-hidden";
  const background = show ? "modal-background" : "";
  return (
    <>
      <div className={background}>
        <div className="centered">
          <div className={className}>
            {children}
            <div className="cerrar" onClick={() => setShow(!show)}>
              cerrar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal