const formatListData = results => {
  const obj = JSON.parse(results);
  const dataArray = [];

  if (obj === null || obj === 'undefined') return [];

  for (const [key, value] of Object.entries(obj)) {
    dataArray.push({ key, ...value });
  }

  return [...dataArray];
};

export { formatListData };
