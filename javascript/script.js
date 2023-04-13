
let textInput = document.getElementById('text-area');

let textOutput = document.getElementById('text-output');


function codificar(event){
    textEncoded = textInput.value.replace('e', 'enter').replace('i', 'imes').replace('a', "ai").replace('o', 'ober').replace('u', 'ufat');

    console.log(textEncoded);

    textOutput.value = textEncoded;

    document.getElementById('text-not-found').style.display = 'none';
    document.getElementById('imagem').style.display = 'none';
    document.getElementById('text-output').style.height = '42rem';
    document.getElementById('button-copy').style.display = 'block';
 
}

function descriptografar(event) {
    textDescription = textInput.value.replace('enter', 'e').replace('imes', 'i').replace('ai', "a").replace('ober', 'o').replace('ufat', 'u');
    
    textOutput.value = textDescription;

    document.getElementById('text-not-found').style.display = 'none';
    document.getElementById('imagem').style.display = 'none';
}

function dark() {
    const bodyDark = document.getElementById('body');
    const textArea = document.getElementById('text-area');

    if (bodyDark.classList.value == 'dark') {
        bodyDark.classList.remove('dark');
        textArea.classList.remove('dark');
    } else {
        bodyDark.classList.add('dark');
        textArea.classList.add('dark');
    }

    console.log(bodyDark.classList);
}
