'use strict';

let userName=prompt('What is your name?');
// console.log(userName);
alert ( 'Hello there,' + userName.toUpperCase());

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

let live=prompt('Do i live in Jordan? '+userName.toUpperCase());
live=live.toLowerCase();

if (live==='yes'){
  alert(userName + ',It is correct');

}else if (live==='no'){
//   console.log(live);
  alert('Wrong answer');

}else {
//   console.log(live);
  alert('Next time only answer with yes/no');
}

// Question 2

let travel=prompt('Do you think i like to travel ' + userName.toUpperCase() +'?');
travel=travel.toUpperCase();

if (travel==='YES' /*&& travel==='Y'*/){
//   console.log(travel);
  alert('Yes i like travelling.');

}else if(travel==='NO' /*&& travel==='N'*/){
//   console.log(travel);
  alert('Wrong maybe next time. '+ userName.toUpperCase());

}else {
//   console.log(travel);
  alert('Next time your answer should be either Yes or No.');
}

// Question 3

let speak=prompt('Do you think ' +userName+ ' that i speak German?');
speak=speak.toLowerCase();

if (speak==='yes') {
//   console.log(speak);
  alert('Yes i do');

}else if (speak==='no') {
//   console.log(speak);
  alert('Wrong answer');
} else {
//   console.log(speak);
  alert('Next time your answer should be either Yes/No.');

}

// Question 4

let food=prompt('Do you think i like Mansaf With chicken');
food=food.toLowerCase();

if (food==='yes') {
//   console.log(food);
  alert('Ofc not');

}else if (food==='no') {
//   console.log(food);
  alert('You are on point');

}else{
//   console.log(food);
  alert('Yes or No answers');

}

// Question 5

let music=prompt('Do i like Music');
music=music.toLowerCase();

if (music==='yes') {
//   console.log(music);
  alert('chill Music');

}else if (music==='no') {
//   console.log(music);
  alert('Really??!! Who dose not like Music?');

}else{
//   console.log(music);
  alert('Yes or No answers ONLY');

}

alert('Enjoy displaying my work' + userName);
