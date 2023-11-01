const resultView ={
  build:()=>{
     const root = document.getElementById('root')
      const tableResult = document.createElement('table');
      tableResult.setAttribute("id", "resultTable")
      tableResult.className = "table table-borderless";
      tableResult.innerHTML = `
      
      <thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nome</th>
    <th scope="col">Idade</th>
    <th scope="col">Login</th>
    <th scope="col">Senha</th>
  </tr>
</thead>
<tbody >
<tr id="users-result">
</tr>
  </tbody>   
      `


     root.appendChild(tableResult);
  },
  update: (params) => {

    const thId = document.createElement('th');
    const tdNome = document.createElement('td');
    const tdIdade = document.createElement('td');
    const tdLogin = document.createElement('td');
    const tdSenha = document.createElement('td');
    const trBody = document.getElementById('users-result');
    
    for (let i = 0; i < params.length; i++) {
    const th = document.createElement('th');
    th.setAttribute('scope', 'row')
    th.innerText = i+1;
    
    trBody.appendChild(thId);

    tdNome.innerText = params[i].getNome;
    trBody.appendChild(tdNome); 
    
    tdIdade.innerText = params[i].getIdade;
    trBody.appendChild(tdIdade);

    tdLogin.innerText = params[i].getLogin;
    trBody.appendChild(tdLogin);

    tdSenha.innerText = params[i].getSenha;
    trBody.appendChild(tdSenha);
    }
     
  },
};
export {resultView}
