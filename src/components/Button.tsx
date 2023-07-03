import {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
} from "react";

interface TextInputProps {
  onClick: MouseEventHandler;
  children?: string;
}

const Button: FunctionComponent<TextInputProps> = ({ onClick, children }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
