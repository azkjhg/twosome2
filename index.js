let link =  document.createElement("link")
link.rel = "stylesheet"
link.href = "index.css"
document.head.appendChild(link)
/*
function btn1(A) {
  var vl = document.getElementById("ipt1").value;
  if (vl == A) {
    alert("맞습니다.");
  }
  else {
    alert("틀렸습니다.");
  }
}
document.body.onload = addSection;
*/
////////// 위에 코드들은 연습하던 거

function addSection(A,B,C) { // A: id, B: 순번, C: 정답// 인풋, 버튼 태그 만들고 div에 붙이고, div를 li태그(A)에 붙임.

let inp = document.createElement("input")
let btn = document.createElement("button")
btn.innerText = "확인"
// document.body.appendChild(inp);
// document.body.appendChild(btn);
let dv = document.createElement("div")
dv.innerText = B
dv.appendChild(inp);
dv.appendChild(btn);

document.getElementById(A).appendChild(dv)
var count = 0
btn.onclick = logic
inp.addEventListener("keydown", (event) => { // 엔터 눌리면 버튼 눌리게끔
  if (event.keyCode === 13){
    console.log(event);
    //event.preventDefault();
    btn.click();
  }
})

  function logic() { // 정답 맞는지 확인하는 로직.
  trimV= inp.value.replace(/ /gi, "")
  console.log(trimV)
  if (trimV == C) {
    inp.style.background = "greenyellow"
    
  }
  else {
    inp.style.background = "rgb(255, 117, 75)"
    count += 1
    console.log(count)

    if(count >= 3){
      alert(C)
    }
    
    
  }
}

}

  function listadd(A){ // A라는 리스트 만들고, 제목 A로 작성, mainol에 만든 lit 붙임
  let lit = document.createElement("li")
  lit.id = A
  lit.innerText = A
  document.getElementById("mainol").appendChild(lit)
  }

  new listadd("바닐라 쉐이크") // 프로토 타입으로 복제
  new addSection("바닐라 쉐이크", "1", "아이스크림170");
  new addSection("바닐라 쉐이크", "2", "우유140");
  new addSection("바닐라 쉐이크", "3", "얼음80");
  

  new listadd("초코 쉐이크")
  new addSection("초코 쉐이크", "1", "아이스크림170");
  new addSection("초코 쉐이크", "2", "우유80");
  new addSection("초코 쉐이크", "3", "얼음100");
  new addSection("초코 쉐이크", "4", "소스2");

  new listadd("커피 쉐이크")
  new addSection("커피 쉐이크", "1", "아이스크림170");
  new addSection("커피 쉐이크", "2", "에스프레소2");
  new addSection("커피 쉐이크", "3", "얼음130");

  (function(listname){ // 익명함수로 정의
  new listadd(listname)
  new addSection(listname, "1", "자몽농축액45");
  new addSection(listname, "2", "얼음150");
  new addSection(listname, "3", "오렌지150");
  new addSection(listname, "4", "물120");
  }("오렌지 자몽 주스L"));

  function Menu(listname, reasons){ // for문으로 자동화, Menu로 메뉴 이름과, 정답을 함수로 뺐음.
    new listadd(listname)
    for (i=0; i<reasons.length; i++) {
      new addSection(listname, i+1, reasons[i]);
    }
  }
  
  Menu("키위 바나나 주스L", ["키위150", "바나나60", "얼음50", "물60", "클래식슈가시럽2", "얼음170"]);
  Menu("망고 바나나 라떼L", ["망고베이스120", "얼음160", "우유140", "바나나80"]);
  Menu("자몽 에이드L", ["자몽농축액50", "클래식슈가시럽2", "얼음200", "탄산수150", "자몽웨지1", "애플민트1"]);
  Menu("오렌지 에이드L", ["오렌지베이스60", "얼음220", "탄산수180", "오렌지1", "애플민트1"]);
  Menu("레몬 셔벗 에이드L", ["라임민트시럽30", "샴페인향시럽2", "얼음120", "생라임웨지2", "애플민트1", "얼음80", "탄산수180", "아이스크림40", "애플민트1"]);
  Menu("복숭아 에이드L", ["산딸기퓨레5", "피치베이스110", "클래식슈가시럽3", "얼음200", "탄산수130", "복숭아4", "애플민트1"]);
  Menu("샤인머스켓 청포도 에이드L", ["샤인머스켓60", "나타드코코2T", "얼음120", "청포도2", "애플민트3", "얼음100", "탄산수160", "청포도1", "애플민트1"]);

  Menu("애플민트티R", ["애플시럽30", "클래식슈가시럽1", "그나와민트티1", "온수270"]);
  Menu("허니레몬티R", ["꿀15", "클래식슈가시럽2", "레몬2", "얼그레이1" , "온수270"]);
  Menu("아이스애플민트티R", ["애플시럽30", "클래식슈가시럽1", "나타드코코크러쉬40", "애플민트2" , "얼음180", "그나와민트티1", "온수130", "애플민트1"]);
  Menu("아이스허니레몬티R", ["레몬2", "얼음170", "얼그레이1", "온수120" , "꿀10", "클래식슈가시럽2", "애플민트1"]);