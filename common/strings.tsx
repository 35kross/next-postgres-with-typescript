export const elide = (input: string, length = 140) => {
  if (isEmpty(input)) {
    return '...';
  }

  if (input.length < length) {
    return input.trim();
  }

  return `${input.substring(0, length)}...`;
};

export const toDate = (input: string) => {
  const date = new Date(input);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

export const isEmpty = (input: string) => {
  return !input || input.length === 0;
};

export const pluralize = (text: string, count: number) => {
  return count > 1 || count === 0 ? `${text}s` : text;
};
