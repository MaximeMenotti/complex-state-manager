import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCurrentBrickIndex } from "../redux/content/contentSlice";

function BrickSelector() {
  const currentIndex = useSelector(
    (state: RootState) => state.undoableContent.present.currentBrickIndex
  );
  const bricks = useSelector(
    (state: RootState) => state.undoableContent.present.value.brickList
  );
  const dispatch = useDispatch();

  if (bricks.length < 2) {
    return null;
  }

  return (
    <div className="join">
      {bricks.map((brick, index) => (
        <button
          key={brick.id}
          onClick={() => dispatch(setCurrentBrickIndex(index))}
          className={`join-item btn ${currentIndex === index && "btn-active"}`}
        >
          {index}
        </button>
      ))}
    </div>
  );
}

export default BrickSelector;
