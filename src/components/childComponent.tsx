import React from "react";

type ChildComponentProps = {
  text: string | undefined;
};

export default class ChildComponent extends React.Component<ChildComponentProps> {
  constructor(props: ChildComponentProps) {
    super(props);
  }


  render() {
    return (
      <>
        <div>This is a child component</div>
        <div>This text was passed by a parent component: {this.props.text}</div>
      </>
    );
  }
}
