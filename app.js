const globalName = "Tomek";

function sayMyName(name) {
  const greeting = "Hello";
  name = greeting + " " + name;
  debugger;
  return name;
}

function sayGlobalName() {
  const greeting = "Hi";
  const name = greeting + " " + globalName;
  return name;
}
