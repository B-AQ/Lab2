'use strict';

let userName = prompt('What is your name?');
// console.log(userName);
alert('Hello there,' + userName.toUpperCase());
let score=0;
// Question

/*let sport=confirm('Do you think i like Sports?');

if (sport===true) {
  console.log('Yes you are right i do actually like sports.');
  alert('Yes you are right i do actually like sports.');
 

} else {
  alert('Unfortunately your answer is not correct maybe next time.');
  console.log('Unfortunately your answer is not correct maybe next time.');

}*/

/*let visit=confirm('Have you visit this page before?');

if (visit===true) {
  alert(' Welcome back '+userName);
  console.log(' Welcome back '+userName);
}else {
  alert('Hope you will like it');
  console.log('Hope you will like it');
}*/

// Question

/*let age=confirm('Do you think that iam above 22 years old?');

if (age===true){
  console.log(age);
  alert('yes iam 28 years old.');

}else{
  console.log(age);
  alert('I wish, but  actually i am 28 years old');

}*/



// Question 1
function question1() {
  

let live=prompt('Do i live in Jordan? '+userName.toUpperCase());
live=live.toLowerCase();

if (live==='yes'|| live==='y'){
  alert(userName + ',It is correct');
  score++;

}else if (live==='no' || live==='n'){
//   console.log(live);
  alert('Wrong answer');

}else {
//   console.log(live);
  alert('Next time only answer with yes/no');
}
}
question1()
// // Question 2
function question2() {
let travel=prompt('Do you think i like to travel ' + userName.toUpperCase() +'?');
travel=travel.toUpperCase();

if (travel==='YES' || travel==='Y'){
//   console.log(travel);
  alert('Yes i like travelling.');
  score++;

}else if(travel==='NO' || travel==='N'){
//   console.log(travel);
  alert('Wrong maybe next time. '+ userName.toUpperCase());

}else {
//   console.log(travel);
  alert('Next time your answer should be either Yes or No.');
}
}
question2() ;
// // Question 3

let speak=prompt('Do you think ' +userName+ ' that i speak German?');
speak=speak.toLowerCase();

if (speak==='yes' || speak==='n') {
//   console.log(speak);
alert('Yes i do');
score++

}else if (speak==='no'|| speak==='y') {
//   console.log(speak);
  alert('Wrong answer');
} else {
//   console.log(speak);
  alert('Next time your answer should be either Yes/No.');

}

// // Question 4

let food=prompt('Do you think i like Mansaf With chicken');
food=food.toLowerCase();

if (food==='yes' || food==='y') {
//   console.log(food);
  alert('Ofc not');

}else if (food==='no'|| food==='n') {
//   console.log(food);
  alert('You are on point');
  score++

}else{
//   console.log(food);
  alert('Yes or No answers');

}

// // Question 5

let music=prompt('Do i like Music');
music=music.toLowerCase();

if (music==='yes' || music==='y') {
//   console.log(music);
  alert('chill Music');
  score++

}else if (music==='no'|| music==='n') {
//   console.log(music);
  alert('Really??!! Who dose not like Music?');

}else{
//   console.log(music);
  alert('Yes or No answers ONLY');

}

// Question 6

// 1
let weight=93;
let guessWeight='';


for (let i = 0; i<4; i++){
  // 0
  // 1
  // 2
  // 3
  guessWeight = Number(prompt('How much do i weight in kilos?'));

  if (guessWeight === weight) {
    alert('correct');
    score++;
    break;
  }else if(guessWeight<=98 && guessWeight>=90){
    alert('you are high but really close');
  }else if (guessWeight > weight ){
    alert('too high');
  }else if (guessWeight < weight ) {
    alert('too low');
  }else {
    alert('Next time enter a number');
  }
  if (i === 3) {
    alert('my weight is actually 93');
  }
  // console.log(i);
}




// Question 7

let guessAnswer='';

let answers=['spain','germany','france','aqaba'];

let attemps=6;

hasAttempts: while (attemps) {
  // ask question:
  guessAnswer=prompt('guess a place that i would to visit');
  // decrease the attemps by 1
  // 6
  // 5
  // 4
  // 0
  attemps-=1;
  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i]);
    if (guessAnswer===answers[i]) {
      alert('that is correct. here are all the answers '+ answers);
      score++
      // attemps=0;
      break hasAttempts;
    }
  }
  // if you are not using label
  // if (attemps===0) {
  //   break;
  // } else if (attemps<6) {
  //   alert('this is not correct');
  // }

  // if your using label:
  if (attemps<6) {
   alert('this is not correct');
  }
}

if (!attemps) {
  alert('here ae the correct answers ' + answers);
}








// sullotion1
// part of sulltion1
// let correct=false;

// for (let i = 0; i < 6; i++) {
//   guessAnswer=prompt('guess a place that i would to visit');
//   // console.log(answers[i]);

//   for(let j=0; j<answers.length; j++){
//     console.log(answers[j]);

//     if (guessAnswer===answers[j]) {
//       alert('correct');
//       alert('here correct answers '+ answers);
//       correct=true;
//     }
//   }

//   if (correct===true) {
//     // alert('here correct answers '+ answers);
//     break;
//   }
//   // 0
//   // 1
//   // 5
//   if (i===5) {
//     alert('here correct answers '+ answers);
//   }else if(i<6){
//     alert('wrong');
//   }

// }



alert('Enjoy displaying my work ' + userName + 'you got a score of ' +score +' /7');

