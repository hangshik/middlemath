document.onkeydown=func;
 
function func(){
  if(window.event.keyCode==48 || window.event.keyCode==96)
    clickbt(0)
  if(window.event.keyCode==49 || window.event.keyCode==97)
    clickbt(1)
  if(window.event.keyCode==50 || window.event.keyCode==98)
    clickbt(2)
  if(window.event.keyCode==51 || window.event.keyCode==99)
    clickbt(3)
  if(window.event.keyCode==52 || window.event.keyCode==100)
    clickbt(4)
  if(window.event.keyCode==53 || window.event.keyCode==101)
    clickbt(5)
  if(window.event.keyCode==54 || window.event.keyCode==102)
    clickbt(6)
  if(window.event.keyCode==55 || window.event.keyCode==103)
    clickbt(7)
  if(window.event.keyCode==56 || window.event.keyCode==104)
    clickbt(8)
  if(window.event.keyCode==57 || window.event.keyCode==105)
    clickbt(9)
}

var timeout;
// 파이 소수 1000자리까지
pi = [3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9,6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6,4,4,2,8,8,1,0,9,7,5,6,6,5,9,3,3,4,4,6,1,2,8,4,7,5,6,4,8,2,3,3,7,8,6,7,8,3,1,6,5,2,7,1,2,0,1,9,0,9,1,4,5,6,4,8,5,6,6,9,2,3,4,6,0,3,4,8,6,1,0,4,5,4,3,2,6,6,4,8,2,1,3,3,9,3,6,0,7,2,6,0,2,4,9,1,4,1,2,7,3,7,2,4,5,8,7,0,0,6,6,0,6,3,1,5,5,8,8,1,7,4,8,8,1,5,2,0,9,2,0,9,6,2,8,2,9,2,5,4,0,9,1,7,1,5,3,6,4,3,6,7,8,9,2,5,9,0,3,6,0,0,1,1,3,3,0,5,3,0,5,4,8,8,2,0,4,6,6,5,2,1,3,8,4,1,4,6,9,5,1,9,4,1,5,1,1,6,0,9,4,3,3,0,5,7,2,7,0,3,6,5,7,5,9,5,9,1,9,5,3,0,9,2,1,8,6,1,1,7,3,8,1,9,3,2,6,1,1,7,9,3,1,0,5,1,1,8,5,4,8,0,7,4,4,6,2,3,7,9,9,6,2,7,4,9,5,6,7,3,5,1,8,8,5,7,5,2,7,2,4,8,9,1,2,2,7,9,3,8,1,8,3,0,1,1,9,4,9,1,2,9,8,3,3,6,7,3,3,6,2,4,4,0,6,5,6,6,4,3,0,8,6,0,2,1,3,9,4,9,4,6,3,9,5,2,2,4,7,3,7,1,9,0,7,0,2,1,7,9,8,6,0,9,4,3,7,0,2,7,7,0,5,3,9,2,1,7,1,7,6,2,9,3,1,7,6,7,5,2,3,8,4,6,7,4,8,1,8,4,6,7,6,6,9,4,0,5,1,3,2,0,0,0,5,6,8,1,2,7,1,4,5,2,6,3,5,6,0,8,2,7,7,8,5,7,7,1,3,4,2,7,5,7,7,8,9,6,0,9,1,7,3,6,3,7,1,7,8,7,2,1,4,6,8,4,4,0,9,0,1,2,2,4,9,5,3,4,3,0,1,4,6,5,4,9,5,8,5,3,7,1,0,5,0,7,9,2,2,7,9,6,8,9,2,5,8,9,2,3,5,4,2,0,1,9,9,5,6,1,1,2,1,2,9,0,2,1,9,6,0,8,6,4,0,3,4,4,1,8,1,5,9,8,1,3,6,2,9,7,7,4,7,7,1,3,0,9,9,6,0,5,1,8,7,0,7,2,1,1,3,4,9,9,9,9,9,9,8,3,7,2,9,7,8,0,4,9,9,5,1,0,5,9,7,3,1,7,3,2,8,1,6,0,9,6,3,1,8,5,9,5,0,2,4,4,5,9,4,5,5,3,4,6,9,0,8,3,0,2,6,4,2,5,2,2,3,0,8,2,5,3,3,4,4,6,8,5,0,3,5,2,6,1,9,3,1,1,8,8,1,7,1,0,1,0,0,0,3,1,3,7,8,3,8,7,5,2,8,8,6,5,8,7,5,3,3,2,0,8,3,8,1,4,2,0,6,1,7,1,7,7,6,6,9,1,4,7,3,0,3,5,9,8,2,5,3,4,9,0,4,2,8,7,5,5,4,6,8,7,3,1,1,5,9,5,6,2,8,6,3,8,8,2,3,5,3,7,8,7,5,9,3,7,5,1,9,5,7,7,8,1,8,5,7,7,8,0,5,3,2,1,7,1,2,2,6,8,0,6,6,1,3,0,0,1,9,2,7,8,7,6,6,1,1,1,9,5,9,0,9,2,1,6,4,2,0,1,9,8,9]

function resultreset(){
  document.getElementById(0).style.backgroundColor="#dddddd";
  document.getElementById(1).style.backgroundColor="#dddddd";
  document.getElementById(2).style.backgroundColor="#dddddd";
  document.getElementById(3).style.backgroundColor="#dddddd";
  document.getElementById(4).style.backgroundColor="#dddddd";
  document.getElementById(5).style.backgroundColor="#dddddd";
  document.getElementById(6).style.backgroundColor="#dddddd";
  document.getElementById(7).style.backgroundColor="#dddddd";
  document.getElementById(8).style.backgroundColor="#dddddd";
  document.getElementById(9).style.backgroundColor="#dddddd";
}


let stop = true;

function clickbt(nn) {
  if(nn==pi[count] && stop){
    count=count+1
    result1.textContent =count+"번째 성공하셨습니다."
    document.getElementById(nn).style.backgroundColor="green";
    timeout=setTimeout("resultreset()",200)
  } else if (!stop)  {}
  else {
    // result1.textContent ="파이게임을 시작합니다."
    result1.textContent ="결과: "+count+"번째까지 성공하셨습니다."
    // result2.textContent ="이전결과: "+count+"번째까지 성공하셨습니다."
    document.getElementById(nn).style.backgroundColor="red";
    timeout=setTimeout("resultreset()",500)
    stop = false;
    count=0
  }
}

function main() {
  list=[];
  list_number=[];
  count=0;
  number = 1;
  let tag = "<div class='container'>";
    for (j = 0; j < 2; j++) { 
      tag += "<div class='row'>";
      for (i = 0; i < 5; i++) {
        list.push(0);
        tag += "<div class='column' id='"+((i+j*5+1)%10)+"' style=width:60px;height:60px; onclick='clickbt("+((i+j*5+1)%10)+")'>"+((i+j*5+1)%10)+"</div>";
      }
      tag += "</div>";
    }
    tag += "</div>";
    area.innerHTML = tag;
    console.log=tag;
    document.getElementById("result").textContent = "네모칸을 선택하여 게임을 시작하십시오.";
  }

onload = () => {
  main()
}