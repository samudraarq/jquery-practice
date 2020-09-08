const input = $("#input"), //get element
  buttonadd = $("#add"),
  list = $("#lists"),
  buttonsort = $("#sort");

let todo = [];

// buttonadd.on("click", add);
buttonadd.click(add); //event listener

if (todo.length) {
  show();
}

function show() {
  list.html(""); //change to html("")
  let content = ""; //create empty content
  for (let i = 0; i < todo.length; i++) {
    todo[i].date = new Date(todo[i].date);
    content += `<li>${todo[i].text} | ${todo[i].date}${todo[i].completed}</li>`;
    list.html(content); //add to content
  }
}
function add() {
  let val = input.val(); //change to val()
  todo.push({
    text: val,
    date: new Date(),
    completed: false,
  });
  show();
}

// change all of this to jquery code
