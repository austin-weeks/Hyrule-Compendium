const capitalizeWords = (str: string): string => {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
  }
  return words.join(' ');
}

const truncateText = (desc: string): string => {
  const maxChars = 90;
  const words = desc.split(' ');
  let i = 0;
  let charCount = 0;
  while (i < words.length) {
    charCount += words[i].length;
    if (charCount > maxChars) break;
    i++;
  }
  return words.slice(0, i - 1).join(' ') + '...';
}

export { capitalizeWords, truncateText };