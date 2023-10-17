let materiaNome = [
  "Português",
  "Matemática",
  "Biologia",
  "Física",
  "Química",
  "Geografia",
];
let resultados;

let selectItems = document.getElementById("nomMateria");

materiaNome.forEach(function (materiaNom) {
  let option = document.createElement("option");
  option.value = materiaNom;
  option.text = materiaNom;
  selectItems.appendChild(option);
});

let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let user = { nome: "", instituicao: "", curso: "" };


function saveUser(){
    if(!isVazio('userDiv')){
        user.nome = nomeUsuario.value;
        user.instituicao = nomeInstituicao.value;
        user.curso = nomeCurso.value;
        resultados = `<b>BOLETIM DE: </b>${user.nome}<br><b>INSTITUIÇÃO/ESCOLA:</b> ${user.instituicao} <br><b>CURSO: </b>${user.curso} `;
        resultNotas.innerHTML = resultados;
        content2.style.display = "flex"
        userDiv.style.display = "none"
    }
    
}

function save() {
    if(!isVazio('materiasDiv') &&  !numNegativo('materiasDiv') && !matAdd('materiasDiv') && !verificaValores('materiasDiv') ){
        let inputNotas = [];
        let totalNotas = 0;
      
        document.querySelectorAll("div.input-group input").forEach((e) => {
          inputNotas.push(parseFloat(e.value));
          totalNotas += parseFloat(e.value);
        });
      
        materias.push({
          id: materia.id++,
          nome: nomMateria.value,
          notas: inputNotas,
          total: totalNotas,
          info: `<hr>
                  RESULTADO DE: <b>${nomMateria.value.toLocaleUpperCase()}</b> 
                  <ul class="list-group">
                      <li class="list-group-item"><b>1º Bimestre:</b> ${
                        inputNotas[0]
                      }</li>
                      <li class="list-group-item"><b>2º Bimestre:</b> ${
                        inputNotas[1]
                      }</li>
                      <li class="list-group-item"><b>3º Bimestre:</b> ${
                        inputNotas[2]
                      }</li>
                      <li class="list-group-item"><b>4º Bimestre:</b> ${
                        inputNotas[3]
                      }</li>
                      <li class="list-group-item">TOTAL FINAL: <b>${totalNotas}</b></li>
                      <li class="list-group-item">STATUS: <b>${isAprovadoOuReprovado(
                        totalNotas
                      )}</b></li>
                  </ul>
                  `,
        });
      
     
        resultados = `<b>BOLETIM DE: </b>${user.nome}<br><b>INSTITUIÇÃO/ESCOLA:</b> ${user.instituicao} <br><b>CURSO: </b>${user.curso} `;
        materias.forEach((e) => {
          resultados += `<br>` + e.info;
        });
      
        resultNotas.innerHTML = resultados;
    }
  
}
function isAprovadoOuReprovado(valor) {
  if (valor >= 60) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}

function isVazio(div) {
  let inputs = document.querySelectorAll(`#${div} input`);
  let erro = false;
  inputs.forEach((input) => {
    input.value == "" ? (erro = true) : null;
  });
  erro ? alert("Por favor, preencha todos os campos!") : null;
  return erro;
}

function numNegativo(div) {
  let inputs = document.querySelectorAll(`#${div} input`);
  let erro = false;
  inputs.forEach((input) => {
    parseFloat(input.value) < 0 ? (erro = true) : null;
  });
  erro ? alert("Os valores não podem ser menores que 0!") : null;
  return erro;
}

function matAdd(div) {
  let erro = false;
  materias.forEach((mat) => {
    mat.nome == nomMateria.value ? (erro = true) : null;
  });
  erro ? alert("Esta matéria já foi adicionada!") : null;
  return erro;
}

function verificaValores(div) {
  let erro = false;
  let tempMat = document.querySelectorAll(`#${div} input`);
  if (parseFloat(tempMat[0].value) > 20) {
    alert("O valor máximo para o bimestre 1 é 20!");
    erro = true;
  } else if (parseFloat(tempMat[1].value) > 25) {
    alert("O valor máximo para o bimestre 2 é 25!");
    erro = true;
  } else if (parseFloat(tempMat[2].value) > 25) {
    alert("O valor máximo para o bimestre 3 é 25!");
    erro = true;
  } else if (parseFloat(tempMat[3].value) > 30) {
    alert("O valor máximo para o bimestre 4 é 30!");
    erro = true;
  }
  return erro;
}
