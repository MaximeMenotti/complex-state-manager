import { FunctionComponent } from "react";

interface ShorcutDisplayProps {
  keys: string[];
  label?: string;
}

const ShorcutDisplay: FunctionComponent<ShorcutDisplayProps> = ({
  keys,
  label,
}) => {
  return (
    <div>
      {keys.map((key, index) => (
        <>
          {index ? "+" : ""}
          <kbd key={key} className="kbd kbd-sm">
            {key}
          </kbd>
        </>
      ))}{" "}
      {label}
    </div>
  );
};

export default ShorcutDisplay;
