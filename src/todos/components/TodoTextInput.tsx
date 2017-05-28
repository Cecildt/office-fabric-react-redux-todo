import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";

interface ITodoTextInputProps {
  onSave: (text:string)=>void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface ITodoTextInputState {
  text: string;
}

class TodoTextInput extends React.Component<ITodoTextInputProps, ITodoTextInputState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      text: this.props.text || ""
    };
  }

  handleSubmit(e: any): void {
    const text: string = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: "" });
      }
    }
  }

  handleChange(e: any): void {
    this.setState({ text: e.target.value });
  }

  handleBlur(e: any): void {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render(): JSX.Element {
    return (
      <TextField
        placeholder={this.props.placeholder}
        autoFocus={true}
        ariaLabel={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

export default TodoTextInput;
