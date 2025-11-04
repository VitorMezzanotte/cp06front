# 🚗 Loja de Carros — CP6 Front-End & Back-End  
### Projeto desenvolvido por **Vitor Mezzanotte Constante**

---

## 📘 Sobre o Projeto

Este projeto foi desenvolvido para a **CP6 da disciplina de Front-End** do curso de **Engenharia de Software**, simulando o site de uma **Loja de Carros**.  
O sistema permite o **cadastro, edição, listagem e exclusão de veículos** através de uma interface moderna, além de conter páginas institucionais e um fluxo simples de **login e contato**.

O objetivo é demonstrar o uso prático das tecnologias estudadas em aula, unindo o **Front-End (React + Tailwind)** com um **Back-End (Node.js + Express)** simples e funcional.

---

## 🧱 Estrutura do Projeto
📁 loja-carros
├── frontend/ → Aplicação React (interface do usuário)
│ ├── src/
│ │ ├── components/ → Páginas e componentes
│ │ ├── App.jsx → Configuração principal de rotas
│ │ └── index.css → Estilização global (Tailwind)
│ └── package.json
│
└── backend/ → Servidor Node.js com Express
├── routes/ → Rotas da API (produtos, login, contato)
├── server.js → Arquivo principal do servidor
└── package.json
---

## 🚀 Funcionalidades

### 🔹 Front-End
- Interface moderna com **React + Tailwind CSS**  
- **Páginas:** Home, Portfólio, Produtos, Sobre, Contato e Login  
- Design **responsivo e padronizado** em todas as rotas  
- Cards com imagens, efeitos de hover e layout profissional  
- Footer fixo no final da página e header estilizado

### 🔹 Back-End
- Desenvolvido em **Node.js com Express**  
- Rotas da API:  
  - `GET /api/produtos` → lista de produtos  
  - `POST /api/produtos` → adiciona novo produto  
  - `PUT /api/produtos/:id` → edita produto existente  
  - `DELETE /api/produtos/:id` → remove produto  
  - `POST /api/login` → simula login  
  - `POST /api/contato` → simula envio de mensagem  
- Armazenamento **em memória** (sem banco de dados)  
- Uso de **CORS** e **JSON** no padrão REST  

---

## 🛠️ Tecnologias Utilizadas

### 🖥️ Front-End
- [React.js](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  

### ⚙️ Back-End
- [Node.js](https://nodejs.org/en)  
- [Express.js](https://expressjs.com/)  
- [Cors](https://www.npmjs.com/package/cors)  
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## ⚙️ Como Executar o Projeto

### 📍 Clonar o repositório
```bash
git clone https://github.com/VitorMezzanotte/cp06front
cd loja-carros

▶️ Executar o Backend
cd backend
npm install
npm run dev


O servidor iniciará em http://127.0.0.1:3333

💻 Executar o Frontend

Em outro terminal:

cd frontend
npm install
npm run dev


Abra o navegador e acesse o link exibido (geralmente http://localhost:5173)

📸 Demonstração Visual
Página	Descrição
🏠 Home	Apresenta os destaques e opções de financiamento
🚘 Portfólio	Mostra os veículos disponíveis com imagens e preços
🧾 Produtos	Permite cadastrar, editar e excluir carros
ℹ️ Sobre	Descreve informações da empresa
✉️ Contato	Simula envio de mensagem
🔐 Login	Simulação de autenticação simples

🧑‍💻 Autor
Vitor Mezzanotte Constante
📚 Estudante de Engenharia de Software
💼 GitHub: https://github.com/VitorMezzanotte 

🏁 Conclusão

O projeto Loja de Carros demonstra a integração entre Front-End e Back-End de forma clara, organizada e funcional.
Com foco em boas práticas, responsividade e design limpo, o sistema representa uma aplicação completa, pronta para futuras expansões e integrações.