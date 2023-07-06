export const updateBrick = <Key extends keyof Brick, Value extends Brick[Key]>(
  brick: Brick,
  key: Key,
  value: Value
) => {
  brick[key] = value;
  return brick;
};
