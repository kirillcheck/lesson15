"use strict";

function modal() {
  //modal 
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  var Info = document.querySelector('.info');
  Info.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('description-btn')) {
      // если цель по которой мы кликнули содержит класс description-btn 
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });
}

module.exports = modal;