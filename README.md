# mortgage-calculator-test
This repository is designed to run Cypress automation against Zillow's mortgage calculator. 

# Configuration
Clone the repository to a directory of your choice and then `cd mortgage-calculator-test`

*I have this repository configured to use the latest version of Cypress - **v12.8.1***

If you do not have the latest version of Cypress (At the current time, v12.8.1), to run this you have a few options:

### Option 1
- Within the `mortgage_calculator-test` directory, run `npm install --save-dev cypress@<your-version>` << This will override the version in the node modules and package.json/package-lock.json files.
  - Example `npm install --save-dev cypress@12.7.0`
  
### Option 2
- Within `mortgage_calculator-test`, open your IDE or directory and delete `node_modules` and `package-lock.json` in the `mortgage-calculator-test` **root** directory (not in the cypress sub-directory)
- After those are deleted, run `npm install` to re-install with the dependencies. This should install v12.8.1

## Executing Tests
### Option 1
To open the Cypress test runner, execute `npx cypress open`
- Select `E2E Testing` which should have a green 'configured' identifier
- Select your test runner of choice
- Select which spec file you'd like to run

### Option 2
To run all spec files in a headless manner via CLI, execute `npx cypress run`
