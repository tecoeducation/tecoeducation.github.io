var csvData = new Array();

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function CSVToArray( strData, strDelimiter ){
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );
    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec( strData )){
        var strMatchedDelimiter = arrMatches[ 1 ];
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){
            arrData.push( [] );
        }
        var strMatchedValue;
        if (arrMatches[ 2 ]){
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );
        } else {
            strMatchedValue = arrMatches[ 3 ];
        }
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }
    return( arrData );
}
fetch('TECO - Sheet1.csv').then(response => response.text()).then(text => {
    var jsonObject = text.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
        csvData.push(jsonObject[i].split(','));
    }
    // Retrived data from csv file content
    //alert(csvData[0][0])
    csvData = CSVToArray(text)
}).then(() => {
    console.log(csvData)
    var language = localStorage.getItem('language')
    var result = [localStorage.getItem('result1'), localStorage.getItem('result2')]
    var rowNumber
    if((result[0] == 0 && result[1] == 2) || (result[0] == 2 && result[1] == 0)){ //ObservantFocuser
        rowNumber = 1
    } else if ((result[0] == 0 && result[1] == 3) || (result[0] == 3 && result[1] == 0)){ //ObservantDreamer
        rowNumber = 2
    } else if ((result[0] == 0 && result[1] == 4) || (result[0] == 4 && result[1] == 0)){ //ObservantScholar
        rowNumber = 3
    } else if ((result[0] == 0 && result[1] == 5) || (result[0] == 5 && result[1] == 0)){ //ObservantProfessional
        rowNumber = 4
    } else if ((result[0] == 1 && result[1] == 2) || (result[0] == 2 && result[1] == 1)){ //ActiveFocuser
        rowNumber = 5
    } else if ((result[0] == 1 && result[1] == 3) || (result[0] == 3 && result[1] == 1)){ //ActiveDreamer
        rowNumber = 6
    } else if ((result[0] == 1 && result[1] == 4) || (result[0] == 4 && result[1] == 1)){ //ActiveScholar
        rowNumber = 7
    } else if ((result[0] == 1 && result[1] == 5) || (result[0] == 5 && result[1] == 1)){ //ActiveProfessional
        rowNumber = 8
    } else if ((result[0] == 2 && result[1] == 4) || (result[0] == 4 && result[1] == 2)){ //FocusedScholar
        rowNumber = 9
    } else if ((result[0] == 2 && result[1] == 5) || (result[0] == 5 && result[1] == 2)){ //FocusedProfessional
        rowNumber = 10
    } else if ((result[0] == 3 && result[1] == 4) || (result[0] == 4 && result[1] == 3)){ //DreamingScholar
        rowNumber = 11
    } else if ((result[0] == 3 && result[1] == 5) || (result[0] == 5 && result[1] == 3)){ //DreamingProfessional
        rowNumber = 12
    }
    if (rowNumber == 1 || rowNumber == 5){
      document.body.style.background = "#D7E09B"
      document.getElementById('processBar1').style = "#FFDBD1";
      document.getElementById('processBar2').style = "#FFDBD1";
      document.getElementById('processBar3').style = "#FFDBD1";
      document.getElementById('processBar4').style = "#FFDBD1";
    } else if (rowNumber == 4 || rowNumber == 8 || rowNumber == 10){
      document.body.style.background = "#FFDBD1";
      document.getElementById('processBar1').style.backgroundColor = "#D7E09B";
      document.getElementById('processBar2').style.backgroundColor = "#D7E09B";
      document.getElementById('processBar3').style.backgroundColor = "#D7E09B";
      document.getElementById('processBar4').style.backgroundColor = "#D7E09B";
    } else if (rowNumber == 3 || rowNumber == 7 || rowNumber == 9){
      document.body.style.background = "#B9DBE8";
      document.getElementById('processBar1').style.backgroundColor = "#FFD396";
      document.getElementById('processBar2').style.backgroundColor = "#FFD396";
      document.getElementById('processBar3').style.backgroundColor = "#FFD396";
      document.getElementById('processBar4').style.backgroundColor = "#FFD396";
    } else {
      document.body.style.background = "#FFD396";
      document.getElementById('processBar1').style.backgroundColor = "#B9DBE8";
      document.getElementById('processBar2').style.backgroundColor = "#B9DBE8";
      document.getElementById('processBar3').style.backgroundColor = "#B9DBE8";
      document.getElementById('processBar4').style.backgroundColor = "#B9DBE8";
    }
    document.getElementById('myStudentType').innerHTML = "#"+csvData[rowNumber][0]
    var imageName = csvData[rowNumber][0].replace(' ', '')
    document.getElementById('resultsImage').src = "resultsImage/"+imageName+".png"
    if (language == "en"){
      document.getElementById('shareDescription').href = "insta/"+imageName+".png"
    } else {
      document.getElementById('shareDescription').href = "insta/"+imageName+"kr.png"
    }

    var sbName = csvData[rowNumber][5].replace(' ', '')
    document.getElementById('studyBuddyImage').src = "resultsImage/"+sbName+".png"
    document.getElementById('studyBuddy').innerHTML = "#"+csvData[rowNumber][5]
    if (language == "en"){
      document.getElementById('studyBuddyExplanation').innerHTML = csvData[rowNumber][6]
    } else {
      document.getElementById('studyBuddyExplanation').innerHTML = csvData[rowNumber][7]
    }
    var allResults = localStorage.getItem('result').split(',')
    for(var i = 0; i < 8; i++){
        allResults[i] = parseFloat(allResults[i])
    }
    document.getElementById('processBarPercentage1').innerHTML = (((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0)).toString() + "%"
    document.getElementById('processBarPercentage2').innerHTML = (100-((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0)).toString() + "%"
    if( ((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0) > (100-((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0)) ){
        document.getElementById('processBar1').style.width = (((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage1').style.color = "#51d6ff";
    } else{
        document.getElementById('processBar1').style.width = (100-((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0)).toString() + "%"
        document.getElementById('processBar1').style.marginLeft = (((allResults[0]/(allResults[0]+allResults[1])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage2').style.color = "#51d6ff";
    }
    document.getElementById('processBarPercentage3').innerHTML = (((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0)).toString() + "%"
    document.getElementById('processBarPercentage4').innerHTML = (100-((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0)).toString() + "%"
    if( ((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0) > (100-((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0)) ){
        document.getElementById('processBar2').style.width = (((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage3').style.color = "#518eff";
    } else{
        document.getElementById('processBar2').style.width = (100-((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0)).toString() + "%"
        document.getElementById('processBar2').style.marginLeft = (((allResults[4]/(allResults[4]+allResults[5])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage4').style.color = "#518eff";
    }
    document.getElementById('processBarPercentage5').innerHTML = (((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0)).toString() + "%"
    document.getElementById('processBarPercentage6').innerHTML = (100-((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0)).toString() + "%"
    if( ((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0) > (100-((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0)) ){
        document.getElementById('processBar3').style.width = (((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage5').style.color = "#a1ec5a";
    } else{
        document.getElementById('processBar3').style.width = (100-((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0)).toString() + "%"
        document.getElementById('processBar3').style.marginLeft = (((allResults[2]/(allResults[2]+allResults[3])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage6').style.color = "#a1ec5a";
    }
    document.getElementById('processBarPercentage7').innerHTML = (((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0)).toString() + "%"
    document.getElementById('processBarPercentage8').innerHTML = (100-((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0)).toString() + "%"
    if( ((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0) > (100-((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0)) ){
        document.getElementById('processBar4').style.width = (((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage7').style.color = "#ff9eea";
    } else{
        document.getElementById('processBar4').style.width = (100-((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0)).toString() + "%"
        document.getElementById('processBar4').style.marginLeft = (((allResults[6]/(allResults[6]+allResults[7])) * 100).toFixed(0)).toString() + "%"
        //document.getElementById('processBarPercentage8').style.color = "#ff9eea";
    }
    if(language == "kr"){
        document.getElementById('myStudentTypeText').innerHTML = "나의 학생 유형은"
        document.getElementById('myStudentTypeOneLine').innerHTML = csvData[rowNumber][4]
        document.getElementById('description').innerHTML = csvData[rowNumber][2]
        document.getElementById('processBarText1').innerHTML = "추리력"
        document.getElementById('processBarText2').innerHTML = "운동신경"
        document.getElementById('processBarText3').innerHTML = "철학자"
        document.getElementById('processBarText4').innerHTML = "핵인싸"
        document.getElementById('processBarText5').innerHTML = "모범생"
        document.getElementById('processBarText6').innerHTML = "개그맨"
        document.getElementById('processBarText7').innerHTML = "미술실"
        document.getElementById('processBarText8').innerHTML = "음악실"
        document.getElementById('sbd').innerHTML = "내 공부 친구"
        document.getElementById('shareDescription').innerHTML = "내 학생 유형 공유하기"

    } else if (language == "en"){
        document.getElementById('myStudentTypeText').innerHTML = "You Are"
        document.getElementById('myStudentTypeOneLine').innerHTML = csvData[rowNumber][3]
        document.getElementById('description').innerHTML = csvData[rowNumber][1]
        document.getElementById('processBarText1').innerHTML = "Detective"
        document.getElementById('processBarText2').innerHTML = "Athlete"
        document.getElementById('processBarText3').innerHTML = "Philosopher"
        document.getElementById('processBarText4').innerHTML = "Drama Queen"
        document.getElementById('processBarText5').innerHTML = "Overachiever"
        document.getElementById('processBarText6').innerHTML = "Class Clown"
        document.getElementById('processBarText7').innerHTML = "Artist"
        document.getElementById('processBarText8').innerHTML = "Musician"
        document.getElementById('sbd').innerHTML = "My Best Study Buddy"
        document.getElementById('shareDescription').innerHTML = "Download Shareable Image"
    }
  }
)
