export const saveDataToLS = (key, value) => {
  localStorage.setItem(key, value);
};

export const getDataFromLS = (key) => localStorage.getItem(key) || "";
