# Project Requirements

- ## Navigations and routing:

  - A single page web app
  - Navigation is enabled by Redux-Router
  - Navigation links should not reload the entire app but only shows the corresponding page. Reloading the enire app causes the local Redux state to reinitialize which leads to the loss of already initilized Redux store. Use React Router's `<Link>` to wrap around navigation links and avoid reloading the app.
  - If user manually navigate to a page by entering the url in the broswer, it will cause the app to reload (which again will cause loss in local Redux state). To avoid this problem, a Redux store should be reinitialized from REST server during the construction of the app (in other word, reinitilize the store inside a constructor).

- App State:
  - Use Redux for state managment
  - Redux store is initialized inside `index.js` which is then passed down to `App` Component as props.
  - Inside the `App` component, the local Redux store (passed down to `App` from `index.js`) is then passed down to different pages (sush as `UserPage`, `HomePage`, `SignInPage` components..) via React-Redux's `<Provider>`. This is how a singleton of Redux's store initilized in `index.js` acts as the single and universal soure of state across the app.
  - The app must be able to reload the Redux state for the current loggin user when user refresh/reload the browser. The app also must be able to reload the state when user navigate to pages by manually entering the url.