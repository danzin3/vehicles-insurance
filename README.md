### About the project

This is a REST api make it for a nonexistent insurance company.
The main target of this project is to show an express architecture and
skills that can be used like reference for a commercial API project, using
node js with typescript and express framework.

### Project Layers and Flow

After a client request, theses layers are executed in order:

1. Routes --> Define the endpoints organization flow;
2. Controllers --> Define the main handling of the project;
3. Services --> Used to make the business rule of the project;
4. Repositories --> Used to manager the entities of the project with the database;

### Folder Structure (in short)

configs --> It is a folder that have the project and frameworks configurations like express and environments variables.

constants --> Contains the constants and builders messages of the project.

database --> Contains the main files to generate an manager the application communication with the database project like entity (models), migration, seeds and others.

DTOs --> This folder contains the data transfer objects of the project. It is a very important way to define the objects that will carry on data from the client request until the database.

helpers --> Contains some functions that helps the business rule layer with their demands.

utils --> Contains some functions that helps the project at all.

### Installation Steps and Usage

1. Install the project dependencies with the command:

```
$ npm install
```

or

```
$ yarn
```

2. Create the .env file in the root of the project as the follow exemple:

```
# Application environments
NODE_ENV=
APP_BASE_URL=
APP_PORT=
APP_PREFIX=api/v1

# CORS environments
URL_CLIENTS_ACCEPTED=http://client-base-url http://other-client-base-url
CORS_METHODS=GET HEAD PUT PATCH POST DELETE
CORS_CREDENTIALS=true

# Database environments
DB_HOST=
DB_PORT=
DB_USER_NAME=
DB_PASSWORD=
DB_SCHEMA=
DATABASE_NAME=
DATABASE_TESTING=

```

Note: The NODE_ENV, CORS environments and DB_SCHEMA is optional.

3. Create the Database Project (Using postgres). To create a database and run the migrations, make sure to access the postgre server as a 'postgres' user or an user that have permission to create database and tables. For while, the create database command does work only in postgre server database.

```
$ npm run create:database dev
```

or

```
$ yarn create:database dev
```

4. Execute the Project Migrations

```
$ npm run migrations:run
```

or

```
$ yarn migrations:run
```

5. Execute the Project Seeds

```
$ npm run seeds
```

or

```
$ yarn seeds
```

6. Start the project

```
$ npm run dev
```

or

```
$ yarn dev
```

### Integration Tests

\*) Obs: Before run the tests, make sure to access the postgre server as a 'postgres' user or an user that have permission to create database and tables.

\*) Important: For windows operating systems, the tests will not works, it is necessary adapt the script/test.sh file instructions for the specific way ( cmd or powerShell ).

Run the comand:

```
$ npm run test:e2e
```

or

```
$ yarn test:e2e
```

### Swagger Endpoints Documentation

\*) After running the project, access the url: http://localhost:3000/docs

### Auxiliary Tools

https://www.geradordecpf.org/ --> To get valid cpf for tests of creation client endpoint.

https://bcrypt-generator.com/ --> Create and compare Hash of string values.

### Creation Tools

Creating Migrations

```
$ npm run typeorm migration:create src/database/migrations/MigrationName
```

or

```
$ yarn typeorm migration:create src/database/migrations/MigrationName
```
