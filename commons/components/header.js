function header (){
let sobre
let projetos
let artigos
let contato
let pagina = window.location.pathname
if(pagina.includes("/index.html")){
sobre = "#sobre"
projetos = "#projetos"
artigos = "#artigos"
contato = "#contato" 
}
else{

    sobre = "/index.html#sobre"
    projetos = "/index.html#projetos"
    artigos = "/index.html#artigos"
    contato = "/index.html#contato"
}

headerSite.innerHTML = `<header class="cardhead">
<nav class="nav-items">
    <a class="button to-left padding-large"  href="/src/pages/sobremim.html"><strong > <img class="imgLogo"  src="/src/img/IMG_20230803_165320_717.jpg"></strong></a>
    <a class="button to-right padding-large" href=${sobre}>SOBRE</a>
    <a class="button to-right padding-large" href=${projetos}>PROJETOS</a>
    <a class="button to-right padding-large" href=${artigos}>ARTIGOS</a>
    <a class="button to-right padding-large" href=${contato}>CONTATO</a>
</nav>
</header>`

}
export default header();


