# Own Up Take-Home Coding Exercise

## Overview

This is a basic UI that allows a user to search for and compare rate quotes from multiple local lenders to find the best rate. It pulls data from an API built by Own Up for the purposes of this exercise.

## Running Locally

This project was created using `npm`.

* Clone this repository, or download and extract zip file
* Navigate to root directory of your local clone
* Install node dependencies: `npm install`
* Configure local environment variables:
    * Rename example .env file to local .env file: `mv .env.example .env.local`
    * Confirm URL for `REACT_APP_API_BASE_URL` is valid
    * Replace `REACT_APP_API_AUTH_TOKEN` with your valid auth token (token string only, not including `RG-AUTH`)
* Run app locally:
    * `npm start` to run app in development mode
    * `npm test` to run tests
    * Other default scripts available from Create React App configuration included in `package.json`

## Technology Used

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* State is managed with [React Redux](https://react-redux.js.org/) and [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* Shallow component rendering is managed with [Enzyme](https://airbnb.io/enzyme/), as it is a widely supported library for React component testing with intuitive methods for traversing components


## Some Additional Considerations

**Testing:** basic smoke tests are included for each component as well as basic functionality tests for synchronous Redux action creators and reducer function. Much additional testing could be included, such as more complete snapshots, component integration tests, and tests for the asynchronous Redux action. Due to time constraints and my relative unfamiliarity with Redux (conventions for testing asynchronous actions seem to vary widely), I have left these out here and would take cues from team conventions on what additional test coverage to provide.

**Styling:** because this is a simple app I have composed it only of content components without styling containers. If this was part of a more complex ecosystem, many elements could be further decomposed into reusable containers, e.g. the submit button on the RequestForm. Additionally, I have restricted basic styling to an `index.css` and `App.css` stylesheet to cover all components, whereas in a more complex application this would likely be better decomposed into component-specific stylesheets, CSS-in-JS, etc. Here I opted for simplicity for the sake of time and readability.

**Validation:** there is additional validation that likely should be performed to more thoroughly ensure foolproof user experience. For example, the loan request amount text input strips any non-numeric characters before submission but does not validate that the input is a meaningful dollar amount or restrict possible inputs. Additionally, ideally props would be thoroughly validated with proptypes. Again for the sake of time and simplicity, I have focused more on accommodating happy path functionality.