# LaunchBase-Foodfy

<div align="center">
   <img src="public/assets/logoB.png" width="110px" style="margin:40px 6px">
   <img src="public/assets/chef.png" width="100px">
</div>

# 🚀 Sobre o desafio

Nessa etapa do desafio construi um site completo para uma empresa fictícia de receitas chamada Foodfy.

## LaunchBase-Foodfy: Construindo o Foodfy

- Nesta primeira etapa o site foi constuido utilizando apenas HTML, CSS e Javascript de maneira estática.

- Fazer com que os menus receba um bold quando clicado

- O desafio de por um modal na página de receitas, no qual sua função é de abrir uma caixar com uma melhor visualização dos detalhes da receita

<br>

# 

<br>

## LaunchBase-Foodfy: Refatorando o Foodfy

<br>

<h2 align="center"> --Técnologias adicionadas-- </h2>


<br>

- ### Express:
  É um Framework rápido e um dos mais utilizados em conjunto com o Node.js, facilitando no desenvolvimento de aplicações back-end

- ### Nunjucks
  É uma template engine, que permite a manipulação do Html com conteúdo Javascript. É necessário usar o comando para instalação destas tecnologias <code>npm isntall express nunjucks</code> 

<br>

## Mudanças

- Os arquivos `.html` passam ser substituido pela extensão `.njk` que se refere ao `Nunjucks`

- adicionado um arquivo na raiz do projeto `server.js` que é responsável pela conexão do servidor e servir as rotas

- adicionado um arquivo na raiz do projeto `data.js` que será responsável agora por armazenar e fornecer os dados das receitas de maneira dinâmica na página Sobre.

- adicionado um novo arquivo `recipe-web.njk` dentro da pasta 'views' que trás todos dos detalhes de uma determinada receita que foi clicada. E arquivo é alimentado pelo arquivo `data.js`

- adicionado um novo arquivo Javascript `btn.js` no qual sua função é de mostrar ou esconder cada sessão das receitas através de um botão

<br>

#

<br>

## LaunchBase-Foodfy: Administração do Foodfy <i> 1° parte </i>

Adicionado ao projeto o layout do administrador que é responsável por cuidar das receitas do usuário, tais como criar, atualizar e deletar

## Mudanças e organização do Projeto

- Alteração do arquivo `main.css` para o formato de scss, movendo para uma pasta chamada scss, minha idea agora é trabalhar com o todo poder que o scss proporciona

- Organização das pastas scss. Criaremos 3 novas pastas `global`, `admin`, `web`, onde elas serão responsável por armazenar os arquivos dos seus respectivos setores

- Criando também uma pastas para chamada `js` no qual armazenará todos os arquivos Javascript

Adicionado a pasta admin em views, mesma contém os arquivos:

- `layout-manager.njk` responsável de renderizar a página inicial do administrador

- `manager-Recipes.njk` responsável de renderizar as listas de receitas

- `manager-Recipes-create.njk` responsável de renderizar o formulário para a criação de receitas

- `manager-Recipes-edit.njk` responsável por renderizar o formulário para a edição da receita ja criada

- `manager-Recipes-show.njk` responsável por renderizar determinada receita

- `manager-Chef.njk` responsável de renderizar as listas de chefs

- `manager-Chef-create.njk` responsável de renderizar o formulário para o cadastro de chefs

- `manager-Chef-edit.njk` responsável por renderizar o formulário para a edição do chef ja criado

- `manager-Chef-details.njk` responsável por renderizar determinado chef

Adicionado um novo arquivo `Router.js` responsável por gerênciar as rotas do projeto

<br/>

<h2 align="center"> --Técnologias adicionadas-- </h2>
<br/>

- ### method-override:
  Este método pega um valor do request e sobre-escreve este. O código para instalar o pacote `npm install method-override`

<br/>


Criado uma pasta chamada Controllers, nela os arquivos `recipes.js` e  `chefs.js` será responsável pelo CRUD da aplicação do administrador

<br>
<h3 align="center"> Apresentação </h3>
<br>
<div align="center">
   <img src="presentation/home.png" width="500px">
   <img src="presentation/about.png" width="500px">
   <img src="presentation/recipes.png" width="500px">
   <img src="presentation/recipe.png" width="500px">
</div>

<br><br><br><br><br>

<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio Foodfy - Iniciando no Front-end
</h3>

<blockquote align="center">“Faça seu melhor sempre!”</blockquote>

