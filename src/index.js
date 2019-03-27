window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let calc = require('./parts/calculate.js'),
    form = require('./parts/form.js'),
    slider = require('./parts/slider.js'),
    tabs = require('./parts/tabs'),
    timer = require('./parts/timer.js'),
    modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();


});