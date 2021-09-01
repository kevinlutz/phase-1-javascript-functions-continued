// Your code here
function saturdayFun(fun = "roller-skate") {
  return `This Saturday, I want to ${fun}!`;
}

function mondayWork(mon = "go to the office") {
  return `This Monday, I will ${mon}.`;
}

function wrapAdjective(para = "*") {
  return function inner(arg = "special") {
    return `You are ${para}${arg}${para}!`;
  };
}

const shout = wrapAdjective("||");
