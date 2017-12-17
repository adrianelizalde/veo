var list = [
  ['Adrian','guapo'],
  ['Victor','feo'],
  ['Lozano','furcia']
];

var listhtml;
var names;
var beauty;
var outputDiv;
var nameSelect;

function print(message) {       // why (message)
  outputDiv = document.getElementById('output').innerHTML = message;
}

for (var i = 0; i < list.length; i += 1) {
  names = list[i][0];
  beauty = list [i][1];
  // if (names === 'Lozano') {
  //   nameSelect.push('Lozano');
  // } else {
  //   nameSelect.push('Victor');
  // }
}



function buildList(arr) {   // why (arr)
  var listhtml = '<ul>';
    for (var i = 0; i < names.length; i += 1) {
      listhtml += '<li>' + names + '</li>';
    }
    for (i = 0; i < beauty.length; i += 1) {
      listhtml += '<li>' + beauty + '</li>';
    }
    listhtml += '</ul>';
    return listhtml;
}


html = "Your name is " + nameSelect + " you are " + beauty + ".";
html += buildList(listhtml);  // why (listhtml)
print(html);
