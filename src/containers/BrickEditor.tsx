import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateCurrentBrickProperty } from "../core/content/contentSlice";
import TextInput from "../components/TextInput";
import { ChangeEvent } from "react";

function BrickEditor() {
  const brick = useSelector(
    (state: RootState) =>
      state.undoableContent.present.value.brickList[
        state.undoableContent.present.currentBrickIndex
      ]
  );

  const dispatch = useDispatch();
  if (!brick) {
    return null;
  }

  return (
    <>
      <TextInput
        label="Title"
        value={brick.title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(
            updateCurrentBrickProperty({
              key: "title",
              value: event.target.value,
            })
          )
        }
      />
      <TextInput
        label="Description"
        value={brick.description}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(
            updateCurrentBrickProperty({
              key: "description",
              value: event.target.value,
            })
          )
        }
      />
    </>
  );
}

export default BrickEditor;
