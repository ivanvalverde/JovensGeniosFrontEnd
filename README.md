# Proposta

Criar um front-end que irá consumir os dados da API criada. A aplicação deverá ter como base o protótipo mobile first contido neste [link](https://www.figma.com/file/pRMFpy0Wct8K2XtEm1sdVT/Vue?node-id=0%3A1).

## Executando o projeto

Primeiramente, confirme que o servidor back-end está rodando na porta 3000 (instruções de como subir o servidor no README.md do [repositório da API](https://github.com/ivanvalverde/JovensGeniosAPI)).<br>
Em seguida, execute os seguintes comandos num terminal aberto neste diretório:

### `npm install`

Através deste comando, as dependências do projeto serão instaladas.

### `npm start`

Este comando irá executar a aplicação, como já existe outra rodando na porta 3000, o sistema informará que a mesma já está em uso e solicitará permissão para utilizar a porta 3001. Pressione Y para confirmar.

Utilize em seu navegador o link [http://localhost:3001](http://localhost:3001) para abrir a aplicação.

**OBS: O usuário deve acessar as telas com resolução mobile (protótipo mobile first) apesar do site ser responsivo para web. Caso não saiba fazer através do navegador, acesse este [link](https://canaltech.com.br/mercado/como-testar-um-site-em-diferentes-resolucoes-de-tela/#:~:text=Usando%20o%20Chrome,%2B%20Shift%20%2B%20I%E2%80%9D).)**

## Bibliotecas utilizadas

A biblioteca [TailwindCSS](https://tailwindcss.com/docs/installation) foi utilizada para estilizar a página em questão pois ela permite a fácil estilização dos componentes sem que os mesmos tenham estilos pré-definidos, diferente de bibliotecas de componentes.<br>
Todas as chamadas a API construída foram feitas utilizando a biblioteca [Axios](https://axios-http.com/ptbr/docs/intro) por conta de seu uso simples, intuitivo e legibilidade do código.<br>
O [Typescript](https://www.typescriptlang.org/) foi utilizado para maior escalabilidade do trabalho e para descobrir possíveis erros em tempo de desenvolvimento.<br>
O [React-router](https://reactrouter.com/en/main) foi utilizado com a finalidade de lidar com as diferentes rotas disponíveis no projeto.<br>
A biblioteca [React-confetti](https://www.npmjs.com/package/react-confetti) forneceu um componente essencial para a construção da aplicação.
