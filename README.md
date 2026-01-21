# Backend Tasks API

API REST simples para gerenciamento de tarefas (To-Do), desenvolvida em **Node.js + Express**, com foco em **boas práticas de backend**, organização em camadas e padronização de respostas.

> Projeto criado como parte do meu desenvolvimento profissional como **Desenvolvedor Backend Júnior**.

---

## Tecnologias Utilizadas

* Node.js
* Express
* JavaScript (CommonJS)
* Git & GitHub

---

## Estrutura do Projeto

```
src/
├── app.js                # Configuração principal da aplicação
├── routes/               # Definição das rotas
│   └── tasks.js
├── controllers/          # Camada de controle (HTTP)
│   └── taskController.js
├── services/             # Regras de negócio
│   └── taskService.js
├── middlewares/          # Validações e tratamento de erros
│   ├── validateCreateTask.js
│   ├── validateTaskUpdate.js
│   ├── validateTaskId.js
│   └── errorHandler.js
├── data/                 # Persistência local
│   └── tasks.json
```

---

## Padrão de Resposta da API

### ✅ Sucesso

```json
{
  "success": true,
  "data": {}
}
```

### ❌ Erro

```json
{
  "success": false,
  "error": "Mensagem de erro"
}
```

---

## Endpoints

### Listar tarefas

**GET** `/api/v1/tasks`

---

### Criar tarefa

**POST** `/api/v1/tasks`

```json
{
  "title": "Estudar Node.js"
}
```

---

### Atualizar tarefa

**PUT** `/api/v1/tasks/:id`

```json
{
  "title": "Estudar Express",
  "done": true
}
```

---

### Deletar tarefa

**DELETE** `/api/v1/tasks/:id`

---

## Como Rodar o Projeto

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar na pasta
cd BACKEND_JR

# Instalar dependências
npm install

# Rodar o servidor
node src/app.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

## Testes

Os endpoints podem ser testados utilizando:

* Thunder Client (VS Code)
* Postman
* Insomnia

---

## Conceitos Aplicados

* Arquitetura em camadas (Routes → Controllers → Services)
* Middlewares reutilizáveis
* Tratamento centralizado de erros
* Versionamento de API
* Validação de dados
* Persistência simples em JSON

---

## Autor

**Gabriel**
Estudante de Engenharia de Software e Desenvolvedor Backend em formação.

---

## Objetivo do Projeto

Este projeto tem como objetivo consolidar fundamentos de backend e servir como **portfólio prático** para oportunidades como **Desenvolvedor Backend Júnior**.
