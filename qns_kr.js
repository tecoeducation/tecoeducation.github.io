//Creates Object Question that stores the question to be asked, the image, the choices and the points
function Question(question, choices, points) {
  this.question = question;
  this.choices = choices;
  this.points = points;
}

localStorage.setItem("language", "kr")

document.getElementById('question').style.fontFamily = 'Calibri'
document.getElementById('1').style.fontFamily = 'Calibri'
document.getElementById('2').style.fontFamily = 'Calibri'
document.getElementById('3').style.fontFamily = 'Calibri'
document.getElementById('4').style.fontFamily = 'Calibri'


var answerList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var answerTextList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//List of all questions, image, choices and points.
var questionsList = [
  (new Question("오늘은 어려운 수업이 있는 날이다. 이 수업에서는 나는 _______.",
    ["수업의 모든 내용을 적는다.",
      "중요한 부분만 요약해서 적는다.",
      "핵심 단어만 적는다.",
      "노트란 무엇일까......."
    ], ["P3", "A3", "P2", "X"])),
  (new Question("수업중에 개인적으로 흥미로운 주제가 나오면, 나는 _______ 것이다.",
    ["스스로 자료조사를 할",
      "선생님에게 질문하여 이해 할",
      "유튜브에서 찾아 볼",
      "그냥 넘어갈"
    ], ["A4", "P2", "A2", "X"])),
  (new Question("졸업을 하고 나는 사람들에게 _______ 기억되고 싶다.",
    ["대기업에 취직한 사람으로",
      "제일 큰 상을 받은 사람으로",
      "핵인싸로",
      "학교에서 제일가는 천재로"
    ], ["C5", "C2", "C1", "S3"])),
  (new Question("레고블럭으로 로켓을 만든다면, 나는 _______.",
    ["친구를 불러 같이 만든다",
      "유튜브를 보며 따라서 만든다",
      "내가 원하는대로 만든다",
      "시간이 없어서 만들지 않는다"
    ], ["D2", "D1", "D4", "F4"])),
  (new Question("내일까지 해야 할 숙제가 있을때 나는 _______에서 공부한다",
    ["내 방",
      "도서관",
      "카페",
      "그룹스터디룸"
    ], ["A1", "A2", "P2", "P1"])),
  (new Question("나는 오늘 수업을 _______에서 듣고 싶다.",
    ["큰 강당",
      "큰 교실",
      "소그룹 모임",
      "온라인 강의"
    ], ["a3", "a2", "a2", "v2"])),
  (new Question("당장 내일이 시험인데, 오늘 밤 내가 응원하는 팀이 경기를 한다면 나는 _______.",
    ["경기를 본다.",
      "전반전만 본다.",
      "공부를 한다.",
      "시험이 끝난 후 경기 하이라이트 영상만 본다"
    ], ["D4", "D2", "F4", "F3"])),
  (new Question("과제를 해야하는데, 친구가 단단히 화가 나있다면 나는 _______.",
    ["대화가 일찍 마무리되길 바라며 짧은 메세지를 보낸다",
      "한 번 전화를 걸면 못 끊을 것을 알지만 그래도 전화를 한다",
      "친구 집을 찾아간다.",
      "신경쓰지 않고 내 할 일을 한다."
    ], ["C4", "C3", "C4", "S4"])),
  (new Question("나는 _______에 가장 집중이 잘 된다.",
    ["이른 아침",
      "오전",
      "오후",
      "늦은 저녁"
    ], ["X", "X", "X", "X"])),
  (new Question("화학시간에 주기율표를 배웠는데 아직 잘 이해가 되지 않는다. 그래서 난 _______.",
    ["유튜브를 본다.",
      "책을 읽는다.",
      "친구에게 물어본다.",
      "인터넷에서 자료를 조사한다"
    ], ["v2", "v2", "a1", "v3"])),
  (new Question("지리에 대해서 발표를 해야된다면, 나는 _______.",
    ["대본을 쓰고 외워서 준비한다",
      "조그마한 종이에 키워드만 적어서 발표를 한다",
      "연습을 최소한으로 하고 발표내용을 이해해서 간다",
      "연습은 안하고 발표내용을 완벽히 이해해서 간다"
    ], ["P3", "P2", "A2", "A3"])),
  (new Question("그룹 과제를 한다면, 나는 _______ 팀원과 함께하고 싶다.",
    ["공부 잘하기로 소문난",
      "인싸인",
      "관련된 대화를 오랫동안 할 수 있는",
      "내가 원하는대로 따라오는"
    ], ["C3", "C2", "S3", "S4"])),
  (new Question("공부를 할 때 나는 주로 _______를 마신다.",
    ["커피",
      "차",
      "주스",
      "물"
    ], ["X", "X", "X", "X"])),
  (new Question("공부 할 때 나는 _______을 듣는다.",
    ["랩",
      "팝송",
      "재즈",
      "클래식"
    ], ["D3", "D4", "F3", "F4"])),
  (new Question("학창시절 중 _______ 제일 기억에 남는다.",
    ["수학 시간에 배운 근의 공식이",
      "역사 시간에 배운 태정태세문단세가",
      "아니 어떻게 철수는 수박 40개를 들고 다니지?",
      "내가 좋아했던 친구가 나를 좋아하지 않았던 것이"
    ], ["S4", "S3", "C4", "C3"])),
  (new Question("프레젠테이션을 할 때 나는 _______.",
    ["항상 말할시간이 부족하다",
      "긴장되지 않고 평상시와 같다",
      "발표에 웃긴 짤들을 넣는다",
      "긴장을 많이 한다"
    ], ["D3", "F2", "D4", "F4"])),
  (new Question("나는 _______ 공부에 집중을 못한다.",
    ["거실에서 드라마 소리가 들리면",
      "밖에서 큰 소음이 들리면",
      "책상이 더러우면",
      "날파리가 날라다닌다면"
    ], ["a4", "a2", "v2", "v3"])),
  (new Question("갑자기 이순신 장군에 대해 더 알고 싶으면 _______.",
    ["팟캐스트를 듣는다",
      "관련된 책을 읽는다",
      "선생님께 여쭤본다",
      "인강을 듣는다"
    ], ["a5", "v3", "a1", "v4"]))
]

