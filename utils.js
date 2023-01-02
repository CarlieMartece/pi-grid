exports.piToColour = (num, colourArray) => {
  let piObject = {};
  const pi = Math.PI.toFixed(num);
  const piArray = ("" + pi).split("").splice(1);
  for (let i = 1; i < num + 1; i++) {
    piObject[i] = colourArray[piArray[i]];
  }
  return piObject;
};
