"use strict";

function calculate() {
  //calculate
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0; // проверка на правильный ввод  

  persons.addEventListener('input', function (e) {
    if (/\d/.test(e.target.value)) {
      console.log(' число прошло проверку! ');
    } else {
      alert(' можно только число! знаки [+ , e] запрещены  ');
      e.target.value = '';
    }
  });
  restDays.addEventListener('input', function (e) {
    if (/\d/.test(e.target.value)) {
      console.log(' число прошло проверку! ');
    } else {
      alert(' можно только число! знаки [+ , e] запрещены  ');
      e.target.value = '';
    }
  }); // конец проверки на правильный ввод

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  }); //calculate
}

module.exports = calculate;