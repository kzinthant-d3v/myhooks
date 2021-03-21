import { useState } from "react";

function useObjArray(arrObj) {
  const [state, setState] = useState(arrObj);

  const add = (newVal) => setState([...state, newVal]);

  const del = (index) => setState(state.filter((_, i) => i !== index));

  const delObj = (key, val) =>
    setState(state.filter((obj) => obj[key] !== val));

  const update = (index, newObj) =>
    setState(state.map((e, i) => (i === index ? newObj : e)));

  const updateObj = (key, val, newVal) =>
    setState(
      state.map((obj) => {
        if (obj[key] === val) {
          obj[key] = newVal;
        }
        return obj;
      })
    );
  const updateObjKey = (key1, val1, key2, newVal) => {
    setState(
      state.map((obj) => {
        if (obj[key1] === val1) {
          obj[key2] = newVal;
        }
        return obj;
      })
    );
  };

  const updateOldIncrement = (key1, val1, key2, num) => {
    setState(
      state.map((obj) => {
        if (obj[key1] === val1) {
          obj[key2] = obj[key2] + num;
        }
        return obj;
      })
    );
  };
  const updateOldDecrement = (key1, val1, key2, num) => {
    setState(
      state.map((obj) => {
        if (obj[key1] === val1) {
          obj[key2] = obj[key2] - num;
        }
        return obj;
      })
    );
  };
  const updateOldFlip = (key1, val1, key2) => {
    setState(
      state.map((obj) => {
        if (obj[key1] === val1) {
          obj[key2] = !obj[key2];
        }
        return obj;
      })
    );
  };

  const getItem = (key, val) => {
    return state.filter((obj) => obj[key] === val);
  };

  const checkExist = (key, val) => {
    return state.some((obj) => obj[key] === val);
  };

  return {
    state,
    setState,
    add,
    del,
    delObj,
    update,
    updateObj,
    updateObjKey,
    updateOldIncrement,
    updateOldDecrement,
    updateOldFlip,
    getItem,
    checkExist,
  };
}
export default useObjArray;
