import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateCurrentBrickProperty } from "../redux/content/contentSlice";
import TextInput from "./TextInput";
import { ChangeEvent } from "react";

function BrickEditor() {
  const brick = useSelector(
    (state: RootState) =>
      state.content.value.brickList[state.content.currentBrickIndex]
  );

  const dispatch = useDispatch();
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
