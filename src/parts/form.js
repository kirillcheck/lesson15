function form() {
    //form promise  

    let message = {
        loading: "Загрузка...",
        success: "Спасибо.Скоро мы с Вами свяжемся",
        failure: "Что-то пошле не так"
    };
    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        bottomInputForm = document.querySelector('#form'),
        phoneInput = document.getElementsByName('phone');

    let popup = document.querySelector('.popup-form'),
        div = document.createElement("div");
    let divShowMessage = document.createElement("div");
    div.classList.add('status');

    statusMessage.classList.add('status');
    form.addEventListener('submit', (event) => {
        json(form);
        checkJson();
    });

    bottomInputForm.addEventListener('submit', (event) => {
        json(bottomInputForm);
        checkJson();
    });




    function checkNumber() {
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('input', (e) => {
                if (/\D/.test(e.target.value)) {
                    e.target.value = '';
                    popup.appendChild(divShowMessage);
                    divShowMessage.textContent = 'Можно вводить только цифры  ';
                }
                setTimeout(function () {
                    divShowMessage.textContent = ' ';
                }, 2000);
            });
        }
    }

    checkNumber();

    function json(name) {
        event.preventDefault();
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            let formData = new FormData(name);

            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);
            request.addEventListener('readystatechange', () => {
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

    function checkJson() { // функция статуса отправки
        json(name) // данные ввода телефона
            .then(() => { // что произойдет когда все сработает
                console.log(' все работает! ');
                popup.appendChild(div);
                div.textContent = ' Заявка отправлена , спасибо!  ';
            })
            .catch(() => { // что произойдет если что то сломается
                console.log(' Ошибка отправки! ');
            })
            .then(() => {
                cleanInputs();
            });
    }

    function cleanInputs() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }



    }

    // конец promise
}

module.exports = form;