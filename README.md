# Welcome to The Energy Viz Project

This project was the focus of my research study "Building Interactive Web-based Visualization Tool". I completed this project during the Spring 2020 semester, but have since made updates 
to ensure reproducability of the work I have completed as well as to add new visualizations, format the web interface and deploy the interface on AWS Amplify. 

## Dependencies

You require Node.js and npm in order to view The Energy Viz Project locally. 

Use the following commands in your terminal to ensure that you have Node and npm (Node Package Manager) installed. If not, you can install it at https://nodejs.org/en/download/.
```sh
node -v
npm -v
```

## Usage

Step 1. Clone the repository
```sh
git clone git@github.com:parthmerchant/the-energy-viz-project.git
```

Step 2. Install `node_modules/` by using the following command
```sh
npm install
```

Step 3. Run the application locally
```sh
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---------------------

```sh
npm test
```
Launches the test runner in the interactive watch mode.

```sh
npm run build
```

Builds the app for production to the `build/` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
