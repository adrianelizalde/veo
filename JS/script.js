var list = [
  ['Adrian', 'guapo'],
  ['Victor', 'feo'],
];
var listhtml;
var names;
var beauty;
var text;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (i = 0; i < list.length; i+= 1) {
  var names = list[i][0];
  var beauty = list [i][1];
}

function buildList(arr) {
  var listhtml = '<ul>';
    for (i = 0; i < names.length; i+= 1) {
      listhtml += '<li>' + names + '</li>';
    }
    for (i = 0; i < beauty.length; i+= 1) {
      listhtml += '<li>' + beauty + '</li>';
    }
    listhtml += '</ul>';
    return listhtml;
}


html = "Your name is " + names + " you are ";
html += buildList(text);
print(html);
