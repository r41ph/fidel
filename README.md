# Fidel Frontend test

## What is Fidel API?

Fidel is an API platform that makes it easy for developers to link payment cards to their applications and receive real-time transaction data.

## Objective

The objective of this test is to verify your skills and introduce you to Fidel API.

## Task

Create a UI that lists transactions in an infinite scroll (100 per API call), fetching data from Fidel API and using our front end stack, and loading new transactions as you scroll the page.

### Stack

- React, TypeScript
- Sass or styled-components
- Jest & react-testing-library (or Enzyme) for testing

### Documentation

- [Documentation](https://docs.fidel.uk/transactions)
- [API Reference](https://reference.fidel.uk)
- [API pagination](https://reference.fidel.uk/reference#pagination)

### API Access

Use the development stage API https://api-dev.fidel.uk/v1d/.

- _Test environment secret key:_ `sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6`
- _Program ID_ to fetch the transactions from: `2314f371-39b1-4c80-8040-4144ff1bad09`

You can read more about request headers in the API Reference.

## Questions & support

Should you have any questions, just ask eszter@fidel.uk :)
<br><br>

# Solution notes

In the project directory, you should create a file named .env and add in it the _Test environment secret key_ where the environmental variable should be named _REACT_APP_FIDEL_API_SECRET_KEY_:

```
REACT_APP_FIDEL_API_SECRET_KEY=sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner
