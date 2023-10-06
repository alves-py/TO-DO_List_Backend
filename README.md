# Projeto - ToDo List

Este é o README para o projeto ToDo List, uma aplicação web para gerenciamento de tarefas pessoais. Com este projeto, os usuários podem se cadastrar, realizar login, criar e gerenciar tags e tarefas, visualizar e filtrar tags e tarefas por ID, e também excluir tags e tarefas. A documentação detalhada do projeto estará disponível em breve.

## Configuração das Variáveis de Ambiente

Antes de iniciar o projeto, você precisará criar um arquivo .env na raiz do projeto e preenchê-lo com as seguintes credenciais e configurações:

```env
# Configuração do servidor
PORT=3000

# Configuração do Banco de Dados
DB_USER=seu_usuario_db
DB_HOST=seu_host_db
DB_NAME=seu_nome_db
DB_PASS=sua_senha_db
DB_PORT=5432

# Configuração do JWT (JSON Web Tokens)
JWT_PASS=sua_senha_jwt

# Configuração do Email (para notificações)
EMAIL_HOST=seu_host_de_email
EMAIL_PORT=sua_porta_de_email
EMAIL_USER=seu_usuario_de_email
EMAIL_PASS=sua_senha_de_email

# Configuração do Nome e Endereço de Email Remetente
EMAIL_NAME=Seu Nome
EMAIL_FROM=seu_email@exemplo.com
```

Certifique-se de preencher as informações acima com suas próprias credenciais e configurações.

## Como iniciar o projeto


Siga os passos abaixo para iniciar o projeto:

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/alves-py/TO-DO_List_Backend.git
   ```
2. Instale as dependências necessárias com o comando:
    
    ```bash
    cd TO-DO_List_Backend
    ```
3. Instale as dependências necessárias com o comando:

   ```bash
   npm install
   ```
## Como Executar o Projeto
    
Após ter clonado o repositório, configurado as variáveis de ambiente e instalado as dependências, você pode iniciar o projeto com o seguinte comando:

 ```bash
npm run start
```
Este comando irá iniciar o servidor de desenvolvimento e você poderá acessar a aplicação em [http://localhost:3000](http://localhost:3000) em seu navegador.

## Funcionalidades do Projeto

O projeto ToDo List oferece as seguintes funcionalidades:

- Cadastro de Usuários: Os usuários podem se cadastrar na aplicação fornecendo informações básicas.

- Login de Usuários: Usuários registrados podem fazer login para acessar sua conta.

- Gerenciamento de Tags e Tarefas: Os usuários podem criar, editar e excluir tags e tarefas.

- Visualização e Filtragem: Os usuários podem visualizar tags e tarefas e também filtrar por ID.

- Exclusão de Tags e Tarefas: Os usuários têm a opção de excluir tags e tarefas quando necessário.

## Documentação

A documentação detalhada do projeto estará disponível em breve. Ela conterá informações adicionais sobre as APIs, endpoints e como usar todas as funcionalidades da aplicação.

Mantenha-se atento para atualizações na documentação.

Divirta-se usando o projeto ToDo List e gerenciando suas tarefas pessoais! Se você tiver alguma dúvida ou precisar de assistência, sinta-se à vontade para entrar em contato comigo.