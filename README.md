# Aula: CRUD com Express, MySQL, Upload de Imagens e EJS

## Descrição

Este projeto foi preparado para ministrar uma aula prática sobre o desenvolvimento de uma aplicação web básica com Node.js usando o framework Express, banco de dados MySQL e manipulação de upload de arquivos com Multer. O objetivo é ensinar conceitos fundamentais de backend, integração com banco, rotas, templates e tratamento de arquivos.

---

## Objetivos da Aula

- Configurar um servidor Express com conexão a um banco de dados MySQL.
- Criar rotas para adicionar, editar, listar e deletar produtos.
- Implementar upload de imagens usando Multer e salvar os arquivos no servidor.
- Renderizar páginas dinâmicas com EJS (templates).
- Trabalhar com requisições GET e POST.
- Validar dados recebidos do usuário.
- Introduzir boas práticas para organização do código e tratamento de erros simples.

---

## Funcionalidades Implementadas

- **Conexão MySQL:** conexão básica com banco local para CRUD de produtos.
- **Upload de imagens:** armazenar imagens em pasta pública para serem exibidas na lista de produtos.
- **Rotas:** 
  - `GET /add_product`: exibe formulário para cadastro.
  - `POST /add_product`: recebe dados do formulário e insere no banco.
  - `GET /products`: lista todos os produtos cadastrados.
  - `GET /edit_product/:id`: exibe formulário para editar produto.
  - `POST /edit_product/:id`: atualiza produto no banco.
- **Templates EJS:** renderiza páginas com dados dinâmicos do banco.
- **Arquivos estáticos:** serve arquivos CSS, JS e imagens.

---

## Conteúdo Didático

Durante a aula, os alunos aprendem:

- Como criar e configurar um servidor básico com Express.
- Como conectar uma aplicação Node.js a um banco MySQL.
- Uso do Multer para upload e armazenamento de arquivos.
- Renderização dinâmica usando EJS.
- Trabalhar com rotas RESTful simples.
- Manipular formulários HTML para inserir e editar dados.
- Gerenciar arquivos estáticos e imagens.
- Tratamento básico de erros.

---

## Observações

- O código é propositalmente simples para facilitar o entendimento.
- Algumas correções e melhorias são sugeridas para prática, como tratamento de erros mais robusto e sanitização de dados.
- A senha do banco está em branco por padrão, ajuste conforme seu ambiente.
- A base de dados e tabela precisam estar criadas previamente.

---

## Como Usar

1. Instale as dependências:
   ```bash
   npm install express mysql body-parser multer ejs
   ```
2. Configure o MySQL e ajuste os dados de conexão no arquivo principal
3. Execute o servidor:
   ```bash
     node app.js
   ```
5. Acesse http://localhost:3000/add_product para cadastrar produtos.
6. Acesse http://localhost:3000/products para listar e editar.

## Próximos Passos Sugeridos
- Implementar remoção de produtos.
- Adicionar validação mais avançada dos dados.
-Usar ambiente .env para configuração segura.
-Aprimorar o front-end com frameworks ou CSS moderno.

***Este projeto foi criado como material de apoio para aula prática, com foco em introduzir conceitos importantes para quem está começando no desenvolvimento backend com Node.js.***
