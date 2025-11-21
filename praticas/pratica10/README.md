# API Pratica 10

API RESTful criada para a prática 10 do professor.

## Rotas

### Listar usuários
GET /usuarios

### Buscar por ID
GET /usuarios/:id

### Criar usuário
POST /usuarios  
Body:
{
  "nome": "Maria",
  "email": "maria@gmail.com",
  "idade": 20
}

### Atualizar usuário
PUT /usuarios/:id

### Deletar usuário
DELETE /usuarios/:id
