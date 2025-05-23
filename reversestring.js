function reversestring(str) {
  let revstr = '';
  let l = str.length;
  for (i = l - 1; i >= 0; i--) {
    revstr = revstr + str[i];
  }
  return revstr;
}

console.log(reversestring('Hello'));