var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var food = [];
var cals = [];
var calSum = 0;
var weight = prompt('tell me the truth: ');
weight = parseInt(weight);
var gain = 0;i

var eat = prompt('start eating, pig man! (press q for quit) ');

while(eat!='q')
{
  food.push(eat);
  var calNum = prompt('how many cals was that??? ');
  calNum = parseInt(calNum);
  cals.push(calNum);
  eat = prompt('insatiable much? (press q for \'cutie-pie\' ');
}

for(var i=0; i<cals.length; i++)
{
  calSum += cals[i];
}

var gen = prompt('are you a bad enough dude(m/f)?');
if(gen==='m')
{
  gain = calSum/4000;
}
else
{
  gain = calSum/3000;
}

weight += gain;

console.log('we all played the price is right on this one: ' + calSum);
console.log('-------> ' + weight);
console.log('you are what you eat ' + food.join(', '));
