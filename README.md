# React Hook and Suspense Demo

**Note: this demo conatains _UNSTABLE, EXPERIMENTAL_ API**

This sample application shows a textfield for a search string and a search button. When
the user clicks Search, the given string will be searched in two (mock) backend endpoints.

# Run the example

# Install and start the backend

The backend is a simple express application that exposes two endpoints that return
random mock data on each invocation.

To run the backend:

```
cd backend
yarn install
yarn start
```

_Note_: The backend listens on _port 9010_, so please make sure this port is not in use when
starting the backend.

# Install and start the frontend

The frontend is a React 16.8 sample application, that uses some unstable api.

To run the frontend:

```
cd frontend
yarn install
yarn start
```

_Note_: The backend listens on _port 9081_, so please make sure this port is not in use when
starting the backend.

Now you can open the application in your browser at `http://localhost:9081`. Enter some
random text in the Search Field and press `Search`.

The example you're runing uses the "classic" class-based API from React.

## Using the hook-based example

To run the application that uses the new React Hooks API please uncomment in `main.js` the following line:

```
# comment out this line:
// import { App } from "./App";

# uncomment this line:
import { AppWithHooks as App } from "./AppWithHooks";

```

Now the app only uses functional components with the Hooks API.

## Using the code-splitting example

Another version of the app uses the code splitting feature `React.lazy`. To see it in action
again enable another version of `App` in `main.js`:

```
# comment out this line:
// import { App } from "./App";

# uncomment this line:
import { AppWithTab as App } from "./LazyApp";

```

When you now run the application you see a button that you have to click in order to load
the actual SearchPage. The code for the SearchPage component is lazy loaded right after
you click the button (please see the Network Tab in your Browser's dev tools).

Note that there is a Loading Spinner shown until the component has been loaded. This
works using a `React.Suspense` component in `LazyApp.js`.

To better the loading indicator you can simulate a slow server response by adding `?delayimport`
to your url (`http://localhost:9081?delayimport`).

Everything until here (Hooks, Suspense for Code splitting) it _stable React (16.8) API_ and can
be used in production!

# Suspense for Data Loading

Suspense also will be able to work for loading of data. _This is currenty unstable and alpha!_

To see this feature in action, please copy the folder `frontend/.react-cache-from-source` as `react-ache`
into your `frontend/node_modules` folder.

Then select the next version of the app in `main.js`:

```
# comment out this line:
// import { App } from "./App";

# uncomment this line:
import { AppWithTabWithSuspense as App } from "./LazyAppWithSupsense.js";

```

Now when you run the app you should also the loading spinner when the application loads the
data from the backend (after clicking Search). The spinner now are coming from suspense
(see for example `search_suspense/SearchPage`and `search_suspense/CompanySearch`). You will
notice that there is no fetch anymore.

You can play around with it by also adding `?delayfetch` to your url: (`http://localhost:9081?delayimport&delayfetch`) and by removing one or both of the `React.Suspense` in `search_suspense/SearchPage`
to see different behaviours.

Again: THIS SUSPENSE FEATURE IS UNSTABE.

# Questions

If you have any questions or comments, please let me know.
You can reach me on [Twitter](https://twitter.com/nilshartmann)
or open an issue in this github repo.
