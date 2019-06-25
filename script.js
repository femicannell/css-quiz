 // Displays the first set of questions
function question1() {

	correct_answer = 0;
	
	document.getElementById("question-header").innerHTML = "What does CSS stand for?";
	
	document.getElementById("correct-answers-message").innerHTML = "";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Cascading CSS";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='questiom'>Cascading Style Sheets";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Cascading Separate Style";
	document.getElementById("answer4").innerHTML = "";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check1()' name='next'>Next</button>";
	
	document.getElementById("restart").innerHTML = ""
	document.getElementById("start-button-div").innerHTML = ""
	document.getElementById("start-header").innerHTML = ""
	
}

//checks the first answers
function check1(){
	
	if (document.getElementById('answer2-button').checked){
		correct_answer++;
		answers.push(1)
		question2();
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question2();
	}
}

// Displays the second set of questions
function question2() {

	document.getElementById("question-header").innerHTML = "Which attribute can set text to bold?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Text-Decoration";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Font Style";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Font Weight";
	document.getElementById("answer4").innerHTML = "";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check2()' name='next'>Next</button>";
	
	document.getElementById("restart").innerHTML = ""
	
}

//Checks the answers for the second set of questions
function check2(){
		
	if (document.getElementById("answer3-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question3();
	}
}

//Displays the third set of questions
function question3() {

	document.getElementById("question-header").innerHTML = "Which tag is used to link an external CSS file?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Script</li>";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Link";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Rel";
	document.getElementById("answer4").innerHTML = "";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check3()' name='next'>Next</button>";
	
}

//Checks the answers for the third set of questions
function check3(){
		
	if (document.getElementById("answer2-button").checked){
		correct_answer++;	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question4();
	}

}

//Displays the fourth set of questions
function question4() {

	document.getElementById("question-header").innerHTML = "Which attribute sets the underline property?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Font Style";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Text-Decoration";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Font Weight";
	document.getElementById("answer4").innerHTML = "";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check4()' name='next'>Next</button>";
	
}

//Checks the answers for the fourth set of questions
function check4(){
		
	if (document.getElementById("answer2-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question5();
	}

}

//Displays the fifth set of questions
function question5() {

	document.getElementById("question-header").innerHTML = "Which measurement is NOT relative";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Px";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Cm";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>%";
	document.getElementById("answer4").innerHTML = "<input id='answer4-button' type='radio' name='question'>Em";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check5()' name='next'>Next</button>";
	
}

//Checks the answers for the fifth set of questions
function check5(){
		
	if (document.getElementById("answer2-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false) && (document.getElementById('answer4-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question6();
	}

}

//Displays the sixth set of questions
function question6() {
	
	document.getElementById("question-header").innerHTML = "Which measurement unit IS relative?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Em";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Cm";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Mm";
	document.getElementById("answer4").innerHTML = "<input id='answer4-button' type='radio' name='question'>Inch";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check6()' name='next'>Next</button>";

}

//Checks the answers for the sixth set of questions
function check6(){
		
	if (document.getElementById("answer1-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false) && (document.getElementById('answer4-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question7();
	}

}

//Displays the seventh set of questions
function question7() {

	document.getElementById("question-header").innerHTML = "Which attribute is used to move an element's content away from its border?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Margin";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Padding";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Border";
	document.getElementById("answer4").innerHTML = "<input id='answer4-button' type='radio' name='question'>Width";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check7()' name='next'>Next</button>";

}

//Checks the answers for the seventh set of questions
function check7(){
		
	if (document.getElementById("answer2-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false) && (document.getElementById('answer4-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question8();
	}

}

//Displays te eighth set of questions
function question8() {

	document.getElementById("question-header").innerHTML = "Which element does not contribute to a block element's total width?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Width";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Border";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Background-Image";
	document.getElementById("answer4").innerHTML = "<input id='answer4-button' type='radio' name='question'>Padding";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check8()' name='next'>Next</button>";

}

//Checks the answers for the eighth set of questions
function check8(){
		
	if (document.getElementById("answer3-button").checked){
		correct_answer++;	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false) && (document.getElementById('answer4-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question9();
	}

}

//Displays the ninth set of questions
function question9() {

	document.getElementById("question-header").innerHTML = "What property changes positioned element's display order?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Width";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Background";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Z-Index";
	document.getElementById("answer4").innerHTML = "<input id='answer4-button' type='radio' name='question'>Azimuth";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check9()' name='next'>Next</button>";

}

//Checks the answers for the ninth set of questions
function check9(){
		
	if (document.getElementById("answer3-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false) && (document.getElementById('answer4-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		question10();
	}

}

//Displays the tenth set of questions
function question10() {

	document.getElementById("question-header").innerHTML = "Which value of background-repeat will cause a background to repeat vertically?";
	
	document.getElementById("answer1").innerHTML = "<input id='answer1-button' type='radio' name='question'>Repeat-x";
	document.getElementById("answer2").innerHTML = "<input id='answer2-button' type='radio' name='question'>Repeat";
	document.getElementById("answer3").innerHTML = "<input id='answer3-button' type='radio' name='question'>Repeat-y";
	document.getElementById("answer4").innerHTML = "<input id='answer4-button' type='radio' name='question'>No-Repeat";
	
	document.getElementById("confirm").innerHTML = "<button onclick='check10()' name='next'>Next</button>";

}

//Checks the answers for the tenth set of questions
function check10(){
		
	if (document.getElementById("answer3-button").checked){
		correct_answer++;
	}
	
	if ((document.getElementById('answer1-button').checked == false) && (document.getElementById('answer2-button').checked == false) && (document.getElementById('answer3-button').checked == false) && (document.getElementById('answer4-button').checked == false)){
		document.getElementById("error_msg").innerHTML = "<span style='color:red;'>Please select an answer</span>";
	}
	else{
		document.getElementById("error_msg").innerHTML = "";
		document.getElementById("confirm").innerHTML = "<button onclick='finished_quiz()' name='next'>Check Score</button>";
	}

}

function finished_quiz() {

	
	if (correct_answer < 3){
		msg = "You got " + correct_answer + " out of 10 correct. You must be able to do better than that, try again.";
	}
	
	if ((correct_answer > 3) && (correct_answer < 5)){
		msg = "You got " + correct_answer + " out of 10 correct. You're almost at half way! You can do it! Try again!";
	}
	
	if ((correct_answer > 5) && (correct_answer < 10)){
		msg = "You got " + correct_answer + " out of 10 correct. You passed! Can you get 10/10? Try again to find out!";
	}
	
	if (correct_answer == 10){
		msg = "Congratulations! You got " + correct_answer + " out of 10 correct! You got 100%, well done!";
	}
	
	document.getElementById("question-header").innerHTML = "You have completed the CSS Quiz!";	
	document.getElementById("correct-answers-message").innerHTML = msg;
	
	document.getElementById("answer1").innerHTML = "";
	document.getElementById("answer2").innerHTML = "";
	document.getElementById("answer3").innerHTML = "";
	document.getElementById("answer4").innerHTML = "";
	
	document.getElementById("confirm").innerHTML = "";
	
	document.getElementById("start-button-div").innerHTML = "<button id='start-button' onclick='question1()' name='next'>Restart</button>"

}
