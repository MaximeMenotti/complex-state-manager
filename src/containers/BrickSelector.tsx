import { useBoundStore } from "../store";

function BrickSelector() {
  const currentIndex = useBoundStore((state) => state.currentBrickIndex);
  const setCurrentBrickIndex = useBoundStore(
    (state) => state.setCurrentBrickIndex
  );

  const bricks = useBoundStore((state) => state.value.brickList);

  if (bricks.length < 2) {
    return null;
  }

  return (
    <div className="join">
      {bricks.map((brick, index) => (
        <button
          key={brick.id}
          onClick={() => setCurrentBrickIndex(index)}
          className={`join-item btn ${currentIndex === index && "btn-active"}`}
        >
          {index}
        </button>
      ))}
    </div>
  );
}

export default BrickSelector;
