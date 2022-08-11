// imports
import { Calculadora } from "./calculadora.js";
import { RepositorioLocalStorage } from "./repositorios/repositorioLocalStorage.js";
// Data Binding
const txtPrimeiroNumero = document.getElementById("primeiroN");
const txtSegundoNumero = document.getElementById("segundoN");
const selectOperador = document.getElementById("operacao");
const btnCalcular = document.getElementById("btnCalcular");
const btnRemover = document.getElementById("btnRemover");
const txtResultado = document.getElementById("Resultado");
const listaItens = document.getElementById("lista");
// Declaracao de objetos
const calculadora = new Calculadora();
const repositorio = new RepositorioLocalStorage();
recuperarDados();
function calcular() {
    let resultado = 0;
    const calculo = {
        primeiroNumero: Number(txtPrimeiroNumero.value),
        segundoNumero: Number(txtSegundoNumero.value),
        operador: selectOperador.selectedIndex,
    };
    resultado = calculadora.calcular(calculo);
    salvarDadosLocalStorage();
    txtResultado.innerText = "O resultado é: " + resultado;
    carregarHistorico();
}
function salvarDadosLocalStorage() {
    repositorio.inserir(calculadora.historico);
}
function recuperarDados() {
    const dados = repositorio.selecionarTodos();
    calculadora.historico = dados;
    carregarHistorico();
}
function carregarHistorico() {
    listaItens.innerHTML = '';
    for (let i = 0; i < calculadora.historico.length; i++) {
        let aux = "<li id='1'>" + calculadora.historico[i] + "</li>";
        listaItens.insertAdjacentHTML("afterbegin", aux);
    }
}
function limparHistorico() {
    listaItens.innerHTML = '';
    calculadora.historico = [];
    salvarDadosLocalStorage();
}
btnRemover.addEventListener("click", limparHistorico);
btnCalcular.addEventListener("click", calcular);