//Given an Object Question, changes the onscreen appearance.
function ChangeQn(curQn) {
  document.getElementById("question").innerHTML = curQn.question;
  document.getElementById("1").innerHTML = curQn.choices[0];
  document.getElementById("2").innerHTML = curQn.choices[1];
  document.getElementById("3").innerHTML = curQn.choices[2];
  document.getElementById("4").innerHTML = curQn.choices[3];
}

//Given an array point_list and string choice, add the score to the approporiate index on the point_list array
function AddPoints(point_list, choice) {
  var type = choice[0];
  if (type == "P") {
    point_list[0] += Number(choice[1]);
  } else if (type == "A") {
    point_list[1] += Number(choice[1]);
  } else if (type == "F") {
    point_list[2] += Number(choice[1]);
  } else if (type == "D") {
    point_list[3] += Number(choice[1]);
  } else if (type == "S") {
    point_list[4] += Number(choice[1]);
  } else if (type == "C") {
    point_list[5] += Number(choice[1]);
  } else if (type == "v") {
    point_list[6] += Number(choice[1]);
  } else if (type == "a") {
    point_list[7] += Number(choice[1]);
  }
}
function checkIfAnswerListIsComplete() {
  for(var i = 0; i < answerList.length; i++){
    if(answerList[i] == 0){
      return false
    }
  }
  return true
}

function changeProgresBar() {
  var answeredQuestionsNum = 0
  for(var i = 0; i < answerList.length; i++){
    if(answerList[i] != 0){
      answeredQuestionsNum += 1
    }
  }
  var answeredPercentage = (100/18) * answeredQuestionsNum
  document.getElementById("processBar").style.width = answeredPercentage.toString()+'%'
}

//When a button is clicked, act in this manner
//The if... else statement in each case seems redundant. But how do we change it?
function SetQn() {
  document.getElementById("1").onclick = function() {
    answerList[qnIdx] = questionsList[qnIdx].points[0]
    answerTextList[qnIdx] = questionsList[qnIdx].choices[0]
    changeProgresBar()
    if (qnIdx < 17) {
      ChangeQn(questionsList[++qnIdx]);
    } else if(qnIdx == 17 && checkIfAnswerListIsComplete()) {
      for(var i = 0; i < answerList.length; i++){
        AddPoints(totalPointList, answerList[i])
      }
      result = CalculateResult(totalPointList, CalculateTotalPoints());
      //alert(Types (result.slice(0, 6)));
      var types = Types (result.slice(0, 6))
      localStorage.setItem("result1", types[0])
      localStorage.setItem("result2", types[1])
      window.location.href = "results.html"
    }
  }
  document.getElementById("2").onclick = function() {
    answerList[qnIdx] = questionsList[qnIdx].points[1]
    answerTextList[qnIdx] = questionsList[qnIdx].choices[1]
    changeProgresBar()
    if (qnIdx < 17) {
      ChangeQn(questionsList[++qnIdx]);
    } else if(qnIdx == 17 && checkIfAnswerListIsComplete()) {
      for(var i = 0; i < answerList.length; i++){
        AddPoints(totalPointList, answerList[i])
      }
      result = CalculateResult(totalPointList, CalculateTotalPoints());
      //alert(Types (result.slice(0, 6)));
      var types = Types (result.slice(0, 6))
      localStorage.setItem("result1", types[0])
      localStorage.setItem("result2", types[1])
      window.location.href = "results.html"
    }
  }
  document.getElementById("3").onclick = function() {
    answerList[qnIdx] = questionsList[qnIdx].points[2]
    answerTextList[qnIdx] = questionsList[qnIdx].choices[2]
    changeProgresBar()
    if (qnIdx < 17) {
      ChangeQn(questionsList[++qnIdx]);
    } else if(qnIdx == 17 && checkIfAnswerListIsComplete()) {
      for(var i = 0; i < answerList.length; i++){
        AddPoints(totalPointList, answerList[i])
      }
      result = CalculateResult(totalPointList, CalculateTotalPoints());
      //alert(Types (result.slice(0, 6)));
      var types = Types (result.slice(0, 6))
      localStorage.setItem("result1", types[0])
      localStorage.setItem("result2", types[1])
      window.location.href = "results.html"
    }
  }
  document.getElementById("4").onclick = function() {
    answerList[qnIdx] = questionsList[qnIdx].points[3]
    answerTextList[qnIdx] = questionsList[qnIdx].choices[3]
    changeProgresBar()
    if (qnIdx < 17) {
      ChangeQn(questionsList[++qnIdx]);
    } else if(qnIdx == 17 && checkIfAnswerListIsComplete()) {
      for(var i = 0; i < answerList.length; i++){
        AddPoints(totalPointList, answerList[i])
      }
      result = CalculateResult(totalPointList, CalculateTotalPoints());
      //alert(Types (result.slice(0, 6)));
      var types = Types (result.slice(0, 6))
      localStorage.setItem("result1", types[0])
      localStorage.setItem("result2", types[1])
      window.location.href = "results.html"
    }
  }
}

