# O que eu aprendi.

####Aula 2

- **Scripts para usar as bibliotecas do node modules**: Aprendi que é possível fazer scripts no package.json para usar a CLI via terminal de qualquer biblioteca do node modules.

- **Migrations** : Serve para modelar uma tabela na aplicação, para ser criada automaticamente no banco de dados. 

- **Entidades** : Serve para referenciar uma tabela no banco de dados, especifincado todas as colunas exitente. Entities > MigrationORM > BD.

- **Repositorio** : Camada responsavel por fazer uma operação no banco de dados, faz uma ponte entre a entidade e o bd. (Aqui possui os metodos para consultar, salva etc)

- **Implementes vs Extends** : Implementes é usado quando eu quero manipuar um metodo de uma class, o Extends é só para extender os métodos, sendo possivel usá-los. 

- **Services / Use case (UC)** : Responsavel por fazer validação e verificação antes de responder a solicitação do cliente ou ser enviada para o banco de dados. (Armazena as regras de negocio).

  - **Responsabilidade no services**: Não é bom ser criado um services para conter todas responsabilidade da aplicação, o correto é separar as classes com cada funcionalidade. 
  Ex: 
      - Criação de usuario: Crie uma classe que armazene tudo referente a criação de usuario.
 (Obs: Toda classe dever existir por um motivo).

 - **Controller**: O controle serve para controlar os pedidos do cliente e devolver uma resposta para ele (Routes).

    - O caminho em um app é primeiro pelo : Server > Controller > Services .....

- **Express tipo de requisições** : Aprendi que o express trabalha com varios tipos de dados ao receber requisições, para enviar requição via json sem dar "Cannot read propery", Temos que inserir o express.json() no middleware App.use().