## Installation

Primeiro copie o repositorio para sua maquina

```bash
git clone git@github.com:andreyoli/API-Medico.git
```

Agora vamos criar um container com docker run para conter o banco de dados.

Mas antes vamos baixar a imagem do mysql

```bash
docker pull mysql
```

Agora vamos de fato criar o container.

```bash
docker run --name mysql_medic -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=password" -d mysql
```

Feito isso, vamos instalar as dependências do projeto

```bash
npm install
```

Agora vamos executar o sequelize

```bash
npx sequelize db:create
```

Em seguida vamos criar as tabelas

```bash
npx sequelize db:migrate
```

Por fim, vamos iniciar o projeto 😄

```bash
npm start
```

Para começar a usar é necessario registar no banco de dados as especialidades. Para isso vamos usar a rota /specialty_register.

Tipo: post

Parametros necessarios

```json
{
  "name": ""
}
```

## Rotas

### Cadastro do médico

/doctor_register \
Tipo: post

Parametros necessarios

```json
{
  "name": "",
  "crm": "",
  "phone": "",
  "state": "",
  "city": "",
  "specialties": ["", ""]
}
```

### Deletar médico

/doctor_delete \
Tipo: post

Parametros necessarios

```json
{
  "doctor_id": "17"
}
```

### Listar médicos

/doctor_index \
Tipo: get

### Atualizar médico

/doctor_delete \
Tipo: post

Parametros necessarios

```json
{
  "crm": "123456",
  "name": "abelhas",
  "phone": "13996101665",
  "state": "salvado",
  "city": "salvado",
  "newSpecialty": ["papa", "papasda", "rock"]
}
```

### Deletar médico

/doctor_delete \
Tipo: post

Parametros necessarios

```json
{
  "doctor_id": "17"
}
```

### Cadastro das especialidades

/specialty_register \
Tipo: post

Parametros necessarios

```json
{
  "name": ""
}
```

### Listar especialidades

/specialty_index \
Tipo: get
