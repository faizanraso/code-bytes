# Code Bytes

Code Bytes is a web based code editor which allows for collabarative editing in real-time. When a new project is created, it is added to its own seperate room. This way, changes made to one project will have no affect on the other. To have others edit your code in realtime, simply share your project link with them. The vide below shows a demonstration of this projects features and as well as how to use it.

https://user-images.githubusercontent.com/59986120/163691319-556d9d07-488d-46f4-b87b-64921eb27771.mov


## Before Running

In the client directory of the project, you can run:

### `npm install`

to install all required dependencies


In the server directory of the project, you can run:

### `npm install`

to install all required dependencies and then:

### `npm start`

to run the client side.

You would then need to connect the application with a mongoDB database as that enables data storage. This can be done in the server.js file 

To run the server side, you can run:

### `nodemon server.js`


## Available Scripts

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
