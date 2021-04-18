
export const words = (chars: number) => chars / 5;
export const minutes = (seconds: number) => seconds / 60;

// The zero at the end just displays a zero if the wpm comes out to a falsy value
export const wpm = (words: number, minute: number) => Math.round(words / minute) || 0;

export const countCorrectCharacters = (text: string, input: string) => {
  const textChars = text.replace(' ', '');
  const inputChars = input.replace(' ', '');
  // This splits and filters the input and counts all of the matching characters
  return inputChars.split('').filter((char, i) => char === textChars[i]).length;
}