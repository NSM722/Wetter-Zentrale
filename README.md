# Wetter Zentrale

A Responsive IOS and Android mobile application that fetches weather data from [OpenWeatherMap API](https://openweathermap.org/)

The app provides a user-friendly interface and easy navigation to switch between screens to get weather updates quickly

## Setting the App with Expo Go Quick Start

Get started with [Expo dev docs](https://expo.dev/) and [React Native dev docs](https://reactnative.dev/)

```
npx create-expo-app YourAppName
```

```
cd YourAppName
npm start
```

Scan the QR Code and open via the Expo Go App

## Install a Linter

Since the app is set up using `Expo`, it doesn't have a linter

A linter is a tool that analyzes source code to flag potential errors, stylistic issues, and other problems

```
npm install eslint --save-dev
```

Initialize the linter

```
npx eslint --init
```

You will get the following prompt on the terminal, press the `Enter` key continously to complete each prompt

```md
? How would you like to use ESLint? ...
To check syntax only

> To check syntax and find problems
> To check syntax, find problems, and enforce code style
```

When the above operation is complete you should see a `.eslintrc.js` file created in your root

## Install `@react-native-community/eslint-config`

This package provides a configuration that includes rules to enforce React Native-specific conventions, such as using the StyleSheet API for styling and preventing the use of deprecated APIs.

Using this package can help ensure that your React Native code follows best practices and is consistent with other React Native projects.

```
npm install @react-native-community/eslint-config --save -dev
```

**_Customised `.eslintrc.js` file_**

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@react-native-community",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    "comma-dangle": [2, "never"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: false },
    ],
  },
};
```

[Configure ESLint](https://eslint.org/docs/latest/use/configure/ "Read Docs")

- **env**: This section specifies the environment in which the code will run. In this case, it specifies that the code will run in a browser environment and use the features of ECMAScript 2021.

- **extends**: This section specifies which pre-defined configurations to use as the base for this configuration. This configuration extends three pre-defined configurations: eslint:recommended, plugin:react/recommended, and @react-native-community.

- **overrides**: This section specifies any overrides to the default configuration for specific files or directories.

- **parserOptions**: This section specifies options for the parser used by ESLint to parse the code. In this case, it specifies that the parser should use the latest version of ECMAScript and that the code is written in modules.

- **plugins**: This section specifies which plugins to use with ESLint. In this case, it specifies that the react plugin should be used.

- **rules**: This section specifies the rules to enforce. In this case, it specifies that semicolons should not be used, trailing commas should not be used, JSX files should have either a .js or .jsx extension, and variables should not be used before they are defined.

**Add a script to run the eslint file**, while in the package.json file

```js
  "scripts": {
   "start": "expo start",
   "android": "expo start --android",
   "ios": "expo start --ios",
   "web": "expo start --web",
   "lint": "eslint ." => added
 },
 // then run
 npm run lint
```

**Create directories & files**

```
src/components
src/screens
```

## UI Display Goals

- Temperature
- Feels like
- High & Low
- Description
- Dynamic Layout
  - Additional text
  - Icon & Background Color

## Dynamic Screens

- Upcoming Weather
- Current Weather
- City Details
  - Background Image
  - Name
  - Country
  - Population
  - Sunrise & Sunset

## Upcoming Weather Component

Renders a list that contains:

- Date and Time
- Icon
- Weather at current time

## Using List Views

`Flatlist` **OR** `Sectionlist` interfaces
Both interfaces require an array of objects to work properly, with each object representing a unique item in the list
Therefore both wrap an `item` in an object with a `key` of `index` when passing the `item` to the `renderItem` prop function:

The argument name `item` is a naming convention

```js
const DATA = [ 'First Item', 'Second Item', 'Third Item']

// would become when passed to the renderItem prop Function hence the particular destructuring {}
{ item: 'First Item', index: 0 }
{ item: 'Second Item', index: 1 }
{ item: 'Third Item', index: 2 }

<FlatList
  data={DATA}
  renderItem={({item}) => <Item title={item} />}
  keyExtractor={item => item}
