let value = prompt('Какое выведется число?', '');

if (value === '4.18') {
  alert('Молодец!');
} else if (value === '4') {
  alert('Угадала!');
} else if (value === '' || isNaN(value)){ 
  alert('Not a number!');
} else {
    alert('Тоже неплохо!')
}
