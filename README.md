# TODO-APP

WIP of a simple todo app project, written in Typescript using React, Express and Sqlite3.
The backend implementaation is mostly complete, the frontend part is still under development.
Test cases for the backend were implemented, but I still have to finish the test environment
configuration so that the in memory version of the database runs correctly.

## Instructions

### To run the project, first install the dependencies listed in the package.json files:

```
pnpm install
cd client && pnpm install
cd ../server && pnpm install
```

### To run the client in development mode:

From the project root folder:

```
npm run client
```

After this, access the website through http://localhost:5173.

### To run the server in development mode:

From the project root folder:

```
npm run server
```

After this, you will be able to access the backend at http://localhost:3000.
