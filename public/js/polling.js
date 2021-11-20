document.getElementById('inputfile')
.addEventListener('change', function() {

var fr=new FileReader();
fr.onload=function(){
  document.getElementById('output').textContent=fr.result;
}

fr.readAsText(this.files[0]);
})

function displayResult(str,word){

var res1 = document.getElementById("opt1").value;
    var res2 = document.getElementById("opt2").value;
    var res3 = document.getElementById("opt3").value;
//document.write(res1,res2,res3);
var str = document.getElementById("output").value;

		// Split the words on each
			// space character
      var count = 0;
			var split = str.split(',');

			// Loop through the words and
			// increase the counter when
			// each split word is not empty
			for (var i = 0; i < split.length; i++) {
				if (split[i] != "") {
					count += 1;
				}
			
      }
      //Display
      document.getElementById("show").innerHTML ="No of words: " + count;



var r = str.split(res1).length - 1;
var r2 = str.split(res2).length - 1;
var r3 = str.split(res3).length - 1;

if (res1.length == 0) {
  res1 = " ";
  r = 0 ;
}
if (res2.length == 0) {
  res2 = " ";
  r2 = 0 ;
}
if (res3.length == 0) {
  res3 = " ";
  r3 = 0 ;
}


if (count != 0){ 
  document.getElementById('form').style.display="none";
  document.getElementById('poll').style.display="block";
  document.getElementById('question1').innerHTML = "Question: " + document.getElementById('question').value;

document.getElementById("rk").innerHTML = res1 ;

document.getElementById("rk2").innerHTML = res2 ;

document.getElementById("rk3").innerHTML = res3 ;


document.getElementById("bar1").innerHTML  = r;
document.getElementById("bar2").innerHTML  = r2;
document.getElementById("bar3").innerHTML  = r3;
document.getElementById("bar1").style.width = ((r/count)*100) + "%";
document.getElementById("bar2").style.width = ((r2/count)*100) + "%";
document.getElementById("bar3").style.width = ((r3/count)*100) + "%";

}
else{
  alert("Choose File to insert!")

}



}
alert("Note: Please download the messages in the chatbox and upload here the downloaded file to display the votes in a polls. Make sure that the chatbox only contains the votes of the students. Incase that the chatbox already contains messages, you may clear the chat history.");


function back(){
  document.getElementById('poll').style.display="none";
  document.getElementById('form').style.display="block";

 document.getElementById('question').value = '';
document.getElementById("opt1").value = '';
document.getElementById("opt2").value = '';

document.getElementById("opt3").value= '';
document.getElementById('inputfile').value = '';

}