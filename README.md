Get started with [Expo dev docs](https://expo.dev/) and [React Native dev docs](https://reactnative.dev/)

## Setting the App with Expo Go Quick Start

```
npx create-expo-app YourAppName
```

```
cd YourAppName
npm start
```

Scan the QR Code and open via the Expo Go App

## Dependencies

**Install a Linter**

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

Create directories & files

```
src/components
```

## UI GOALS

- Temperature
- Feels like
- High & Low
- Description
- Dynamic Layout
  - Additional text
  - Icon & Background Color

## DYNAMIC SCREENS

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
