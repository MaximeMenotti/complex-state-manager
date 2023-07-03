import { ChangeEventHandler, FunctionComponent } from "react";

interface TextInputProps {
  value: string;
  onChange: ChangeEventHandler;
  label?: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
