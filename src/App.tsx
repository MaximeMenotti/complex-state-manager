import { useBoundStore } from "./store";

import PrettyJsonDisplay from "./components/PrettyJsonDisplay";
import BrickSelector from "./containers/BrickSelector";
import HotKeys from "./containers/HotKeys";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";

function App() {
  const content = useBoundStore((state) => state.value);

  const addBrick = useBoundStore((state) => state.addBrick);

  const addBrickAction = () => {
    addBrick({
      id: uuidv4(),
      title: "",
      description: "",
      mediaList: [],
    });
  };

  return (
    <>
      <HotKeys />
      <div className="grid grid-cols-2 w-full p-4">
        <div className="flex flex-col items-start gap-2">
          <Button onClick={addBrickAction}>add a brick</Button>
          <BrickSelector />
          {/* <BrickEditor /> */}
        </div>
        <div>
          <PrettyJsonDisplay data={content} />
        </div>
      </div>
    </>
  );
}

export default App;
