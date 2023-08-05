let wincount=0;
let losecount=0;

var timeout;

function start() {
  x=Math.floor( ( Math.random() * 1119 + 1 ) );
  // x=746;
  y1=Math.floor(x/560);
  x1=(x-(560*y1));

  y2=Math.floor(x1/80);
  x2=(x1-(80*y2));

  y3=Math.floor(x2/20);
  x3=(x2-(20*y3));

  y4=Math.floor(x3/4);
  x4=(x3-(4*y4));

  y5=Math.floor(x4/1);
  x5=(x4-y5);
    
  // document.getElementById("problem").textContent = x +" 560=>"+ y1 +" 80=>"+ y2 +" 20=>"+ y3 +" 4=>"+ y4 +" 1=>"+ y5 ;
  
  var imageContainer = document.getElementById("myImage");
  myImage.innerHTML="";

  for (let i = 0; i < y1; i++)
    imageContainer.innerHTML += '<img src="img1.png">';

  for (let i = 0; i < y2; i++)
    imageContainer.innerHTML += '<img src="img2.png">';

  for (let i = 0; i < y3; i++)
    imageContainer.innerHTML += '<img src="img3.png">';

  for (let i = 0; i < y4; i++)
    imageContainer.innerHTML += '<img src="img4.png">';

  for (let i = 0; i < y5; i++)
    imageContainer.innerHTML += '<img src="img5.png">';
  
}

function resultreset(){
  document.getElementById("result1").textContent = "정답여부";
  document.getElementById("result1").style.backgroundColor="white";
}

function main(a1) {

  if(x==a1){
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