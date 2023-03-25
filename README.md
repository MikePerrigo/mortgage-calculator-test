# mortgage-calculator-test
This repository is designed to run Cypress automation against Zillow's mortgage calculator. 

# Configuration
Clone the repository to a directory of your choice and then `cd mortgage-calculator-test`

*I have this repository configured to use the latest version of Cypress - **v12.8.1***

**If you already are using Cypress v12.18.1 you should be able to continue straight down to Executing Tests**

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

## Future Considerations
- I've limited the automation to text fields that are immediately visible on the page upon first load. The next iterative step would be to introduce the loan term drop down, as well as the 'Advanced' components (PMI/Tax/Insurance toggles and Hidden text input fields)
- I would want to automate the validation of carrying over data from the mortgage calculator fields to external links
  - 'Full Report' and 'See current rates' carriy over calculator info into the URL of the external page, then parses and puts that in the report. I'd want validation around that.
- I've left the pie chart alone for the most part, as the ID's on the DOM are not explicit (they are very generic). I'd like to identify areas of improvement for front end developers and be able to make assertions on the display compared against the payload going out, which we capture in one of the tests. This would be a great place to expand, since it's a single source of data spread across multiple areas.
- I also did not explore automating with location specific information (Zip code/See Current Rates). This would be an area I could foresee running into scaling issues that could need to be worked through. 
- Similarly, the amortization and payoff/payment schedule would require additional work to perform data validation on how those are calculated, more than likely leveraging external sources.
- At the time of execution, there are a lot of pageloads/requests coming through. As the tests scale, this could bog down the runtime so we'd likely need to implement a solution to ignore some of them/not watch for all/remove some.
