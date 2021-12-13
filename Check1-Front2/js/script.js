let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let btn = document.querySelector('#btn');
let res = document.querySelector('#res')
let img = document.querySelector('#image');
let cardTag = document.querySelector('#card');
let tamanhoS = document.getElementsByName('tamanho')



btn.addEventListener('click', cadastrar);
res.addEventListener('click', clear);

function cadastrar(event) {

    event.preventDefault(); 
    let tam;
    for (tamanho of tamanhoS) {
        if (tamanho.checked) {
            tam = tamanho.value;

        }
    }

    document.querySelector('#nome1').innerText = `Nome:${document.getElementById('nome').value}`
    document.querySelector('#sobrenome1').innerText = `Cidade:${document.getElementById('sobrenome').value}`
    document.querySelector('#imgTag').src = document.getElementById('image').value
    document.querySelector('#tam1').innerText = `Tipo de Produto:${tam}`
    document.querySelector('#desc').innerText = `${nome.value} ${sobrenome.value} o produto ${tam} que você quer doar foi anunciado. Obrigado!`
    cardTag.style.display = 'block';



}



function clear(event) {
    event.preventDefault();
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('image').value = '';
    document.getElementById('card').style.display = 'none';

}