const chunkArray = (arr: GenericObject[], size: number): GenericObject[] =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

export { chunkArray };
