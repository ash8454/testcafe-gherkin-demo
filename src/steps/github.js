const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
import { t } from 'testcafe';
const githubPage = require('.././features/page-objects/github-page.js');
//const githubPage = require('../features/page-objects/github-page.js.js');
// require('custom-env').env(process.env.NODE_ENV, 'config');
// const url = process.env.GITHUB_URL || process.env.DEFAULT_URL;

Given(/^I open the GitHub page$/, async function() {
    const my_url =  'https://www.github.com'
    await githubPage.goTo(my_url)
});

When(/I am typing my search request (.*) on GitHub/, async function(t, [text]) {
    await githubPage.searchText(text);
});

Then(/^I am pressing (.*) key on GitHub$/, async function(t, [text]) {
    await githubPage.pressKey(text);
});

Then(/^I should see that the first GitHub\'s result is (.*)$/, async function(t, [text]) {
    await githubPage.validateSearchResults(text);
});

