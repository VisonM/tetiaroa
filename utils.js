const path = require("path");
const merge = (from, to) => {
  for (const key in from) {
    if (to[key]) {
      to[key] = { ...to[key], ...from[key] };
    } else {
      to[key] = from[key];
    }
  }
};

const setProperty = (obj, name = "", value) => {
  name = name.split(".");
  for (var i = 0; i < name.length - 1; i++) {
    if (typeof obj[name[i]] !== "object" || !obj[name[i]]) obj[name[i]] = {};
    obj = obj[name[i]];
  }
  const realKey = name.pop();
  if (obj[realKey]) {
    obj[realKey] = [value].concat(obj[realKey]);
  } else {
    obj[realKey] = value;
  }
};

const pathResolveDir = (file) => path.resolve(__dirname, file);

const is = {
  hasColon: (val) => /:/g.test(val),
  hasWrap: (val) => /\n/g.test(val),
};

module.exports = {
  merge,
  setProperty,
  pathResolveDir,
  is,
};
