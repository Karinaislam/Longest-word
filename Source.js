
function input(){

	var input = document.getElementById('input').value;
	var output = findLongestWord(input);
	document.getElementById('output').innerHTML= output;


}





function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWordLength = 0;
  var longestWord;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordLength){
	longestWordLength = strSplit[i].length;
	longestWord=strSplit[i];
     
	}
  }
  return longestWord;
}
