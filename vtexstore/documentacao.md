#  Decisões arquiteturais e estrutura

O projeto da loja de e-commerce é construído com base no framework Next.js, que oferece uma abordagem de desenvolvimento entre servidor e cliente, permitindo a renderização tanto no servidor quanto no navegador. Ele utiliza o React para construir interfaces de usuário e o Styled Components para estilização.

## Requisitos para rodar o projeto:

    Node LTS
    Yarn 1.x

### Estrutura do projeto:

    ./components: Contém componentes reutilizáveis da interface do usuário, como ícones e outros elementos visuais.
    ./hooks: Diretório para armazenar hooks personalizados.
    ./icons: Ícones utilizados na interface.
    ./pages: Páginas da aplicação, que são usadas pelo Next.js para criar o sistema de roteamento.
    ./styles: Estilos globais ou compartilhados.
    ./types: Tipos de dados TypeScript utilizados no projeto.
    ./utils: Funções utilitárias ou auxiliares.

### Como me localizar no projeto?

Todas as páginas do projeto estão listadas em ./pages. Cada componente que representa uma página está localizado dentro do diretório correspondente em ./components. Para fazer alterações, navegue pelos componentes conforme necessário.


### Como realizar chamadas à API GraphQL?

O projeto faz chamadas à API GraphQL para recuperar dados dinâmicos, como detalhes de produtos. A configuração da chamada à API GraphQL está localizada em um arquivo específico, onde é definida a função fetcher. Essa função é utilizada em conjunto com o hook useQuery para realizar a consulta de dados.


### Fluxo de execução da loja
  
O header do site, incluindo a logo e a barra de busca pro usuário digitar o que quer encontrar foram feito com base na biblioteca Styled Components do React cuja estilização foi feita de um jeito mais automático com estilos encapsulados.

Os ícones foram baixados em svg do google fonts e transformados em componentes do react

Usei também, uma função do React, um hook, onde posso armazenar e modificar o estado de alguns componentes. No caso da loja, foi usado o useLocalStorage para manter um estado que reflete os itens no carrinho e assim armazenar a quantidade de produtos no carrinho de compras

Para fazer a listagem dos produtos, através da API GraphQL é feita uma consulta para um servidor e é retornado somente os dados que eu preciso. Foi feita uma query onde é listado todas os atributos dos produtos ao mesmo tempo que consome um hook

Tanto o id quanto o preço quanto a descrição de cada produto possui resultados randômicos extamente pelo fato de ser usado uma biblioteca chamada faker que gera dados como lorem ipsum por exemplo

Cada produto recebe 3 propriedades que são a imagem, o título e o preço

Outro hook é utilizado para pegar o que o usuário digitou no input e ver se tem no LocalStorage pelo valor do id de cada produto para retornar

Toda vez que o usuário terminar de digitar é feito um filtro a partir dos resultados buscados, a busca só é feita quando o usuário terminar de digitar pra não disparar muitas renderizações

Foi colocado todos os produtos numa variável e depois uma função para filtrar e é retornado os produtos que contém o nome que o usuário digitou, tudo isso feito no useProducts

O botao de voltar redireciona para a home a partir do useRouter do next

Quando um produto é clicado, é disparado uma query que pega o id do determinado produto e a partir do id, outra query é feita, pegando assim, os atributos de cada produto e adiciona na page do produto

Também foi usado um useRouter pra quando o card do produto for clicado, redirecionar pra página do produto correspondente

Uma função na página de produto verifica se o produto já está no carrinho. Se estiver, ele aumenta a quantidade desse produto; caso contrário, ele adiciona o produto ao carrinho. E, no final, atualiza o localStorage com os itens do carrinho atualizados.

valores são armazenados num array, a partir de um loop, os valores são somados em um acumulador

Existe uma função através do localStorage para modificar a quantidade de itens variando de 1 a 5 no carrinho e a lixeirinha foi transformada em botão no intuito do usuário clicar quando quiser excluir o produto do carrinho

Existe uma função que calcula sempre o valor dos produtos somados com o valor da entrega que representa $40
