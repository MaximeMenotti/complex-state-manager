export interface IPrettyJsonDisplayProps {
  data: any;
}

function PrettyJsonDisplay(props: IPrettyJsonDisplayProps) {
  const { data } = props;
  return (
    <div className="mockup-code">
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default PrettyJsonDisplay;
