## Getting Started

- Clone the project 
- Install node modules 
- Install pod files
- Run `detox build --configuration ios`
- Run tests by running `detox test --configuration ios ./e2e/name_of_the_test.e2e.js`

## Test Scenarios
I've covered 3 diefferent scenarios here to demonstarte how we can pass the tests and how we can't. Se the next section for more information.

- `failing-1.e2e.js`: Disabling synchronisation in one test and enable it again at the end of the same test. ⛔
- `failing-2.e2e.js`: Disabling synchronisation in one test and enable it again in the next test. ⛔
- `success-1.e2e.js`: Disabling synchronisation in one test and relaunch the app at the end of the same test. ✅