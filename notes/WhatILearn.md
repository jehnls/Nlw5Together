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


---------------------

####Aula 3

- **Server > Routes > Controller > Services ....**

- **Tratativa de erros**: Ao inves de tratar os erros mandado para controller do service, usando try catch no bloco todo, podemos, no futuro quando o códgico ficar grande acabar esquecendo de algum try catch. Então a melhor maneira para fazer tratativa de erro é usando um middleware no server.

- **Middleware**: É usado quando quer interceptar algo, antes de dar prosseguimento a outro.

- **Express requição async**: O express não tem suporte para tratar error como async, por isso quando tentamos tratar o erro via um middleware, não consegue exibir os erros, só ficando no console. Solução é install uma biblioteca que vai lidar com esses erro : express-async-errors.

- **Middleware como routas**: Aprendi que é possivel usar o middleware em varios lugar exemplo na route, podemos usalo passando no método "USE" do express, fazendo com que ele execute em todas rotas abaixo dele. Obs: Caso queira que o middleware passe por uma rota especifica, basta passa-lo como parametro da função.


-------------------

####Aula 4 

- **Migration add column** : Aprendi que é usado o migration para acresentar uma coluna em uma table no banco de dados sem precisar deletar o banco todo com as coisas já prenchida, para fazer isso devemos, crir uma nova migration com a alteração assim como a migration para criar tabela no banco de dados.

- **bcryptjs** : Usada para encriptografar senha para o banco de dados.

- **Promise<t>** : Aprendi que quando o retorno de uma função é uma promise, sempre devemos colocar o await onde iremos armazena o retorno.

- **Uso do repositorio** : Aprendi que para usarmos algum repositorio, temos que usar o getCustomRepository do typeorm e passa como paramentro o nosso repositorie.

- **Gerar chave com segurança** Aprendi que e possivel geral uma chave incriptografada pesquidandoa algum site no google como MD5 Generator, e escrever um texto, para usar como chave.
Ex: Chave do sign do jsonWebToken.

- **Cenario de expiração de token** Aprendi que um dos modo de usar a expiração do tokem é que de 15 em 15 minutos ele expira e com o toen antigo a aplicação gera outro token, sem precisar o usuario fazer a autenticação colocando email e senha novamente. Obs: TENHO QUE APRENDER AINDA ESSA MANEIRA DE USO DO JWT. 

- **Foreign no typerom**: Para fazer uma chave estrageira no typerom precisamos para para o metodo foreignKeys, com os paramentos de: nome da chave, node da table que essa chave vai referenciar, nome da coluna da tabela, nome da FK que esta no local, uma ação caso o delete da tabela, e uma ação caso o update:  

- **Foreign na entidae** : É necessario referncia a Fk na entidade, mais é mais facil, basta estaciar a tabela toda (Entidade) que sera usado pela Fk usando, a anotação do typeorm @joinColoumn({name: "nome da chave Fk local" }). 

- **Relação onetoone/ manytoone ...** : Quando nós usamos a o joincolumn, devemos tambem passa para entidade o tipo de relação com a outra tabela estrangeira, com a anotação do typeorm @ManyToOne or @OneTOOne e outras conforme o projeto.

- **.Split do javascript** : Serve para separa um string conforme um caracter desejado que contêm no objeto. O retorno desse método é um array, e é possivel fazer uma desestruturação, ignorando o que você não precisa com uma virgula, e armazenando o que deseje em uma variavel. Ex: 
const name = "Maria do Bairro"; 
const {, , ultimoNome} = name.split(" "); // ultimoNome === Bairro.

- **Verificar um token valido (Verify) jwt**: Para verificar se um token é valido temos que usar o verify do JWT, passando como parametro o token e a nossa chave secreta.


- **Incluir variaveis dentro uma biblioteca** Aprendi que é possivel inserir variaveis dentro de uma biblioteca existente, Exemplo a express, basta criar uma pasta com o nome @types/nomeBiblioteca/index.d.ts. para fazer isso tem que habilitar uma opção do tsconfig (typeRoot["passa o local da nossa pasta @types"]).

- **Buscar por todos tabelas relacinadas no bd** Aprendi que é possivel buscar todos os objetos completos, que esta sendo representado por uma chave estrageira na tabela, mais temos que tomar cuidado ao usar isso, porque se tiver muitos dados nossa pesquisa pode ser muito demora.
Para usar é : Quando for fazer uma busca no repositorio, usando o .find({where: "", relations:("nome do objeto que representa a chave", "nome do objeto que representa a chave")}) // retorna dos objetos selecinados no relations.

- **Customizar nomes que vem do bd** Aprendi que é possivel customizar nomes que vem do bando de dados usando a biblioteca class-trasforme. Exemplo: colocar um # na frente de uma teg e etc.

- **Não mostra coluna em uma consulta no banco de dados** Aprendi que é possivel não mostra um a coluna usando o class-trasforme, usando a anotação @Exclude.