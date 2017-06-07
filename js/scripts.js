var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
  if (i == 0) {
    alert('Przycisk 1');
  } if (i == 1) {
    alert('Przycisk 2');
  } if (i == 2) {
    alert('Przycisk 3');
  }
  console.log(i);
  console.log(buttons)
}