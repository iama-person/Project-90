function send() {
    number1 = document.getElementById("input").value;
    number2 = document.getElementById("input2").value;
    actual_answer= parseInt(number1)*parseInt(number2);

    question_numbers="<h4>"+number1+" x "+number2+"</h4>";
    input_box= "<br>Answer : <input placeholder='type your answer' id='input_answer'>";
    check_button="<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    row=question_numbers+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("input").value="";
    document.getElementById("input2").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_answer").value;
    if(get_answer==actual_answer){
        if(answer_turn="player1"){
            update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }
    }


        if(question_turn="player1"){
            question_turn="player2";
            document.getElementById("question_turn").innerHTML="Question Turn: "+ player2name;
        }
        else{
            question_turn="player1";
            document.getElementById("question_turn").innerHTML="Question Turn: "+ player1name; 
        }
}
