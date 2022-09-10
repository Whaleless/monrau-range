// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scrit.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var songs = [{
  id: 1,
  title: 'Ненависть'
}, {
  id: 2,
  title: 'Тишина'
}, {
  id: 3,
  title: 'Километры и дожди'
}, {
  id: 4,
  title: 'Точка Паника'
}, {
  id: 5,
  title: 'Измена'
}, {
  id: 6,
  title: 'Богема'
}, {
  id: 7,
  title: 'Окнами'
}, {
  id: 8,
  title: 'Кину тебя'
}, {
  id: 9,
  title: 'Градусы'
}, {
  id: 10,
  title: 'Сто таблеток'
}, {
  id: 11,
  title: 'Молодым'
}];
var sizes = [{
  id: 1,
  size: '24px'
}, {
  id: 2,
  size: '36px'
}, {
  id: 3,
  size: '48px'
}];
var extraSizes = [{
  id: 1,
  extraSize: '24px'
}, {
  id: 2,
  extraSize: '36px'
}, {
  id: 3,
  extraSize: '48px'
}, {
  id: 4,
  extraSize: '64px'
}, {
  id: 5,
  extraSize: '72px'
}, {
  id: 6,
  extraSize: '96px'
}];
var mobileSizes = [{
  id: 1,
  mobileSize: '48px'
}, {
  id: 2,
  mobileSize: '64px'
}, {
  id: 3,
  mobileSize: '72px'
}];
var releaseDate = new Date('2022-09-30T21:00');
var body = document.querySelector('.body');
var range = document.querySelector('.range');
var titles = document.querySelectorAll('.title');
var massive = document.querySelector('.massive');
var logo = document.querySelector('.logo');
var form = document.querySelector('.form');
var timer = document.querySelector('.timer-box');
var albumTitle = document.querySelector('.album-title');
var albumDescription = document.querySelector('.album-description');
var timerDays = document.querySelector('.days');
var timerHours = document.querySelector('.hours');
var timerMinutes = document.querySelector('.minutes');
var timerSeconds = document.querySelector('.seconds');
var TEST = document.querySelector('.for-test');

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function showTitle(titleNumber) {
  titles.forEach(function (title) {
    if (titles[titleNumber] != title) {
      title.classList.replace('appear', 'disappear');
    }
  });

  if (!titles[titleNumber].classList.contains('appear')) {
    titles[titleNumber].innerHTML = songs[titleNumber].title;

    if (window.innerWidth >= 1080) {
      titles[titleNumber].style.setProperty('--song-size', sizes[Math.floor(Math.random() * sizes.length)].size);
    } else {
      titles[titleNumber].style.setProperty('--song-size', mobileSizes[Math.floor(Math.random() * mobileSizes.length)].mobileSize);
    }

    titles[titleNumber].style.setProperty('--coord-top', "".concat((Math.floor(Math.random() * (18 - 1)) + 1) * 5, "%"));
    titles[titleNumber].style.setProperty('--coord-right', "".concat((Math.floor(Math.random() * (15 - 1)) + 1) * 5, "%"));
    titles[titleNumber].classList.replace('disappear', 'appear');
  }
}

function totalSeparateDate() {
  var dateNow = new Date();
  var allSeconds = Math.round((releaseDate - dateNow) / 1000);
  var days = Math.floor(allSeconds / 86400);
  var hours = Math.floor(allSeconds % 86400 / 3600);
  var minutes = Math.floor(allSeconds % 86400 % 3600 / 60);
  var seconds = Math.floor(allSeconds % 86400 % 3600 % 60);

  if (allSeconds >= 0) {
    return waitTime = [{
      days: "".concat(days).length == 2 ? days : '0' + days,
      hours: "".concat(hours).length == 2 ? hours : '0' + hours,
      minutes: "".concat(minutes).length == 2 ? minutes : '0' + minutes,
      seconds: "".concat(seconds).length == 2 ? seconds : '0' + seconds
    }];
  } else if (allSeconds <= 0) {
    clearInterval(timerUpdate);
    thirdStepAction();
  }
}

function changeTimer() {
  var waitTime = totalSeparateDate();

  if (waitTime) {
    if (waitTime[0].days != timerDays.innerHTML) timerDays.innerHTML = waitTime[0].days;
    if (waitTime[0].hours != timerHours.innerHTML) timerHours.innerHTML = waitTime[0].hours;
    if (waitTime[0].minutes != timerMinutes.innerHTML) timerMinutes.innerHTML = waitTime[0].minutes;
    timerSeconds.innerHTML = waitTime[0].seconds;
  }
}

var timerUpdate = setInterval(changeTimer, 1000);

function hideAllTitles() {
  titles.forEach(function (title) {
    title.classList.replace('appear', 'disappear');
  });
}

function blinkElementToShow(_x, _x2, _x3) {
  return _blinkElementToShow.apply(this, arguments);
}

function _blinkElementToShow() {
  _blinkElementToShow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(element, timeInDiffState, elementsTransitionTime) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            element.classList.remove('hidden');
            _context6.next = 3;
            return sleep(500);

          case 3:
            element.classList.remove('disappear'); // Amount of time, when element is visible

            _context6.next = 6;
            return sleep(timeInDiffState);

          case 6:
            element.classList.add('disappear');
            console.log('disappear');
            _context6.next = 10;
            return sleep(1000);

          case 10:
            element.addEventListener('transitionend', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('hidden');
                      element.classList.add('hidden');

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));
            _context6.next = 13;
            return sleep(elementsTransitionTime);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _blinkElementToShow.apply(this, arguments);
}

