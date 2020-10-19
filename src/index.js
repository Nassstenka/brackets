module.exports = function check(str, bracketsConfig) {
  let charArray = str.split('');
  let openBrackets = [];
  let closeBrackets = [];
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < charArray.length; i++) {
      if (openBrackets.includes(charArray[i]) && !closeBrackets.includes(charArray[i])) {
        stack.push(charArray[i]);
        continue;
      }
      else if (!openBrackets.includes(charArray[i]) && closeBrackets.includes(charArray[i])) {
          if (stack.length !== 0) {
            let top = stack.pop();
            if (openBrackets.indexOf(top) !== closeBrackets.indexOf(charArray[i])) return false;
          }
          else return false;
      }
      else if (openBrackets.includes(charArray[i]) && closeBrackets.includes(charArray[i])) {
        if (stack.length !== 0) {
            let top = stack.pop();
            if (openBrackets.indexOf(top) !== closeBrackets.indexOf(charArray[i])) {
                stack.push(top);
                stack.push(charArray[i]);
                continue;
            }
        }
        else {
            stack.push(charArray[i]);
            continue;
        }
      }
  }

  if (stack.length !== 0) return false;

  return true;
}
