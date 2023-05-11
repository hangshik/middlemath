let wincount=0;
let losecount=0;

var timeout;

function start() {
  x1=Math.floor( ( Math.random() * 19 - 9 ) );
  x2=Math.floor( ( Math.random() * 19 - 9 ) );
  x3=Math.floor( ( Math.random() * 2) );
  
  if(x3==0) 
  r1=x1+x2 
  else
  r1=x1-x2

  // 문제 표현
  if(x1<0) x1="("+x1+")"
  if(x2<0) x2="("+x2+")"
  if(x3==0) 
  x3="+" 
  else 
  x3="-"

  document.getElementById("problem").textContent = x1 +" "+ x3 +" "+x2;
}

function resultreset(){
  document.getElementById("result1").textContent = "정답여부";
  document.getElementById("result1").style.backgroundColor="white";
}


function main(a1) {

  if(r1==a1){
  wincount=wincount+1;
  document.getElementById("result1").textContent = "정답입니다.";
  document.getElementById("result1").style.backgroundColor="green";
  timeout=setTimeout("resultreset()",1000)
  document.getElementById("result2").textContent = wincount+"번 정답입니다.";
  start();
  } else{
  losecount=losecount+1;
  document.getElementById("result1").textContent = "틀렸습니다.";
  document.getElementById("result1").style.backgroundColor="red";
  timeout=setTimeout("resultreset()",1000)
  document.getElementById("result3").textContent = losecount+"번 틀렸습니다.";
  }

  var input = document.getElementById("txt");
  input.value = null;
  }

 onload = () => {
   start()
 }