// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

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
	// let n=str.length;
	// let newStr= str.split("");
	
	// let start =0;
	// let end=n-1;
	// while(start > end){
	// 	if(start.charAt[start] === end.charAt[end]){
	// 		start++;
	// 		end--;
	// 	}
	// 	else {
	// 		return false;
	// 	}
	// 	return true;
	// }
	
}
module.exports = palindrome
