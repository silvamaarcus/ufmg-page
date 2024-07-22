# UFMG Page

Este projeto é uma página dedicada a eventos da UFMG, desenvolvida em ReactJS utilizando Vite. A plataforma permite que os usuários pesquisem eventos com base em uma data fornecida, oferecendo informações detalhadas, como dia, horário e conteúdo do evento. Além disso, a página inclui um componente de "accordion" para perguntas frequentes e um formulário de contato com validação, proporcionando uma experiência interativa e responsiva em qualquer dispositivo. 

## Tecnologias Utilizadas

- **ReactJS**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Um build tool que proporciona um ambiente de desenvolvimento rápido.
- **SASS**: Um pré-processador CSS que permite o uso de variáveis, aninhamento, responsividade e muito mais.
- **JSON**: Um banco de dados (API) foi criado localmente para simular requisições.

## Funcionalidades

- Pesquisar eventos.
- Obter dados por uma API interna.
- Accordion (efeito sanfona) para perguntas frequentes.
- Validação de formulário.
- Estilização modular e avançada com SASS.

## Dependências Utilizadas

- **react-accessible-accordion**: Uma biblioteca que ajuda a criar accordions acessíveis no React.
- **react-datepicker**: Uma biblioteca para construir input de Datas interativos.
- **date-fns**: Uma biblioteca que busca o fuso horário e idioma local, para aplicar ao calendário.
- **react-hook-form**: Uma biblioteca para validação de formulários.

## Pré-requisitos

Certifique-se de ter instalado o Node.js e o npm (ou yarn) em seu ambiente.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/silvamaarcus/ufmg-page.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd gerador-de-perfis
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Instale outras dependências:

   ```bash
   npm install react-accessible-accordion react-datepicker date-fns react-hook-form
   ```

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

2. Abra o navegador e acesse:

   ```
   http://localhost:5173
   ```

## Sobre o SASS

SASS (Syntactically Awesome Stylesheets) é um pré-processador CSS que permite o uso de funcionalidades como variáveis, aninhamento de regras, mixins e herança, facilitando a escrita e a manutenção de folhas de estilo CSS.

No projeto, o SASS foi utilizado para modularizar e organizar os estilos, tornando o código mais limpo e fácil de manter.

## Sobre as depêndencias 

#### 1. **react-accessible-accordion:**

Uma biblioteca que ajuda a criar accordions acessíveis no React. Accordions são componentes de interface que expandem e recolhem conteúdo, permitindo que os usuários visualizem informações de forma mais organizada. Garante que os accordions sejam acessíveis para todos os usuários, incluindo aqueles que usam tecnologias assistivas, como leitores de tela.

#### 2. **react-datepicker:**

Uma biblioteca para criar seletores de datas interativos no React. Ela fornece um componente de calendário que permite aos usuários selecionar datas de forma intuitiva. Oferece uma interface amigável para a escolha de datas, com suporte para seleção de datas passadas e futuras, além de customizações para o formato e estilo do calendário.

#### 3. **date-fns:**

Uma biblioteca para manipulação de datas em JavaScript. Ela fornece funções para trabalhar com datas e horários, como formatação, comparação e cálculo de diferenças. Permite lidar com fusos horários e localizações específicas, facilitando a formatação e a manipulação de datas com base no idioma e nas preferências regionais.

#### 4. **react-hook-form:**

Uma biblioteca para gerenciar e validar formulários no React. Ela simplifica a criação e validação de formulários, reduzindo a quantidade de código necessário para lidar com estados e validações. Oferece uma API simples para registro de campos de formulário e validação, além de integração com outras bibliotecas de validação. Ajuda a reduzir o número de renders e melhora o desempenho dos formulários.

## Imagens

### ~> Desktop 💻

<img src="https://github.com/user-attachments/assets/3d0b9a07-f431-494e-963d-b749356ec91b" width = "600px"/>

### ~> Mobile 📱
<img src="https://github.com/user-attachments/assets/2d6d2ae3-bc8c-44a8-8d2e-81e205654b13" width = "200px"/>

## Fonte
- Deploy: [UFMG Page](https://ufmg-page.vercel.app/)

## Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request com suas alterações.

## Licença

Este projeto foi desenvolvido por [Marcus Silva](https://github.com/silvamaarcus/).
