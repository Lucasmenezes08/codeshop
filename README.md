# 📚 CodeShop



## 🛒 Sobre o Projeto

CodeShop é um mini-projeto de e-commerce focado na venda de e-books sobre linguagens de programação. Ele foi desenvolvido como uma plataforma para aplicar e solidificar conhecimentos em desenvolvimento front-end com React.

---

## ✨ Funcionalidades

-   ✅ **Filtro por Tópicos:** Navegue por categorias como Front-end, Back-end, e Mobile.
-   ✅ **Visualização de Produtos:** Liste todos os e-books disponíveis com suas informações.
-   ✅ **Carrinho de Compras:** Adicione, remova e visualize os itens selecionados.
-   ⏳**Busca de Linguagem:** Encontre e-books de tecnologias específicas. (Funcionalidade em desenvolvimento)
-   ⏳ **Filtro por Preços:** Filtrar produtos listados por faixa de valores. (Funcionalidade em desenvolvimento)
-   ⏳ **Dark theme:** Alterar visual da interface para tema escuro. (Funcionalidade em desenvolvimento)

---

## 🎯 Objetivo do Projeto

O objetivo principal é colocar em prática conhecimentos recém-adquiridos durante estudos acerca da biblioteca React. Cada funcionalidade possui um determinado fator de aplicação ao aprendizado.

Nesse aspecto:

1.  **Carrinho de Compras**: Feature implementada com o objetivo de treinar conceitos abrangentes de hooks recorrentes, principalmente o `useContext` para administração de estado global. O `useReducer` também se fez bastante presente nessa feature, no qual foi necessário administrar estados complexos. Também pude aplicar a criação de uma janela modal por meio do recurso `Portal` do React.

2.  **Filtragem por Tópicos**: Pude experienciar a administração de um estado global pelo `useContext` e consumo da Context API, além de treinar ainda mais métodos de arrays importantes para lógica de programação como um todo (`Map`, `filter`, `includes` e `find`).

3.  **Listagem de Produtos Disponíveis**: Essencial para os meus primeiros passos quanto à manipulação de alterações de estados e re-renderizações com `useState` e seleção de renderização de listas com o método `map`.

---

## 🚀 Tecnologias Utilizadas

<p align="left">
  <a href="https://react.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  </a>
  <a href="https://mui.com/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI"/>
  </a>
</p>

---

## 🏗️ Estrutura de Componentes

A imagem abaixo ilustra a arquitetura de componentes do projeto, mostrando o fluxo de dados (props) e o relacionamento entre eles.

![Estrutura de Componentes](./codeshop/src/assets/arvore_componentes_codeshop.excalidraw)

---

## 💡 Próximos Passos

Como próximos passos, tenho o objetivo de:

-   [ ] Finalizar a feature `DarkTheme`.
-   [ ] Implementar persistência de dados no `localStorage`.
-   [ ] Finalizar a feature `Search`.
-   [ ] Implementar a filtragem por faixa de preços.

---

## 🔧 Instruções de Instalação

Para rodar este projeto localmente, siga os passos abaixo:


1.  Abra a IDE ou editor de código a sua escolha e crie a pasta Codeshop (Ou qualquer nome a sua escolha)
   

2.  Abra o terminal (CMD, PowerShell, ou o terminal integrado da sua IDE) e clone o repositório:
    ```bash
    git clone https://github.com/Lucasmenezes08/codeshop
    ```

3.  digite o comando para abrir a pasta do projeto:
    ```bash
    cd codeshop
    ```

4.  novamente digite o comando para abrir a pasta do projeto:
    ```bash
    cd codeshop
    ```


5.  Instale todas as dependências necessárias:
    ```bash
    npm install
    ```

6.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

Após executar esses comandos, o projeto estará disponível em `http://localhost:5173