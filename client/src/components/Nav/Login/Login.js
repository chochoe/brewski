import React from "react";
import Modal from "react-modal";
// import {facebookConfig, googleConfig} from "social-config";

class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loading: false,
      error: null
    };

  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
  
  onLoginSuccess(method, response) {
    console.log('logged successfully with ' + method);
  }

  onLoginFail(method, response) {
    console.log('logging failed with ' + method);
    this.setState({
      error: response
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  onTabsChange() {
    this.setState({
      error: null
    });
  }

}

const Login = (props) => {

    return (
      <div>

        <button
          onClick={props.openModal}
        >
          Open Modal
        </button>

        <Modal
          isOpen={props.isOpen}
          onRequestClose={props.closeModal}
          // visible={this.state.showModal}
          // onCloseModal={this.closeModal.bind(this)}
          // loading={this.state.loading}
          // error={this.state.error}
          // tabs={{
          //   onChange: this.onTabsChange.bind(this)
          // }}
          // loginError={{
          //   label: "Couldn't sign in, please try again."
          // }}
          // registerError={{
          //   label: "Couldn't sign up, please try again."
          // }}
          // startLoading={this.startLoading.bind(this)}
          // finishLoading={this.finishLoading.bind(this)}
        />
      </div>
    )
}

export default Login;