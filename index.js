var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var l = katzDeliLine.length;

  return "Welcome, " + name + ". You are number " + l + " in line."
}

function nowServing(katzDeliLine) {
  var l = katzDeliLine.length
  if (l != 0) {
    katzDeliLine.slice(0);
    return "Currently serving " + katzDeliLine[0] + ".";
  } else {
    return 'There is nobody waiting to be served!';
  }
}
