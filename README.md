# TODO-APP

This is a simple todo app project, written in Typescript using React, Express and Sqlite3.
Test cases for the backend were implemented, but I still have to finish the test environment
configuration so that the in memory version of the database runs correctly.

A few decisions had to be made in the development phase due to limitations of working
with React. I had implemented the fetch logic and state management in a separate custom
hook, but decided to scrap it and just use the context api instead, so we could trigger
refreshes more easily with the shared state.

You will find comments about these and other decisions throughout the project.

## Instructions

### To run the project, first install the dependencies listed in the package.json files:

```
cd client && pnpm install
cd ../server && pnpm install
```

### To run the client in development mode:

From the project root folder:

```
cd client
npm run dev
```

After this, access the website through http://localhost:5173.

### To run the server in development mode:

From the project root folder:

```
cd server
npm run dev
```

After this, you will be able to access the backend at http://localhost:3000.
