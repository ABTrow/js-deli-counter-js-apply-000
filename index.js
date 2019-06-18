function takeANumber(current, name) {
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`
}

function nowServing(current) {
  if (current.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + current.shift() + ".";
  }
}

