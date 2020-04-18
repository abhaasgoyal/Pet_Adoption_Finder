import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  // for unrendering useRef and not leaking memory when rerendering
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }
  // One div create ONce
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // below is the cleanup function
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  // Empty array means to run once
  return createPortal(<div> {children} </div>, elRef.current);
};

export default Modal;
// trap focus on a modal
