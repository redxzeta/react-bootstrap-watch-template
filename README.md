# Simple React Bootstrap Template Theme

Purpose is to skip the setup process when using Bootstrap and using one of the premade themes along with React Router. Sometimes I find myself repeating the same process in hobby projects or hackathons. `Pages` is where you put the page files and `Components` is where you put the UI files like Navigation Bar or Cards. Folder Structure is optional and could be customized to your liking. This could be also for beginners learning React where they want to focus on functionality first then styling later. Css files could be with their repspective page or create a new folder `Styles`.

[sample link](https://minty-template.netlify.app/)

git clone

`git clone https://github.com/redxzeta/react-bootstrap-watch-template.git`

OR

Use Template from above

To Change themes

`index.js`

```
import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Change minty into any of the names mentioned in bootswatch ie `lumen`

`import "bootswatch/dist/lumen/bootstrap.min.css"; `

Using the regular

`import 'bootstrap/dist/css/bootstrap.min.css';`

[More Themes](https://bootswatch.com/)

# Adding Pages 

`App.js`
Add a new route in `<Switch>` like from below and put in the component u want to use for the page

more info here on [React Router Dom](https://reactrouter.com/web/guides/quick-start)

```
<Switch>
  <Route path="/cards">
    <Cards />
  </Route>
  <Route path="/test">
    <Test />
  </Route>
  <Route path="/">
    <LandingPage />
  </Route>
</Switch>
```

# Helpful Links 

[React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

[axios](https://github.com/axios/axios)

[React Concepts](https://reactjs.org/docs/hello-world.html)

[React Hooks](https://reactjs.org/docs/hooks-intro.html)

[React Router Dom](https://reactrouter.com/web/guides/quick-start)

[es6 js](https://www.javascripttutorial.net/es6/)


# Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/redxzeta/react-bootstrap-watch-template)

Clicking on the button deploys the site on your netlify account and clones it to your github repo

I recommend signing up with [Netlify](https://www.netlify.com/) to deploy your site

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm install --global yarn`
If you do not have yarn installed. But u could use npm as an alterntaive.

### `yarn install`

Installs node modules required to run the app.


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
