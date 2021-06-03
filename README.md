# Test project
This is a test project

# Running Your Site Locally
   
1. Install [Node.js and npm](https://nodejs.org/en/)

2. Clone project:

        git clone git@github.com:thamanchand/vitl-test.git
        cd vitl-test
         
3. Install npm dependencies:

        yarn

4. Starts a development server

        yarn start

5. Browse to [http://localhost:3000/](http://localhost:3000/)

# Running cypress test

Make sure development server is running at http://localhost:3000.

Open new tab in terminal and start cypress server

1. Starts cypress test server

        yarn run cypress open

2. Once browser is opened you will see `vitl.spec.js` under examples, Click `vitl.spec.js`
   to run test

![Cypress test](cypress-test.png)


3. See test live in action
