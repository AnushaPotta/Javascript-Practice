function palindrome(str) {
  let revstr = '';
  let oristr = '';
  let l = str.length;
  str = str.toLowerCase();
  for (let i = 0; i < l; i++) {
    if (/[a-z0-9]/.test(str[i])) 
    oristr = oristr + str[i];
    else oristr = oristr;
  }

  for (let i = oristr.length - 1; i >= 0; i--) {
    revstr = revstr + oristr[i];
  }
  if (revstr === oristr) console.log('palindrome');
  else console.log('Not a palindrome');
}
palindrome('rAceca:  R');