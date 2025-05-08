# 🧼 Clean Architecture em Node.js

Este projeto é um estudo prático de Clean Architecture utilizando Node.js, com PostgreSQL como banco de dados e testes automatizados com Jest.

---

## 📁 Estrutura do Projeto

A estrutura do projeto segue os princípios da Clean Architecture, separando bem as responsabilidades em camadas:

src/
├── domain/ # Entidades e regras de negócio (Enterprise Business Rules)
├── application/ # Casos de uso (Application Business Rules)
├── infrastructure/ # Banco de dados, serviços externos, etc.

```
## ⚙️ Tecnologias Utilizadas

- **Node.js** – Plataforma de execução JavaScript
- **TypeScript** – Tipagem estática para JS
- **PostgreSQL** – Banco de dados relacional
- **pg-promise** – Acesso ao banco de dados PostgreSQL
- **Jest** – Testes automatizados
- **ts-jest** – Integração do Jest com TypeScript

---

## 🧪 Testes

Os testes estão implementados com o **Jest** e cobrem os principais casos de uso da aplicação. Para rodar os testes:

```bash
npm test
```


---

## ⚙️ Tecnologias Utilizadas

- **Node.js** – Plataforma de execução JavaScript
- **TypeScript** – Tipagem estática para JS
- **PostgreSQL** – Banco de dados relacional
- **pg-promise** – Acesso ao banco de dados PostgreSQL
- **Jest** – Testes automatizados
- **ts-jest** – Integração do Jest com TypeScript

---

## 🧪 Testes

Os testes estão implementados com o **Jest** e cobrem os principais casos de uso da aplicação. Para rodar os testes:

```bash npm test```

```psql -U postgres -d nome_do_banco -f create.sql```

✍️ Autor
Projeto de estudo desenvolvido por Lucas Gabryel como parte do aprendizado de arquitetura de software.