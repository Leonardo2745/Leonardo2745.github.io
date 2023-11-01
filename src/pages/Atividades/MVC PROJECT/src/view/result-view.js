const resultView = {
    build:()=>{
        const root = document.getElementById("root");
        const tableResult = document.createElement("table");
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
  <tbody id="users-result"></tbody>  
  `;
        root.appendChild(tableResult);
    },
}

export{resultView}