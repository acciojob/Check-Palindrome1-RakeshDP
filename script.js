// complete the given function

function palindrome(str){
	let n=str.length;
	let newStr= str.split("");
	
	let start =0;
	let end=n-1;
	while(start > end){
		if(start.charAt[start] === end.charAt[end]){
			start++;
			end--;
		}
		else {
			return false;
		}
		return true;
	}
	
}
module.exports = palindrome
