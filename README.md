# BlitzGuard - Reset Password

Aplicação React moderna para reset de senha com Vite, TypeScript e componentes reutilizáveis.

## 🚀 Características

- ✅ React 18 com TypeScript
- ✅ Vite como bundler (build rápido)
- ✅ React Router para navegação
- ✅ Componentes UI customizados (Button, Input, Label)
- ✅ Lucide icons integrados
- ✅ Validação de senhas
- ✅ Layout responsivo e moderno
- ✅ Mock API client para desenvolvimento

## 📦 Instalação

### Requisitos
- Node.js >= 16
- npm ou yarn

### Passos

1. Instalar dependências:
```bash
npm install
```

2. Rodar servidor de desenvolvimento:
```bash
npm run dev
```

3. Build para produção:
```bash
npm run build
```

4. Preview da build de produção:
```bash
npm run preview
```

## 🎯 Como Usar

### Acessar a página de reset

A aplicação estará disponível em `http://localhost:5173`

Para testar com token: `http://localhost:5173/reset-password?token=seu_token_aqui`

### Estrutura de Arquivos

```
├── src/
│   ├── api/
│   │   └── base44Client.ts        # Cliente API mock
│   ├── components/
│   │   ├── AuthLayout.tsx          # Layout reutilizável para auth
│   │   └── ui/
│   │       ├── button.tsx          # Componente Button
│   │       ├── input.tsx           # Componente Input
│   │       └── label.tsx           # Componente Label
│   ├── pages/
│   │   └── ResetPassword.tsx       # Página de reset de senha
│   ├── App.tsx                     # Componente raiz
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Estilos globais
├── index.html                      # HTML template
├── package.json                    # Dependências
├── tsconfig.json                   # Configuração TypeScript
├── vite.config.ts                  # Configuração Vite
└── README.md                       # Este arquivo
```

## 🔗 Rotas

- `/` - Redireciona para reset-password com token demo
- `/reset-password?token=TOKEN` - Página de reset de senha

## 🎨 Componentes Principais

### ResetPassword
Página de reset de senha com:
- Validação de token
- Confirmação de senha
- Estados de carregamento
- Tratamento de erros
- Link para solicitar novo email

### AuthLayout
Layout reutilizável que inclui:
- Ícone customizável
- Título e subtítulo
- Footer opcional
- Estilos modernos e responsivos

## 🔧 Personalização

### Conectar API Real

Edite `src/api/base44Client.ts` para conectar com sua API

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento com HMR
- `npm run build` - Build para produção (otimizado)
- `npm run preview` - Preview da build de produção

## 🛠 Tecnologias

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **Lucide React** - Icons library

## 📄 Licença

MIT

Desenvolvido com ❤️ para BlitzGuard
