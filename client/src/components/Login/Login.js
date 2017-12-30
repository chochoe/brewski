import React from "react";
import Modal from "react-responsive-modal";
import OAuth from "./OAuth";


const Login = (props) => {
  return (
    <div className="example">
      <button className="btn btn-action" name="loginModalOpen" onClick={props.toggleModal}>Login</button>
      <Modal open={props.loginModalOpen} onClose={props.toggleModal} little>
        <br />
        <h2>Google Authentication</h2>
        <OAuth
          onClose={props.toggleModal}
        />
      </Modal>
    </div>
  );
}

export default Login;