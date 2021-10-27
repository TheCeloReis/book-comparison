# Comparação de notas de livros

Site: https://tag-challenge.web.app/

## Pricipais tecnologias

- [React](https://react.org/) - Framework de Frontend
- [Next.js](https://nextjs.org/) - React Framework usado para SSG
- [React Query](https://react-query.tanstack.com/) - Hooks para fetch e cache
- [Styled Components](https://styled-components.com/) - Biblioteca de CSS in JS
- [Jest](https://jestjs.io/) - Javascript Testing Framework
- [React Testing Library](https://testing-library.com/docs/)
- [Typescript](https://www.typescriptlang.org/)

## Setup

### Requerimentos para rodar localmente

- Node.js >=12, preferencialmente [instalar](https://github.com/nvm-sh/nvm#install--update-script) com `nvm`
- [Yarn classic](https://classic.yarnpkg.com/lang/en/) (1.22.x)
- [Firebase CLI](https://firebase.google.com/docs/cli) Para rodar Cloud Funcions localmente

### Rodar local o Front

Entrar na pasta `/app` e instalar as dependencias com `yarn install`

Criar um arquivo `.env.local` com a variavél `NEXT_PUBLIC_API_BASE_URL=ENDEREÇO_DE_PRODUÇÃO`.

Executar o comando `yarn run dev`, ira subir uma versão de desenvolvimento em http://localhost:3000.

### Rodar local as Serveless Functions

Entrar na pasta `/functions` e instalar as dependencias com `yarn install`

Compilar o Typescript em watch mode com o comando `yarn run watch`

Iniciar os emuladores do firebase com o comando `firebase emulators:start`.

Acessar a api no endereço http://localhost:5000/api. Usar esse endereço no `.env` do app para consumir o endpoint local

### Testes e Linter

Na pasta `/app`, constam scripts para linter e testes

- `yarn run lint`
- `yarn run test`
- `yarn run prettier`

Na pasta `/function` consta o script

- `yarn run lint`

### IDE

Recomendado usar VSCode com as extensões especificadas em `/.vscode/extensions.json`

- Prettier
- Eslint
- Styled Componentes
- Jest Test Runner

## Deploy

Qualquer merge na branch master gera um pipeline que faz o deploy das functions e o export estatico do app Next.js. Isso é feio por peio da Pipeline do GitHub Actions.
