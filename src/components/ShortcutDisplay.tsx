import { FunctionComponent } from "react";

interface ShortcutDisplayProps {
  keys: string[];
  label?: string;
}

const ShortcutDisplay: FunctionComponent<ShortcutDisplayProps> = ({
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

export default ShortcutDisplay;
