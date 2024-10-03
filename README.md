# FormularioExpress



# Projeto de Validação de Formulário com Express

Atividade para a matéria de Programação Web: Validando Dados No Backend

Este projeto é uma aplicação de exemplo usando **Express** que valida um formulário de pré-matrícula. Ele inclui validação de DDDs e e-mails utilizando constantes separadas em um arquivo `constants.js`.

## Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Instale o **nodemon** globalmente para facilitar o desenvolvimento. O `nodemon` reinicia automaticamente o servidor quando houver mudanças nos arquivos:

   ```bash
   npm install -g nodemon
   ```

## Como rodar o projeto

Para iniciar o servidor com o `nodemon`, use o seguinte comando:

```bash
npm start
```

O `nodemon` vai monitorar as alterações no código e reiniciar o servidor automaticamente sempre que você salvar as mudanças.


## Estrutura do Projeto

- `app.js`: Arquivo principal que inicia o servidor Express.
- `routes/`: Contém as rotas do Express.
- `views/`: Contém as views EJS.
- `utils/constants.js`: Contém as constantes de DDDs e regex para validação de e-mail.
