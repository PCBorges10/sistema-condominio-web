# Sistema Condominial - Frontend

Interface web do Sistema de Gestão Condominial, desenvolvida em Next.js e integrada à API REST construída com Fastify.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS

## Funcionalidades

O sistema possui interface para gerenciamento de:

### Condomínios

- Listagem de condomínios
- Cadastro de novos condomínios
- Edição de condomínios
- Exclusão de condomínios

### Unidades

- Listagem de unidades
- Cadastro de novas unidades
- Edição de unidades
- Exclusão de unidades

### Moradores

- Listagem de moradores
- Cadastro de novos moradores
- Edição de moradores
- Exclusão de moradores

## Integração com o Backend

O frontend utiliza a API Fastify disponível em:

```text
http://127.0.0.1:3000
```

O frontend é executado em:

```text
http://localhost:3001
```

## Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/PCBorges10/sistema-condominio-web.git
```

### 2. Entrar na pasta

```bash
cd sistema-condominio-web
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o frontend

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3001
```

## Backend

Para o funcionamento completo do sistema, a API também precisa estar em execução.

Repositório:

```text
https://github.com/PCBorges10/sistema-condominio-api
```

A API deve estar disponível em:

```text
http://127.0.0.1:3000
```

## Estrutura principal

```text
sistema-condominio-web/
├── app/
│   ├── condominios/
│   ├── unidades/
│   ├── moradores/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BackButton.tsx
│   ├── DeleteCondominioButton.tsx
│   ├── DeleteUnidadeButton.tsx
│   └── DeleteMoradorButton.tsx
├── public/
├── package.json
└── README.md
```

## Arquitetura

```text
Navegador
    ↓
Next.js - Porta 3001
    ↓
Fastify API - Porta 3000
    ↓
MySQL - Porta 3306
```