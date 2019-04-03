const btn = document.getElementById('btn');
const output = document.getElementById('dane-programisty');

function getDataAsync() {
    let httpReq = new XMLHttpRequest();
    let template = '';

    httpReq.open('get', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
    httpReq.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            let content = this.responseText;
            content = JSON.parse(content);
            console.log(content);

            let newContainer = document.createElement('div');
            let newContent = document.createTextNode(`Nazywa się ${content.imie} ${content.nazwisko} z zawodu ${content.zawod} pracuje w firmie ${content.firma}`);

            newContainer.setAttribute('id', 'dane-programisty');
            newContainer.appendChild(newContent);
            btn.insertAdjacentElement('afterend', newContainer);

            if (template != '') {
                output.innerHtml = template;
            }
        }
    });
    httpReq.send();
}

btn.addEventListener('click', getDataAsync);