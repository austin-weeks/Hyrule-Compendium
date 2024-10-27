import React from "react";

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

const triggerFade = (ref: React.RefObject<HTMLElement>, strength: 'full' | 'med' | 'light' = 'full') => {
  if (ref.current === null) return;
  let fadeClass;
  if (strength === 'full') fadeClass = 'fade-in';
  else if (strength === 'med') fadeClass = 'fade-in-med';
  else fadeClass = 'fade-in-light';
  ref.current.classList.remove(fadeClass);
  //Read the width of the element to force browser to trigger animation
  void ref.current.offsetWidth;
  ref.current.classList.add(fadeClass);
}


export { capitalizeWords, truncateText, triggerFade };
