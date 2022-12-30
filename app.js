window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = generateExcuse();
    })
    console.log("hola desde la consola");
}

function generateExcuse() {

    let pronombre = ['mi', 'su', 'yo'];
    let sujeto = ['gato', 'perro', 'arbol', 'auto', 'movil'];
    let action = ['luz', 'apagar', 'robaron', 'comieron', 'arrojaron'];
    let donde = ['casa', 'calle', 'jardin', 'cama'];

    let pronombreIndex = Math.floor(Math.random() * pronombre.length);
    let sujetoIndex = Math.floor(Math.random() * sujeto.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let dondeIndex = Math.floor(Math.random() * donde.length);

    return pronombre[pronombreIndex] + ' ' + sujeto[sujetoIndex] + ' ' + action[actionIndex] + ' ' + donde[dondeIndex];
};

generateExcuse();