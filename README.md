# Code Bytes

Code Bytes is a web-based code editor which allows for collaborative editing in real-time. When a new project is created, it is added to its own separate room. This way, changes made to one project will have no effect on the other. To have others edit your code in real-time, simply share your project link with them. The video below shows a demonstration of this project's features as well as how to use it.



https://user-images.githubusercontent.com/59986120/163691920-42eb84b4-f122-4a9c-9da0-086a8c6b3528.mov




## Before Running

In the client directory of the project, you can run:

### `npm install`

to install all required dependencies and then:

### `npm start`


In the server directory of the project, you can run:

### `npm install`


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
