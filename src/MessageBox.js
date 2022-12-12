import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";



const defaultProps = {
  title: "MessageBox",
  content: <></>,
  container: "#app-message-box",
  buttons: []
};

export default {
  open: props => {
    return new Promise(resolve => {
      const { title, content, container, buttons } = {
        ...defaultProps,
        ...props
      };
      const containerElement = document.querySelector(container);
      if (!containerElement) throw Error(`can't find container ${container}`);

      const handleClose = value => {
        let result = null;
        if (value && !value.target) {
          result = value;
        }
        ReactDOM.unmountComponentAtNode(containerElement);
        return resolve(result);
      };

      const handleButton = handler => () => {
        handleClose(handler());
      };

      ReactDOM.render(
        <Modal title={title} onClose={handleClose}>
            {buttons.map(btn => {
            return (
              <button className="button-24" onClick={handleButton(btn.handler)} key={btn.name}>
                {btn.name}
              </button>
            );
          })}
            {content}
        
        </Modal>,
        containerElement
      );
    });
  }
};
