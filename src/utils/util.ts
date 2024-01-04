const isHasData = <T>(dataList: T[], target: T): boolean => {
  return !!dataList.filter((data) => data === target).length;
};

export default isHasData;
