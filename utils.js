exports.greyArray = {
    0: "#FFFFFF",
    1: "#E5E5E5",
    2: "#CDCDCD",
    3: "#B3B3B3",
    4: "#9A9A9A",
    5: "#808080",
    6: "#666666",
    7: "#4D4D4D",
    8: "#323232",
    9: "#181818",
  };

exports.piToColour = (num, array) => {
  let piObject = {};
  const pi = Math.PI.toFixed(num);
  const piArray = ("" + pi).split("").splice(1);
  for (let i = 1; i < num + 1; i++) {
    piObject[i] = array[piArray[i]];
  }
  return piObject;
};
