let target = document.querySelector('#dynamic');

//randomString함수 안으로 이동.
// let stringArr=['Learn to HTML','Learn to CSS','Learn to Javascript',
//                 'Learn to Python','Learn to React'];
// let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
// console.log(selectString);
// let selectStringArr = selectString.split("");
// console.log(selectStringArr);

function randomString(){
    let stringArr=['Learn to HTML','Learn to CSS','Learn to Javascript',
                'Learn to Python','Learn to React'];
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
// console.log(selectString);
let selectStringArr = selectString.split("");
// console.log(selectStringArr);
return selectStringArr;
}

//타이핑 리셋
//innerText 로 값을 넣게 되면 공백이 사라짐. 
// textContent 는 사라지지 않음.   
// = innerText와 비슷하지만 보이지 않는 내용까지(display:none) 출력가능
function resetTyping(){
    target.textContent ="";
    dynamic(randomString());
}

//한글자씩 텍스트 출력함수
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
        dynamic(randomArr);
    },80);
}else{ // 남은 문자열이 없다면
    setTimeout(resetTyping,3000);
}
}

dynamic(randomString());
//커서 깜박임 효과
function blink(){
    target.classList.toggle('active');
}
setInterval(blink,500);