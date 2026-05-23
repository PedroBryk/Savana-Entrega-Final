# 🔐 Fluxo de Autenticação e Validação com DTOs — Savana Pet Café

## Visão Geral

Este documento descreve o fluxo de **Login e Cadastro** do sistema Savana Pet Café, cobrindo a integração entre o frontend (Next.js) e o backend (NestJS), além do uso de **DTOs (Data Transfer Objects)** para validação de dados.

---

## Fluxo de Cadastro de Usuário

### Frontend → Backend

1. O usuário acessa `/cadastro/funcionario` e preenche o formulário com **nome, CPF, email, senha e confirmação de senha**
2. O formulário é validado localmente com **Zod** antes de qualquer requisição
3. Após validação, o frontend envia uma requisição `POST /users` com os dados em JSON
4. O backend recebe os dados, valida com o `CreateUserDto` e criptografa a senha com **bcrypt**
5. O usuário é salvo no banco via **Prisma** e o frontend redireciona para `/login`

```
[Formulário] → Zod valida → POST /users → CreateUserDto valida → bcrypt hash → Prisma salva
```

---

## Fluxo de Login

### Frontend → Backend → Token JWT

1. O usuário acessa `/login` e preenche **email e senha**
2. O formulário é validado com **Zod**
3. O frontend envia `POST /auth/login` com email e password
4. O backend valida com o `LoginDto`, busca o usuário no banco e compara a senha com **bcrypt**
5. Se válido, o backend retorna um **JWT token** com validade de 1 dia
6. O frontend salva o token no `localStorage` e redireciona para `/gerenciamento`

```
[Formulário] → Zod valida → POST /auth/login → LoginDto valida → bcrypt compare → JWT gerado → localStorage
```

---

## DTOs utilizados

### `LoginDto` — `src/auth/dto/login.dto.ts`

Valida os dados de entrada do login.

| Campo      | Tipo   | Validação                        |
|------------|--------|----------------------------------|
| `email`    | string | Formato de email válido          |
| `password` | string | Mínimo de 6 caracteres           |

---

### `CreateUserDto` — `src/users/dto/create-user.dto.ts`

Valida os dados de cadastro de um novo usuário.

| Campo      | Tipo   | Validação                        |
|------------|--------|----------------------------------|
| `name`     | string | Mínimo de 3 caracteres           |
| `cpf`      | string | Entre 11 e 14 caracteres         |
| `email`    | string | Formato de email válido          |
| `password` | string | Mínimo de 6 caracteres           |

---

### `CreatePetDto` — `src/pets/dto/create-pet.dto.ts`

Valida os dados de cadastro de um pet.

| Campo         | Tipo   | Validação                        |
|---------------|--------|----------------------------------|
| `name`        | string | Mínimo de 2 caracteres           |
| `species`     | string | Obrigatório                      |
| `age`         | number | Mínimo 0                         |
| `breed`       | string | Obrigatório                      |
| `description` | string | Mínimo de 10 caracteres          |
| `image`       | string | Opcional                         |

---

### `CreateMenuDto` — `src/menu/dto/create-menu.dto.ts`

Valida os dados de cadastro de um item do cardápio.

| Campo         | Tipo   | Validação                        |
|---------------|--------|----------------------------------|
| `name`        | string | Mínimo de 2 caracteres           |
| `description` | string | Mínimo de 5 caracteres           |
| `price`       | number | Mínimo 0.01                      |
| `category`    | string | Obrigatório                      |
| `image`       | string | Opcional                         |

---

## Validação Global

O backend usa o `ValidationPipe` global do NestJS, configurado no `main.ts`:

```typescript
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
```

- `whitelist: true` — remove automaticamente campos não declarados no DTO
- `transform: true` — converte tipos automaticamente (ex: string `"2"` para number `2`)

---

## Proteção de Rotas com JWT Guard

Rotas que exigem autenticação usam o `JwtAuthGuard`:

```typescript
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
```

O guard extrai o token do header `Authorization: Bearer <token>`, verifica a assinatura e libera ou bloqueia o acesso.

Rotas protegidas: `POST /pets`, `DELETE /pets/:id`, `POST /menu`, `DELETE /menu/:id`, `DELETE /users/:id`

Rotas públicas: `GET /pets`, `GET /menu`, `GET /users`, `POST /auth/login`, `POST /users`

---

## Tecnologias utilizadas neste fluxo

- **NestJS** — framework backend
- **Prisma** — ORM para acesso ao banco SQLite
- **bcrypt** — criptografia de senhas
- **JWT (@nestjs/jwt)** — geração e validação de tokens
- **class-validator** — validação dos DTOs
- **class-transformer** — transformação de tipos nos DTOs
- **Zod** — validação de formulários no frontend
- **React Hook Form** — gerenciamento de formulários no frontend
