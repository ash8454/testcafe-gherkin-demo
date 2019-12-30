'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _cucumber = require('cucumber');

var _testcafe = require('testcafe');

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Selector = function Selector(input, t) {
  return (0, _testcafe.Selector)(input).with({ boundTestRun: t });
};

(0, _cucumber.Given)('I open TestCafe demo page', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return t.navigateTo('https://devexpress.github.io/testcafe/example/');

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

(0, _cucumber.When)('I click some checkboxes', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t, _ref2, table) {
    var _ref4 = _toArray(_ref2);

    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref5, checkboxId;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 3;
            _iterator = table.hashes()[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 13;
              break;
            }

            _ref5 = _step.value;
            checkboxId = _ref5.checkboxId;
            _context2.next = 10;
            return t.click('#' + checkboxId);

          case 10:
            _iteratorNormalCompletion = true;
            _context2.next = 5;
            break;

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2['catch'](3);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 19:
            _context2.prev = 19;
            _context2.prev = 20;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 22:
            _context2.prev = 22;

            if (!_didIteratorError) {
              _context2.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context2.finish(22);

          case 26:
            return _context2.finish(19);

          case 27:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[3, 15, 19, 27], [20,, 22, 26]]);
  }));

  return function (_x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());

(0, _cucumber.Then)(/^The amount of selected checkboxes is "(.+)"$/, function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, _ref6) {
    var _ref8 = _slicedToArray(_ref6, 1),
        amount = _ref8[0];

    var selectedCheckboxes, checkedCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            selectedCheckboxes = Selector('input[type="checkbox"]').filter(function (checkbox) {
              return Boolean(checkbox && checkbox.checked);
            });
            _context3.next = 3;
            return selectedCheckboxes.count;

          case 3:
            checkedCount = _context3.sent;
            _context3.next = 6;
            return t.expect(checkedCount).eql(Number(amount));

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}());