function blinkElementToHide(_x4, _x5, _x6, _x7) {
  return _blinkElementToHide.apply(this, arguments);
}

function _blinkElementToHide() {
  _blinkElementToHide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(element, timeInDiffState, elementsTransitionTime, exist) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            element.classList.add('disappear');
            console.log('disappear');
            _context8.next = 4;
            return sleep(1000);

          case 4:
            if (exist == true) {
              element.addEventListener('transitionend', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        console.log('hidden');
                        element.classList.add('hidden');

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              })));
            }

            _context8.next = 7;
            return sleep(timeInDiffState);

          case 7:
            if (!(exist == true)) {
              _context8.next = 11;
              break;
            }

            element.classList.remove('hidden');
            _context8.next = 11;
            return sleep(500);

          case 11:
            element.classList.remove('disappear');

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _blinkElementToHide.apply(this, arguments);
}

function displayElement(_x8) {
  return _displayElement.apply(this, arguments);
}

function _displayElement() {
  _displayElement = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(element) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            element.classList.remove('hidden');
            _context9.next = 3;
            return sleep(500);

          case 3:
            element.classList.remove('disappear');

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _displayElement.apply(this, arguments);
}

function hideElement(_x9, _x10) {
  return _hideElement.apply(this, arguments);
}

function _hideElement() {
  _hideElement = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(element, ms) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            element.classList.add('disappear');
            _context11.next = 3;
            return sleep(500);

          case 3:
            element.addEventListener('transitionend', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      element.classList.add('hidden');

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            })));

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _hideElement.apply(this, arguments);
}

range.addEventListener('input', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var value, massEffect, _massEffect, changeToFinalScreen, _changeToFinalScreen;

  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _changeToFinalScreen = function _changeToFinalScreen3() {
            _changeToFinalScreen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      hideElement(range);
                      _context3.next = 3;
                      return massEffect();

                    case 3:
                      _context3.next = 5;
                      return sleep(3000);

                    case 5:
                      form.classList.add('hidden');
                      _context3.next = 8;
                      return blinkElementToShow(logo, 3000, 3000);

                    case 8:
                      _context3.next = 10;
                      return displayElement(timer);

                    case 10:
                      displayElement(albumTitle);
                      displayElement(TEST);

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
            return _changeToFinalScreen.apply(this, arguments);
          };

          changeToFinalScreen = function _changeToFinalScreen2() {
            return _changeToFinalScreen.apply(this, arguments);
          };

          _massEffect = function _massEffect3() {
            _massEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var ms, paragraph;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      ms = 200;
                      i = 0;

                    case 2:
                      if (!(i < 850)) {
                        _context2.next = 18;
                        break;
                      }

                      paragraph = document.createElement('p');
                      paragraph.className = 'mass title disappear';
                      paragraph.innerHTML = songs[Math.floor(Math.random() * songs.length)].title;
                      paragraph.style.setProperty('--song-size', extraSizes[Math.floor(Math.random() * extraSizes.length)].extraSize);
                      paragraph.style.setProperty('--coord-top', "".concat(Math.floor(Math.random() * (110 + 10)) - 10, "%"));
                      paragraph.style.setProperty('--coord-right', "".concat(Math.random() * (110 + 10) - 10, "%"));
                      massive.append(paragraph);
                      _context2.next = 12;
                      return sleep(ms);

                    case 12:
                      paragraph.classList.remove('disappear');

                      if (i == 800) {
                        body.classList.replace('oldBack', 'newBack');
                      }

                      if (ms != 10) ms = ms - 5;

                    case 15:
                      i++;
                      _context2.next = 2;
                      break;

                    case 18:
                      body.addEventListener('transitionend', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var masses;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return sleep(3000);

                              case 2:
                                masses = document.querySelectorAll('.title');
                                masses.forEach(function (mass) {
                                  mass.remove();
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      })));

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
            return _massEffect.apply(this, arguments);
          };

          massEffect = function _massEffect2() {
            return _massEffect.apply(this, arguments);
          };

          value = range.value;
          console.log(value);

          if (value != 0 && value != 100) {
            showTitle(Math.ceil(value / 9) - 1);
          } else if (range.value == 100) {
            changeToFinalScreen();
          } else {
            hideAllTitles();
          }

          TEST.addEventListener('click', function () {
            releaseDate = Date.now() + 5500;
            TEST.remove();
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));

function thirdStepAction() {
  return _thirdStepAction.apply(this, arguments);
}

function _thirdStepAction() {
  _thirdStepAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            hideElement(timer);
            _context12.next = 3;
            return blinkElementToHide(albumTitle, 3000, 3000, false);

          case 3:
            albumDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' + ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt' + ' eget. Tortor id aliquet lectus proin nibh nisl. Sagittis purus sit amet volutpat consequat' + ' mauris nunc. Enim neque volutpat ac tincidunt vitae semper quis lectus. Convallis convallis' + ' tellus id interdum velit laoreet id donec ultrices. Neque egestas congue quisque egestas diam in.' + ' Purus semper eget duis at tellus at urna condimentum. Eu non diam phasellus vestibulum lorem sed' + ' risus ultricies. Pharetra et ultrices neque ornare. Dignissim sodales ut eu sem integer vitae justo.' + ' Vulputate odio ut enim blandit. Urna condimentum mattis pellentesque id nibh tortor id aliquet.' + ' Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sit amet tellus cras adipiscing enim' + ' eu turpis. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Risus viverra' + ' adipiscing at in.';
            _context12.next = 6;
            return displayElement(albumDescription);

          case 6:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _thirdStepAction.apply(this, arguments);
}
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61270" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scrit.js"], null)
//# sourceMappingURL=/scrit.7dc8421f.js.map