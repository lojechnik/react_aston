import React from "react";
import ChildComponent from "./ChildComponent";
import './ClassComponent.css'
type stateType = {
  inputValue: string;
  disabled: boolean;
}

export default class ClassComponent extends React.Component<object, stateType> {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: object | Readonly<object>) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      inputValue: '',
      disabled: false
    }
  }
inputFocus = (id:string) => {
 const focusedInput = document.getElementById(id)
 focusedInput?.focus()
 console.log('focus applied')
}
  inputRefToState = () => {
    console.log('it happened', this.inputRef?.current?.value)
    if (this.inputRef?.current?.value) {
      this.setState({ inputValue: this.inputRef.current.value });
    }
  }
private divHider(id:string){
  const divHider = document?.getElementById(id)
  if (divHider) {
  this.state.inputValue === 'реакт' ? divHider.className = 'disabled' : divHider.className = '' 
  } 

}
  componentDidMount(): void {
    console.log("ComponentDidMount");
  }
  componentDidUpdate(): void {
    console.log(this.state.inputValue, 'update log')
    this.divHider('btn-switch')
  }
  componentWillUnmount(): void {
    console.log("ComponentUnmounted");
  }


  render() {
    return (
      <>
        <div id='btn-switch'
          onClick={() => {
            this.inputRefToState();
          }}
        >
          Кнопка1
        </div>
        <div id='btn-focus'
          onClick={() => {
            this.inputFocus('react-input');
          }}
        >
          Кнопка2
        </div>
        <input id = {'react-input'}onChange={this.inputRefToState} ref={this.inputRef}></input>
        <ChildComponent text={this.inputRef?.current?.value} />
      </>
    );
  }
}
