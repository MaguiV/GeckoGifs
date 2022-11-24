# GeckoGifs 

This is my project repository for Geckosoft Frontend Application Challenge made with React v18 + Vite. 

In my opinion, the React library together with the Vite build tool become a powerful team that offers a friendly, fast and efficient development experience.

This project only meets the following requirements due to lack of time:
-Build a frontend UI that displays the GIFs from Giphy
-A user visiting the website is able to search for GIFs and see the list of results.
-A visitor is able to see the GIFs details
-A placeholder is display when a GIFs are still loading.



## How to Create a Vite Project

To create a Vite application, open your terminal and navigate to the folder where you want to save the Vite program. Then run this command:

`yarn create vite`

After running the above command, you'll be prompted to select a framework and the template (variant).

Next, run the following commands to finish the installation:

`cd vite_application`
`npm install`



## How to Run

In the project directory, you can run:

`yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000[] to view it in your browser.

The page will reload when you make changes.\

`yarn test`

Launches the test runner in the interactive watch mode.\

`yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## Proyect folder Structure

### node_modules folder
The node_modules folder contains all the necessary dependencies for the application, which are specified in the package.json file.

All of the configured dependencies in package.json will be downloaded into the node_modules folder once the `yarn install` command is run.

### src folder
This folder contains the components folder with 4 files: AddCategory.jsx, GifGrid.jsx, GifItem.jsx and index.js.

### GeckoGifs.jsx and main.jsx
The GeckoGifs.jsx file is the base component that serves as a container for all of the other components used in the application.

The main.jsx file is where I target the root id from the index.html and render all the components used in the application.

### styles.css
These files contain all of the CSS styles used in the program.