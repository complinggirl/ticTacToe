$(document).ready(function() {
var player1=true;
var numclicks=0;
var board1 =[0,0,0,0,0,0,0,0,0];
var board2=[0,0,0,0,0,0,0,0,0];

function inputsomething(mystring, player){
  //  alert(mystring);
   var foo= mystring.substr(mystring.length - 1);
   index=parseInt(foo);
   value = index+1;
   if(player1){
     board1[index] += value;
     alert(board1)
    }
    else{
      board2[index] += value;
      alert(board2)
    }


}

function checkboard(){
   if(player1){


    var wins = [6, 28, 45, 105, 116, 120, 162, 504];
    var a = board1[0]*board1[1]*board1[2];
    var b = board1[3]*board1[4]*board1[5];
    var c = board1[6]*board1[7]*board1[8];
    var d = board1[0]*board1[3]*board1[6];
    var e = board1[1]*board1[4]*board1[5];
    var f = board1[2]*board1[5]*board1[8];
    var g = board1[0]*board1[4]*board1[8];
    var h = board1[6]*board1[4]*board1[2];
    var myboard = [a, b, c, d, e, f, g, h];
    alert(myboard);




    for (var i = 0; i < 9; i++){
      if (wins.indexOf(myboard[i]) != -1){
        alert("you win");
      }
    }
  }
  else{


   var wins = [6, 28, 45, 105, 116, 120, 162, 504];
   var a = board2[0]*board2[1]*board2[2];
   var b = board2[3]*board2[4]*board2[5];
   var c = board2[6]*board2[7]*board2[8];
   var d = board2[0]*board2[3]*board2[6];
   var e = board2[1]*board2[4]*board2[5];
   var f = board2[2]*board2[5]*board2[8];
   var g = board2[0]*board2[4]*board2[8];
   var h = board2[6]*board2[4]*board2[2];
   var myboard = [a, b, c, d, e, f, g, h];
   alert(myboard);




   for (var i = 0; i < 9; i++){
     if (wins.indexOf(myboard[i]) != -1){
       alert("you win");
     }
   }
 }
}






  $(".cell").click(function (event){
    var myimg;
    // var imgo="o-icon.png";
    if (player1){
      myimg=("x-icon.png")
    }
    else{
      myimg=("o-icon.png");
    }

    if ($(this).children().length > 0){
      alert("click");
    }
    else{
    var $myO = $("<img/>").attr({src: myimg});
    // alert($(this).value);

    $(this).append($myO);
    inputsomething ($(this).attr("id"), player1);
    checkboard();
    numclicks++;
    player1 = !player1;
  }

if (numclicks === 9){
  alert("game over");
}
    // $(this).style.visibility='hidden';


  });





















});
