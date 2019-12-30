'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('cucumber'),
    Given = _require.Given,
    When = _require.When,
    Then = _require.Then;

var Role = require('testcafe').Role;
var githubPage = require('../features/page-objects/github-page.js.js');
// require('custom-env').env(process.env.NODE_ENV, 'config');
// const url = process.env.GITHUB_URL || process.env.DEFAULT_URL;

Given(/^I open the GitHub page$/, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var my_url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    my_url = 'https://www.github.com';
                    _context.next = 3;
                    return githubPage.url(my_url);

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})));

When(/^I am typing my search request (.*) on GitHub$/, function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(text) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return githubPage.searchText(text);

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x) {
        return _ref2.apply(this, arguments);
    };
}()
//await testController.typeText(githubPage.github.searchButton(), text);
);

Then(/^I am pressing (.*) key on GitHub$/, function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(text) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return githubPage.pressKey(text);

                    case 2:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function (_x2) {
        return _ref3.apply(this, arguments);
    };
}());

Then(/^I should see that the first GitHub\'s result is (.*)$/, function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(text) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return githubPage.validateSearchResults(text);

                    case 2:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x3) {
        return _ref4.apply(this, arguments);
    };
}());

var gitHubRoleForExample = Role(githubPage.url() + 'login', function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return t.click(githubPage.github.loginButton()).expect(githubPage.github.loginErrorMessage().innerText).contains('Incorrect username or password.');

                    case 2:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function (_x4) {
        return _ref5.apply(this, arguments);
    };
}());

Then(/^I am trying to use (.*)$/, function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(text) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return testController.useRole(gitHubRoleForExample);

                    case 2:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function (_x5) {
        return _ref6.apply(this, arguments);
    };
}());