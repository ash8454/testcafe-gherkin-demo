'use strict';

const createTestCafe = require("gherkin-testcafe");
let testcafe = null;

createTestCafe("localhost", 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['features/steps/*.js', 'features/*.feature'])
            .browsers(["chrome"])
            .run()
            .catch(function (error) {
                console.error(error);
            })
            .then(function (report) {
                testcafe.close();
            })
    });
