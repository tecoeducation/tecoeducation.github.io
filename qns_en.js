function Question(question, choices, points) {
  this.question = question;
  this.choices = choices;
  this.points = points;
}

localStorage.setItem("language", "en")

var answerList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var answerTextList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//List of all questions, image, choices and points.
var questionsList = [
  (new Question("You have an exceptionally difficult class. How would you take notes for it?",
    ["Transcribe word for word",
      "Summaries",
      "Bullet Points",
      "What's notes?"
    ], ["P3", "A3", "P2", "X"])),
  (new Question("You come across an interesting topic in class. What do you do?",
    ["Do personal research",
      "Ask teacher",
      "Watch YouTube",
      "Just forget it"
    ], ["A4", "P2", "A2", "X"])),
  (new Question("You are about to graduate. What do you want to be remembered as?",
    ["The intern at Goldman Sachs",
      "The award winner",
      "The sociable one",
      "The genius"
    ], ["C5", "C2", "C1", "S3"])),
  (new Question("You want to build a rocketship for the fun of it. How would you do it?",
    ["Work together with friends",
      "I search Google for someone who has already done it",
      "I start building with what I have",
      "I gotta study"
    ], ["D2", "D1", "D4", "F4"])),
  (new Question("You have a problem set to finish. Where will you go?",
    ["My room",
      "At the library",
      "The outdoors",
      "Group study room (with others)"
    ], ["A1", "A2", "P2", "P1"])),
  (new Question("Your new teacher is going to let you choose the classroom medium. What do you want?",
    ["Big lecture hall",
      "Seminars",
      "Small group discussion",
      "e-learning (discussion posts)"
    ], ["a3", "a2", "a2", "v2"])),
  (new Question("The exam is tomorrow, but your team is playing tonight...",
    ["Watch the game",
      "Watch the first half",
      "Have to study! ",
      "Watch the highlights tomorrow "
    ], ["D4", "D2", "F4", "F3"])),
  (new Question("You haven't finished your homework, but your friend is mad at you...",
    ["Text them hoping it won't last",
      "Call them knowing that the call might take forever",
      "Go over to their house",
      "Ignore ignore ignore"
    ], ["C4", "C3", "C4", "S4"])),
  (new Question("What time are you the sharpest during the day?",
    ["Early morning",
      "Afternoon",
      "Evening",
      "Night"
    ], ["X", "X", "X", "X"])),
  (new Question("You want to understand how the carbon cycle works. What resource would you use?",
    ["Youtube videos",
      "Books",
      "I ask a classmate",
      "Websites and diagrams"
    ], ["v2", "v2", "a1", "v3"])),
  (new Question("You have to give a presentation on Geography. How would you prepare for it?",
    ["I memorize as much as I can from a script",
      "I memorize for some time and focus more on doing flashcards",
      "I rehearse very little and focus on learning the topic",
      "I try to understand my topic as much as possible and do not rehearse "
    ], ["P3", "P2", "A2", "A3"])),
  (new Question("You get to choose a friend to do a group project together. Whom will you choose?",
    ["The studious one",
      "The popular one",
      "The procrastinator",
      "The lazy one who probably won't get in the way"
    ], ["C3", "C2", "S3", "S4"])),
  (new Question("What do you like to drink when studying?",
    ["Coffee",
      "Tea",
      "Juice",
      "Water"
    ], ["X", "X", "X", "X"])),
  (new Question("What music do you listen to when studying?",
    ["EDM/Rap",
      "Pop",
      "Jazz",
      "Classical"
    ], ["D3", "D4", "F3", "F4"])),
  (new Question("What is the one thing that you remember the best from school?",
    ["Quadratic Equation",
      "Mitochondria is the POWERHOUSE of the cell!!!",
      "How did Tom carry 40 watermellons?",
      "My crush rejected me ... :("
    ], ["S4", "S3", "C4", "C3"])),
  (new Question("How do you give your presentations?",
    ["I need more time to talk about my project (My vinegar/baking soda volcano is amazing!)",
      "Presentation is a breeze for me. No worries.",
      "I put memes on the presentation",
      "I sweat until my shirt changes color"
    ], ["D3", "F2", "D4", "F4"])),
  (new Question("What are you most distracted by?",
    ["TV playing in the living room",
      "Loud construction sound",
      "Dirty desks",
      "Some stray fly that entered the room"
    ], ["a4", "a2", "v2", "v3"])),
  (new Question("You want to learn about Charles Darwin, which platform would you use?",
    ["Podcast",
      "Books",
      "Normal Teacher",
      "Online lecture"
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
