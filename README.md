# carppify-backend

Back-end API RestFul to shippify challenge

## Specifications

- Backend Framework: NodeJs v12.22.12
- Server Framework: Express
- DB engine: MySQL
- ORM: Sequelize

## SetUp

### Install dependencies

```cmd
npm install
```

### Configuration to Data Base connection

Create a ".env" file in the project root with the following content and put the Data Base credentials in each environment.

```cmd
#Environment.
NODE_ENV=development
PORT=3001

#Development
DEV_DB_USERNAME=
DEV_DB_PASSWORD=
DEV_DATABASE=
DEV_DB_HOST=
DEV_DB_PORT=

#Production
PROD_DB_USERNAME=
PROD_DB_PASSWORD=
PROD_DATABASE=
PROD_DB_HOST=
PROD_DB_PORT=
```

## Run server

### Production

```cmd
npm start
```

### Development

```cmd
npm run start:dev
```
