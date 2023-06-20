// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = str.replace(/" "/g, '').toLowerCase();

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

	
}
module.exports = palindrome
// const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();