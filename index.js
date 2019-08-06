function takeANumber(position, name){
  position.push(name);
  return `Welcome, ${name}. You are number ${position.length} in line.`;
}

var counter = 0;

function takeANumber2(){
  counter++;
  console.log(`We are now serving ${counter}.`);
}


takeANumber2();
takeANumber2();
takeANumber2();

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  else
    var str = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${str}.`;
}

function currentLine(katzDeliLine){
  var str = "The line is currently: "
  if (katzDeliLine.length === 0)
    return "The line is currently empty."
  else{
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length - 1)
        str += `${i + 1}. ${katzDeliLine[i]}`;
      else
        str += `${i + 1}. ${katzDeliLine[i]}, `;
    }  
  }
  return str;
}