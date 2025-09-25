let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333333'
        document.body.style.color = 'white'
        logo.setAttribute('src', 'black_logo.png')

    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        logo.setAttribute('src', 'logo.webp')
    }
}           
                    