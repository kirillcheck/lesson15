"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

function form() {
  //form promise  
  var message = {
    loading: "Загрузка...",
    success: "Спасибо.Скоро мы с Вами свяжемся",
    failure: "Что-то пошле не так"
  };
  var form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      bottomInputForm = document.querySelector('#form'),
      popupInput = document.getElementsByClassName('popup-form__input')[0],
      phoneInput = document.getElementById('phone');
  var popup = document.querySelector('.popup-form'),
      div = document.createElement("div");
  var divShowMessage = document.createElement("div");
  div.classList.add('status');
  statusMessage.classList.add('status');
  form.addEventListener('submit', function (event) {
    json(form);
    checkJson();
  });
  bottomInputForm.addEventListener('submit', function (event) {
    json(bottomInputForm);
    checkJson();
  });
  popupInput.addEventListener('input', function (e) {
    if (/\D/.test(e.target.value)) {
      e.target.value = '';
      popup.appendChild(divShowMessage);
      divShowMessage.textContent = 'Можно вводить только цифры  ';
    }

    setTimeout(function () {
      divShowMessage.textContent = ' ';
    }, 2000);
  });
  phoneInput.addEventListener('input', function (e) {
    if (/\D/.test(e.target.value)) {
      e.target.value = '';
      popup.appendChild(divShowMessage);
      divShowMessage.textContent = 'Можно вводить только цифры  ';
    }

    setTimeout(function () {
      divShowMessage.textContent = ' ';
    }, 2000);
  });

  function json(name) {
    event.preventDefault();
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      var formData = new FormData(name);
      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);
      request.send(json);
      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          resolve();
        } else if (request.readyState === 4 && request.status == 200) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  function checkJson() {
    // функция статуса отправки
    json(name) // данные ввода телефона
    .then(function () {
      // что произойдет когда все сработает
      console.log(' все работает! ');
      popup.appendChild(div);
      div.textContent = ' Заявка отправлена , спасибо!  ';
    }).catch(function () {
      // что произойдет если что то сломается
      console.log(' Ошибка отправки! ');
    }).then(function () {
      cleanInputs();
    });
  }

  function cleanInputs() {
    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  } // конец promise

}

module.exports = form;