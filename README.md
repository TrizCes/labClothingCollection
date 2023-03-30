<h1 align="center"> Sobre o projeto </h1>

Esse projeto faz parte do programa de formações de desenvolvedores Full Stack [**DEVinHouse** do lab 365](https://devinhouse.tech/) em parceria com a house [**Audaces**](https://audaces.com/pt-br)

# LAB Clothing Collection

É Um software audacioso para gestão de coleções de moda no setor de vestuário. Nesse repositório está a aplicação Front-End do software, construída utilizando o framework Angular.
O software possui páginas para gerenciamento de coleções de moda e dos modelos, sendo possivel adicionar, editar e excluir coleções e também modelos ás coleções.

## Para ultilizar a aplicação

É necessário:

- Angular CLI (v15.1.5 ou superior). Clique [aqui](https://angular.io/cli) para mais informações.

- Instalar o plugin `json-server` para rodar a API Fake `db.json`;
Para executar a API Fake, utilizamos o comando **json-server --watch db.json** .
É necessário rodar o arquivo na porta 3000 (localhost:3000).
Clique [aqui](https://www.fabricadecodigo.com/json-server/) para mais informações.

- Instalar o ngBootStrap com auxilio do Angular CLI, através do comando:
  `ng add @ng-bootstrap/ng-bootstrap`.
  Para mais informações clique [aqui](https://ng-bootstrap.github.io/#/home). No projeto foi utilizada a versão 14.0.1 do ngBootstrap.

- Após rodar o comando **ng serve**, para acessar utilize o email: **user@email.com** e a senha: **12345678** ou cadastre um novo usuario.

## Técnologias utilizadas

`Angular`
`html`
`SCSS`
`javaScript`
`TS`
`bootstrap`

## Resumo

Na fase inicial, o projeto foi elaborado com a utilização do Angular CLI, a fim de facilitar a implementação do ambiente de desenvolvimento. Da mesma forma, foram desenvolvidos os componentes de cada etapa.

A estilização das páginas e componentes foi realizada, em sua maior parte, com a utilização do `NgBootstrap`, exceto por alguns elementos de estilo aplicados diretamente nos arquivos `SCSS`.

O layout foi executado conforme o mockup disponibilizado no [figma](https://www.figma.com/proto/Q4oM3VWgCWgKdWsq6zedey/Projeto-DevInHouse---Audaces?page-id=2312%3A10&node-id=2312-10&viewport=215%2C-313%2C0.48&scaling=scale-down&starting-point-node-id=2312%3A14&show-proto-sidebar=1).

A lógica pensada para elaboração do projeto foi planejar uma trilha a partir das telas de login e cadastro de usuário, passando pelos componentes pertencentes ao layout completo da aplicação. Em seguida, seguindo para o conteúdo 'Dashboard', 'Coleções' e 'Modelos'.

Os dados necessários para execução do projeto estão salvos no arquivo db.json. Foram implementadas funções que permitissem a exibição dos dados pertinentes a cada item, assim como a interação dinâmica do usuário com os dados.

## Mais informações

- Trilha de desenvolvimento: [Trello](https://trello.com/invite/b/ILDYywPg/ATTIcc7c1ff5277263bdb2424aad84b7c7cbE1EC3B4C/projeto-avaliativo-modulo-1)
- Video de apresentação [aqui]()
