'use strict';

// const createTestCafe = require('gherkin-testcafe');
// let testcafe = null;

// module.exports = async () => {
//     const testcafe = await createTestCafe('localhost', 1228)
//     runner = await testcafe.createRunner();
//     const remoteConnection = await testcafe.createBrowserConnection();

//     return runner
//         .src(['specs/steps/*.js', 'specs/*.feature'])
//         .screenshots('reports/screenshots/', true)
//         .browsers([remoteConnection, 'chrome'])
//         .run()
//         .then(() => console.log("Running from gherkin runner"))
//         .catch(function(error) {
//             console.error(error);               
//         }); 
// };

const {BeforeAll, AfterAll, setDefaultTimeout, Before, After, Status} = require('cucumber');
const createTestCafe = require("gherkin-testcafe");
let testcafe = null;

// createTestCafe("localhost", 1337, 1338)
//   .then(tc => {
//     testcafe = tc;
//     const runner = testcafe.createRunner();

//     return runner
//       .src(['specs/steps/*.js', 'specs/*.feature'])
//       .browsers(["chrome"])
//       .run();
//   })
//   .then(failedCount => {
//     console.log("Tests failed: " + failedCount);
//     testcafe.close();
//   });

  function runTest(browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function(tc) {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src('./test.js')
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run()
                .catch(function(error) {
                    console.error(error);
                });
        })
        .then(function(report) {
        });
}

BeforeAll(async (ctx) => {
    runTest(n, this.setBrowser());
    // return this.waitForTestController.then(function(testController) {
    //     return testController.maximizeWindow();
    // });
})
