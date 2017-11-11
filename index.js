var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var l = katzDeliLine.length;

  return "Welcome, " + name + ". You are number " + l + " in line."
}

function nowServing(katzDeliLine) {
  var l = katzDeliLine.length
  var firstPerson = katzDeliLine[0];
  
  if (l != 0) {
    return "Currently serving " + firstPerson + ".";
    katzDeliLine.splice(0,1);
  } else {
    return 'There is nobody waiting to be served!';
  }
}
