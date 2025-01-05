import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isState: false,
    };
    this.changeToggle = this.changeToggle.bind(this);
  }

  changeToggle() {
    this.setState((prevState) => ({
      isState: !prevState.isState,
    }));
  }

  render() {
    const buttonClass = this.state.isState
      ? "text-base font-sans font-bold px-6 py-4 bg-red-200 rounded-3xl drop-shadow-md uppercase text-red-600"
      : "text-base font-sans font-bold px-6 py-4 bg-green-200 rounded-3xl drop-shadow-md uppercase text-green-600";

    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <button onClick={this.changeToggle} className={buttonClass}>
          Toggle: {this.state.isState ? "on" : "off"}
        </button>
      </div>
    );
  }
}

export default Toggle;
