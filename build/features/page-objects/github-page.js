'use strict';

var _testcafe = require('testcafe');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const Selector = (input, t) => {
//   return NativeSelector(input).with({ boundTestRun: t });
// };

// Selectors

function select(selector) {
    return (0, _testcafe.Selector)(selector).with({ boundTestRun: _testcafe.t });
}

//Locator properties
var searchTextBox = '.header-search-input';

//get url

exports.url = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(baseUrl) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _testcafe.t.navigateTo('https://devexpress.github.io/testcafe/example/');

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

//get the search box
exports.searchText = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(text) {
        var searchTextbox;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return select(searchTextBox).with({ visibilityCheck: true })();

                    case 2:
                        searchTextbox = _context2.sent;
                        _context2.next = 5;
                        return _testcafe.t.expect(searchTextBox).ok();

                    case 5:
                        _context2.next = 7;
                        return _testcafe.t.typeText(searchTextbox, text);

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}();

//press key
exports.pressKey = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(text) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _testcafe.t.pressKey(text);

                    case 2:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function (_x3) {
        return _ref3.apply(this, arguments);
    };
}();

//click login button
exports.validateSearchResults = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(text) {
        var searchResultLocator;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        searchResultLocator = (0, _testcafe.Selector)('.repo-list-item').nth(0).with({ boundTestRun: _testcafe.t }).innerText;
                        _context4.next = 3;
                        return _testcafe.t.expect(searchResultLocator).contains(text);

                    case 3:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function (_x4) {
        return _ref4.apply(this, arguments);
    };
}();