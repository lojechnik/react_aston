import React from "react";
import ChildComponent from "./childComponent";

export default class ClassComponent extends React.Component {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: object | Readonly<object>) {
    super(props);
    this.state = "";
    this.inputRef = React.createRef();
  }
  inputRefToState() {
    if (this.inputRef?.current?.value) {
      this.setState({ inputValue: this.inputRef.current.value });
    }
  }
  componentDidMount(): void {
    console.log("ComponentDidMount");
  }
  componentDidUpdate(): void {
    console.log("ComponentDidUpdate");
    console.log("state updated, ", this.state);
  }
  componentWillUnmount(): void {
    console.log("ComponentUnmounted");
  }

  render() {
    return (
      <>
        <div
          onClick={() => {
            this.inputRefToState();
          }}
        >
          Кнопка
          <input ref={this.inputRef}></input>
        </div>
        <ChildComponent text={this.inputRef?.current?.value} />
      </>
    );
  }
}