/>
```

The `keyExtractor` function is called for each item in the `data` array, and its return value is used as the `key` prop for the corresponding rendered component

This ensures that each item has a unique key, even if the order of the items changes, or new items are added or removed from the list therefore avoiding unnecessary re-renders of the entire list

### @expo/vector-icons

This library is installed by default on the template project using `npx create-expo-app` and is part of the `expo` package

It includes popular icon sets that you can browse at [Expo Vector Icons](icons.expo.fyi "browse icons") and includes instructions on how to import the `icon family` and rendering `the Component`

For Example

```js
// import the sun icon family
import { Feather } from "@expo/vector-icons";

// Render the component
<Feather name="sun" size={24} color="black" />;
```

## Routing and Navigation

Getting started with [React Navigation](https://reactnavigation.org/docs/getting-started/ "Read Docs") or checkout the [React Navigation Github Repo](https://github.com/react-navigation/react-navigation "Read More")

### Installation and Setup

```
npm install @react-navigation/native
```

### Installing dependencies into an Expo managed project

```
npx expo install react-native-screens react-native-safe-area-context
```

### Setting up the NavigationContainer

Wrap the whole app in `NavigationContainer`

Usually this is done in your entry file, such as index.js or App.js

```js
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

### Setting up Tab(**_bottom Tabs_**) navigation

```
npm install @react-navigation/bottom-tabs
```

Read more on the [API Definition](https://reactnavigation.org/docs/bottom-tab-navigator/#api-definition "Read Docs")

The `Tab.Navigator` component is used to define the screens that will be displayed in the tab bar, using the `Tab.Screen`

```js
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Current"} component={CurrentWeather} />
        <Tab.Screen name={"Upcoming"} component={UpcomingWeather} />
        <Tab.Screen name={"City"} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
```

### Customizing the Tab Navigation appearance

The `screenOptions` prop in a `Tab.Navigator` component is an object that allows you to define common options for all screens in the navigator

It is used to specify options for the tab bar appearance such as:

- the active and inactive colors
- icon styles
- label styles

It can also be used to set options for the header that appears at the top of each screen

**tabBarIcon**

Function that given `{ focused: boolean, color: string, size: number }` returns a React.Node, to display in the tab bar

```js
<Tab.Screen
  name={"Current"}
  component={CurrentWeather}
  options={{
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={"today"}
        size={25}
        color={focused ? "#dc143c" : "#000000"}
      />
    ),
  }}
/>
```

**tabBarStyle**
Style object for the bottom tab bar, one can configure styles such as:

- **backgroundColor**: The background color of the tab bar
- **paddingVertical**: The vertical padding of the tab bar
- **height**: The height of the tab bar
- **borderTopWidth**: The width of the top border of the tab bar
- **borderTopColor**: The color of the top border of the tab bar
- **elevation**: The elevation of the tab bar

```js
<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: '#dc143c',
    tabBarInactiveTintColor: '#000000',
    tabBarStyle: {
      backgroundColor: '#20b2aa',
    },

    // styling the header bar
    headerStyle: {
      backgroundColor: '#20b2aa',
    },
    headerTitleStyle : {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#fff0f5'
    }
  }}
>
```

Additional details on [configuring the header bar](https://reactnavigation.org/docs/headers/ "Read Docs")

### Expo Location

When making the API call one needs the latitude and longitude coordinates

```json
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
```

[`expo-location`](https://docs.expo.dev/versions/latest/sdk/location/ "Read Docs") allows reading geolocation information from the device

Your app can poll for the current location or subscribe to location update events

### react-native-dotenv package

[react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv "Github Repo") is used for loading react native environment variables using import statements for multiple env files

### Networking

Made use of the Fetch API, this functionality is in a custom hook

```js
// useGetWeather.js custom hook
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { API_KEY } from "@env";

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (err) {
      setErrorMsg(`Could not get weather details`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [latitude, longitude]);
  return { isLoading, errorMsg, weather };
};
```
