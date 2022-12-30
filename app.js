window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = generateExcuse();
    })
    console.log("hola desde la consola");
}

function generateExcuse() {

    let pronombre = ['mi', 'la', 'un'];
    let sujeto = ['internet', 'luz', 'arbol', 'gato', 'carro'];
    let action = ['se'];
    let donde = ['murio', 'fue', 'cayó', 'durmió','comió','varó'];

    let pronombreIndex = Math.floor(Math.random() * pronombre.length);
    let sujetoIndex = Math.floor(Math.random() * sujeto.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let dondeIndex = Math.floor(Math.random() * donde.length);

    return pronombre[pronombreIndex] + ' ' + sujeto[sujetoIndex] + ' ' + action[actionIndex] + ' ' + donde[dondeIndex];
};

generateExcuse();