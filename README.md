# Contact page - recruitment task

## How to run and test application
Before even thinking of anything remember to install all depedencies with
```
yarn
```

### Run
To run the app type in your terminal:
```
yarn start
```
and visit [localhost:3000](http://localhost:3000).

### Test
To test app type in
```
yarn test
```
and see if I didn't mess up something ;)

## Short story what and why
App is based on [create-react-app](https://github.com/facebook/create-react-app) boilerplate to start quickly. Redux is used for state managing and [redux-form](https://redux-form.com/) for form building, validation and submitting.

This is my first experience with TypeScript, so forgive me some mistakes :)
in `tsconfig.js` I've excluded 2 tests which use `redux-form` properties and those were required by tested components. Maybe I should exclude all tests? But then strong types are not used there. Don't know, I need to read more about that.

Tests are runned by jest and written with [enzyme](https://github.com/airbnb/enzyme) and [react-test-renderer](https://reactjs.org/docs/test-renderer.html). Coverage says over 90%, but I can see some things to improve and write more integrations tests. I've tried to write code that is simple to test so all components and containers are in different places, so testing with store is not really a case.

To make app look nice and make it fast I've used [Material-UI](https://material-ui.com/) React components.

## To improve:
- Read more about TypeScript!
- Write more integration tests
- Do not exclude tests from complier. Or maybe I should? Definitely need to read more about testing 3rd party libraries in TypeScript.
