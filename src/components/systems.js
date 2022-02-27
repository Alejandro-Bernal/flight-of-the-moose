// Takes care of the movement
const MoveCharacter = (entities, { input }) => {
  const { payload } = input.find((x) => x.name === "onMouseDown") || {};

  if (payload) {
    // saying that our character is the main entity
    const mainChar = entities["mainChar"];
    // Change positions
    // page x and page Y get the value of where char is at in the scene
    mainChar.x = payload.pageX;
    mainChar.y = payload.pageY;
  }
  return entities;
};

export { MoveCharacter };
