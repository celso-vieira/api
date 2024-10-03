Um dos jeitos de fazer metodo get

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send(`
        Mensagem ID: ${id}.
        Para o usuário ${user}.
    `)
})



tipos de funções no controller

class UsersController {

- index - GET para listar vários registros
- show - GET para exibir um registro específico
- create - POST para criar um registro
- update - PUT para atualizar um regstro
- delete - DELETE para remover um registro

}



Banco de Dados(beekeeper)


Como manipular dados da tabela



Para trocar nome da tabela

ALTER TABLE users RENAME TO clients



Para adicionar uma coluna nova

ALTER TABLE users ADD status VARCHAR



Para renomear alguma coluna

ALTER TABLE users RENAME COOLUMN status TO active



Para deletar alguma coluna

ALTER TABLE users DROP COLUMN status

Acima se chama DDL


Alterano as infos dentro da tabela

Com aspas se não funcionar sem

INSERT INTO users (
  	name,
  	email,
  	password
)
VALUES (
	'Celso',
  	'celso@email.com',
  	'123'
)


SELECT * FROM users
SELECT id, name, email FROM users


UPDATE users 
SET avatar = 'celso.png', name = 'Celso Vieira' 
WHERE id = 1


DELETE FROM users WHERE id = 2

CUIDADO - sempre colocar o id

lembrar de selecionar a linha que voce quer rodas e lembrar do ;