# Type ORM example

- Criando o projeto:

  - `npx typeorm init --name MyProject --database sqlite`

- Criando a migration:

  - `npm run typeorm migration:generate 'src/migration/initial' -- -d 'src/data-source.ts'`

- Salvando a migration:
  - Migration adicionada no data-source.ts
  - ` npm run typeorm migration:run -- -d 'src/data-source.ts'`

* Foi substituído as versões de @types/node, ts-node, typescript para evitar o erro na build:

  - Apagar as dependencias antes de rodar o comando
  - `npm install -D ts-node @types/node typescript`

* Build:
  - `npx tsc`

- Schema log

  - `npx typeorm schema:log -d './build/data-source.js'`

- Start
- `npm start`
