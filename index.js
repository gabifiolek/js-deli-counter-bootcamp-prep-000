var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var l = katzDeliLine.length;

  return "Welcome, " + name + ". You are number " + l + " in line."
}

function nowServing(katzDeliLine) {
  var line = katzDeliLine.length
  var firstPerson = katzDeliLine[0];

  if (line == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    katzDeliLine.splice(0,1);
    return "Currently serving " + firstPerson + ".";
  }
}

function currentLine(katzDeliLine) {
  var text;

  for (var i = 0; i < katzDeliLine.length; i++) {
      text += i + ". " + katzDeliLine[i] + ', ';
  }
  return "The line is currently: " + text;
}
