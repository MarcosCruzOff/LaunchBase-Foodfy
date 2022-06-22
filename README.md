# LaunchBase-Foodfy

<div align="center">
   <img src="assets/logoB.png" width="110px" style="margin:40px 6px">
   <img src="assets/chef.png" width="100px">
</div>

# 🚀 Sobre o desafio

Nessa etapa do desafio construi um site completo para uma empresa fictícia de receitas chamada Foodfy.

## LaunchBase-Foodfy: Construindo o Foodfy

- Nesta primeira etapa o site foi constuido utilizando apenas HTML, CSS e Javascript de maneira estática.

- O desafio de por um modal na página de receitas, no qual sua função é de abrir uma caixar com uma melhor visualização dos detalhes da receita

<br></br>

## LaunchBase-Foodfy: Refatorando o Foodfy

<br></br>

<h2 align="center"> Técnologias adicionadas </h2>

- ### Express:
  É um Framework rápido e um dos mais utilizados em conjunto com o Node.js, facilitando no desenvolvimento de aplicações back-end

- ### Nunjucks
  É uma template engine, que permite a manipulação do Html com conteúdo Javascript.
É necessário usar o comando para instalação destas tecnologias <code>npm isntall express nunjucks</code> 

<br>

## Mudanças

- Os arquivos `.html` passam ser substituido pela extensão `.njk` que se refere ao `Nunjucks`

- adicionado um arquivo na raiz do projeto `server.js` que é responsável pela conexão do servidor e servir as rotas

- adicionado um arquivo na raiz do projeto `data.js` que será responsável agora por armazenar e fornecer os dados das receitas de maneira dinâmica na página Sobre.

- adicionado um novo arquivo `recipe-web.njk` dentro da pasta 'views' que trás todos dos detalhes de uma determinada receita que foi clicada. E arquivo é alimentado pelo arquivo `data.js`

- adicionado um novo arquivo Javascript `btn.js` no qual sua função é de mostrar ou esconder cada sessão das receitas através de um botão

<br/>
