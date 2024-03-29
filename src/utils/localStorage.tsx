export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) return;

  return JSON.parse(data);
};

export const setLocalData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
