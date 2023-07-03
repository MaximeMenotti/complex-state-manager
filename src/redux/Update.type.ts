type Values<T> = T[keyof T];

/**
 * Is a union of all valid states
 */
type UpdateType<Type> = Values<{
  [Key in keyof Type]: {
    key: Key;
    value: Type[Key];
  };
}>;