function question_select_button_clicked(id) {
  id = id.replace("q", '')
  id = parseInt(id)-1
  qnIdx = id
  ChangeQn(questionsList[id])
}


//For displaying the correct question when the page loads
function Initialize() {
  ChangeQn(questionsList[0]);
}

//Calculate the sum of all points for a given traint. Stored as:
//P, A, F, D, S, C, v, a
function CalculateTotalPoints() {
  var sumPointList = [0, 0, 0, 0, 0, 0, 0, 0];
  questionsList.forEach(function(question) {
    question.points.forEach(function(choice) {
      if (choice[0] == "P") {
        sumPointList[0] += Number(choice[1]);
      } else if (choice[0] == "A") {
        sumPointList[1] += Number(choice[1]);
      } else if (choice[0] == "F") {
        sumPointList[2] += Number(choice[1]);
      } else if (choice[0] == "D") {
        sumPointList[3] += Number(choice[1]);
      } else if (choice[0] == "S") {
        sumPointList[4] += Number(choice[1]);
      } else if (choice[0] == "C") {
        sumPointList[5] += Number(choice[1]);
      } else if (choice[0] == "v") {
        sumPointList[6] += Number(choice[1]);
      } else if (choice[0] == "a") {
        sumPointList[7] += Number(choice[1]);
      }
    })
  });
  return sumPointList;
}

//Calculate the biggest two results from a list of
//P, A, F, D, S, C, v, a
function CalculateResult(totalList, sumList) {
  var result = [];
  for (var i = 0; i < totalList.length; i++) {
    result.push(totalList[i] / sumList[i]);
  }
  localStorage.setItem('result', result)
  return result;
}

//Finding the greatest value in a given index.
function GreatestIdx(list) {
  var max = list[0];
  var maxIndex = 0;
  for (var i = 1; i < list.length; i++) {
    if (list[i] > max) {
      maxIndex = i;
      max = list[i];
    }
  }
  return maxIndex;
}

function Types(list) {
  var primaryIdx = GreatestIdx(list);
  //calculates and removes the biggest index
  list.splice(primaryIdx, 1, -1);
  var secondaryIdx = GreatestIdx(list);
  //checks if primary and secondary are from the same "Set"
  if ((primaryIdx == 0) && (secondaryIdx == 1) ||
    (primaryIdx == 1) && (secondaryIdx == 0) ||
    (primaryIdx == 1) && (secondaryIdx == 2) ||
    (primaryIdx == 2) && (secondaryIdx == 1) ||
    (primaryIdx == 2) && (secondaryIdx == 3) ||
    (primaryIdx == 3) && (secondaryIdx == 2)) {
    list.splice(secondaryIdx, 1, -1);
    var secondaryIdx = GreatestIdx(list);
  }
  //return the "type"//P, A, F, D, S, C, v, a
  var types = [primaryIdx, secondaryIdx];
  var result = "";
  // for (idx = 0; idx < 2; idx++) {
  //   if (types[idx] == 0) {
  //     result += "passive ";
  //   } else if (types[idx] == 1) {
  //     result += "active ";
  //   } else if (types[idx] == 2) {
  //     result += "focused ";
  //   } else if (types[idx] == 3) {
  //     result += "dreaming ";
  //   } else if (types[idx] == 4) {
  //     result += "scholarly ";
  //   } else {
  //     result += "corporate ";
  //   }
  //   if (idx == 0){
  //   	result += "and ";
  //   } else {
  //   	result += "student";
  //   }
  // }
  // return result;
  return types
}

var qnIdx = 0;
var totalPointList = [0, 0, 0, 0, 0, 0, 0, 0];

function main() {
  Initialize();
  SetQn(totalPointList, qnIdx);
}

main();
