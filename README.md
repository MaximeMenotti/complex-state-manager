# Complex state managment
## Redux & Redux toolkit
### Nested state with immer

Redux state are immutable by default. That's why you should copy all element insted of change them. It could by painful specialy when you need to update nested state. 
For exmple with this type of data:

```json
{
  users: [
    {
      id: 1,
      name: "Jakob",
      comments: [
        { id: 1, message: "hello there" },
        { id: 2, message: "hi!" },
      ],
    },
    {
      id: 2,
      name: "Johanna",
      comments: [
        { id: 1, message: "yo" },
        { id: 2, message: "sup?" },
      ],
    },
  ]
}
```

You should do something like this to update comment:

```ts
case 'UPDATE_COMMENT':
  return {
    ...state,
      users: [
        ...state.users.slice(0, action.userId),
        Object.assign({}, state.users[action.id], {
          comments: [...state.users[action.id].comments, action.comment]
        }),
        ...state.users.slice(action.userId + 1)
      ]
}
```

With Immer you can do something like this:

```ts
state.user[id].comments[commentIndex] = "this is my latest version of a comment!"
```

One of the inconvenient of this kind of state is the lake of splitting provided by `createSlice` function. For a huge nested state you should handle all the actions in the same place.

## Nested state with normalization

Another way to handle nested state with redux is to normalize data to handle flat object only.
For exemple the previous object could become something like this:

```json
{
  users: {
    1: {name: "Jakob", comments: [1,2] }
    2: {name: "Johanna", comments: [3,4]}
  },
  comments: {
    1: "hello there",
    2: "hi!",
    3: "yo",
    4: "sup?"
  }
}
```

One of the advantage is that you can split those into multiple adapter and have a better file organization. (Need to be study)
One of the inconvenient is that you need to provide normalization and denormalization function (Specially since Normalizr library is no longer maintained).

## Do some magic with TypeScript

By trying to avoid the handwritten of all actions to handle update of each property I find this solution using TypeScript to respect type of updated property:

```ts
type Values<T> = T[keyof T];

type UpdateType<Type> = Values<{
  [Key in keyof Type]: {
    key: Key;
    value: Type[Key];
  };
}>;

export const updateBrick = <Key extends keyof Brick, Value extends Brick[Key]>(
  brick: Brick,
  key: Key,
  value: Value
) => {
  brick[key] = value;
  return brick;
};


export const contentSlice = createSlice({
  name: "content",
  initialState: initialState,
  reducers: {
    updateCurrentBrickProperty: (
      state,
      action: PayloadAction<UpdateType<Brick>>
    ) => {
      const { key, value } = action.payload;
      state.value.brickList[state.currentBrickIndex] = updateBrick(
        state.value.brickList[state.currentBrickIndex],
        key,
        value
      );
    },
  },
});
```
