const MAX_LEN = 25;

const truncateText = (str: string) => {
  if (str.length < MAX_LEN) return str;
  else return `${str.substring(0, MAX_LEN)}...`;
};

export default truncateText;
