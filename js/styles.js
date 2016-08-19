// Frontsies

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
// debugger;
    var userNumber = $("#userNumber").val();

// // Backsies


    var pongArray = [];
    var maxPong = parseInt(userNumber);

    for (var i = 1; i <= maxPong; i++)
        pongArray.push(i);

    if (pongArray.includes(15)) {
      $("#result").append("ping-pong!");
    }
    else if (pongArray.includes(3)) {
      $("#result").append("ping!");
    }
    else if (pongArray.includes(5)) {
      $("#result").append("ping!");
    }

    if(typeof userNumber === "number") {
      $("#result").append("Try again using only numbers.");
      else if (userNumber < 0) {
        $("#result").append("Ping-pong will prove to be more enjoyable when counting to a number higher than 0. Please try again.");
      }
      ]

    }else{
   	document.write(num1 + " is not a number <br/>");
    }
   </scr    if (isNan(maxPong) === true ) {
      $("#result").append();
    }

$("#result").append(pongArray);

  });
});

// var maxPong = $("#userNumber").val();
// var minPong = 1;
// while(minPong <= maxPong) {
//    pongArray.push(minPong++);
// }
// var pongArray = [];
//
//   function determineNumber() {
//
//     var vowels = ['a','e','i','o','u','A','E','I','O','U',]; // creating an array of vowels called vowels
//     var pigglyArray = word.split(''); // taking the input (userSentence in this case) and performing the split method on it. results are assigned to pigglyArray.
//     var onlyConsonants = true;
//
//     for (var i = 0; i < pigglyArray.length; i++) { // how a for loop should look. 3 parameters. set a var of i to the first char "0".
//       if (!pigglyArray[i].match(/^[A-z ]+$/)) { // regex used to cycle through our pigglyArray ( [i] ) and test for anything other than a letter
//          return "Pig Latin only consists of letters. Please try again.";
//        }
//        else if(vowels.includes(pigglyArray[i])) {
//          onlyConsonants = false;
//        }
//     }
//
//     if(onlyConsonants){
//       return "Even in Pig Latin, words must contain vowels.";
//     }
//     //append ay if starts with vowel
//     if(vowels.includes(pigglyArray[0])){ // getting the first index "0" of pigglyArray and seeing if that is included "includes" in the vowels array
//       pigglyArray.push('ay'); // adding a with push method to the end of array
//
//     } else {
//       while(!vowels.includes(pigglyArray[0])){ // same as line 21 but reversed to search for "if NOT" in the vowels array
//         if(pigglyArray[0] === "q" && pigglyArray[1] === "u") {
//           pigglyArray.push(pigglyArray.shift()); // this takes the q (shift always takes the first char) and pushing it (to the back) of the word
//           pigglyArray.push(pigglyArray.shift());
//         } else {
//         pigglyArray.push(pigglyArray.shift()); // take off the first letter by using the shift method on piggly array, then use the push method to apply this letter to the end of pigglyArray
//         }
//       } pigglyArray.push('ay');
//     }
//
//     var pigglySentence = pigglyArray.join(''); //
//
//     return pigglySentence;
//   }
//
//   function translateSentence(sentence){
//     var sentenceArray = sentence.split(' ');
//     var translatedArray = [];
//     for(var i = 0; i < sentenceArray.length; i++){
//       translatedArray.push(translateWord(sentenceArray[i]));
//     }
//     return translatedArray.join(' ');
//   }
