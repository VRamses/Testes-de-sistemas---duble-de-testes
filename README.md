# Mini projeto

## Objetivo

Demonstrar na prática a utilização de dublês de teste.

## Contextualização

A empresa **IFlórida Desenvolvimento de Soluções S/A** está desenvolvendo um sistema de gestão de vendas.
Uma parte da aplicação consiste em inscrever usuários em uma *mailing list* a fim de manter uma base fiel de usuários, enviando notícias diversas sobre a área de vendas.

A rotina deve salvar o usuário em uma base de dados e enviar um e-mail de boas-vindas para o usuário.

Contudo, apesar da rotina estar implementada, a empresa ainda não definiu qual tecnologia de banco de dados ou qual serviço de envio de e-mail será utilizado.

Ou seja, independente das soluções adotadas pela empresa, a rotina deve atender aos seguintes requisitos:

- Caso já exista um usuário com o e-mail informado, um erro deve ser lançado
- Caso não seja possível salvar o usuário na base de dados, um erro deve ser lançado
- Caso a notificação por e-mail não tenha sido enviada, um erro deve ser lançado

Na *suíte* de testes, será necessário alterar o comportamento das classes *UserRepository* e *EmailNotificationService*, sem alterar o código-fonte contido na pasta *src* a fim de viabilizar os casos de teste.

Dito isto, os estudantes da turma **74590** de testes de sistemas foram contactados pela empresa para atuarem como analistas QA, garantindo a lógica de negócio e a criação de testes automatizados dessa rotina.

Cada estudante deverá entregar o projeto com sua *suíte* de testes da classe *RegisterUserOnMailingList* que garanta os requisitos da aplicação, passando o link do repositório no github através da atividade no google classroom.

## Passos para executar os testes na aplicação

1. Instalar o NodeJS (<https://nodejs.org/>)
2. Instale as dependências executando o comando `npm install`
3. Execute os testes com o comando `npm run test`

Bom estudo a todos!
