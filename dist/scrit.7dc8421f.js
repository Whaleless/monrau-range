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
const songs = [{
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
const sizes = [{
  id: 1,
  size: '24px'
}, {
  id: 2,
  size: '36px'
}, {
  id: 3,
  size: '48px'
}];
const extraSizes = [{
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
const mobileSizes = [{
  id: 1,
  mobileSize: '48px'
}, {
  id: 2,
  mobileSize: '64px'
}, {
  id: 3,
  mobileSize: '72px'
}];
let releaseDate = new Date('2022-09-30T21:00');
let body = document.querySelector('.body');
let range = document.querySelector('.range');
let titles = document.querySelectorAll('.title');
let massive = document.querySelector('.massive');
let logo = document.querySelector('.logo');
let form = document.querySelector('.form');
const timer = document.querySelector('.timer-box');
const albumTitle = document.querySelector('.album-title');
const albumDescription = document.querySelector('.album-description');
let timerDays = document.querySelector('.days');
let timerHours = document.querySelector('.hours');
let timerMinutes = document.querySelector('.minutes');
let timerSeconds = document.querySelector('.seconds');
const TEST = document.querySelector('.for-test');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showTitle(titleNumber) {
  titles.forEach(title => {
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

    titles[titleNumber].style.setProperty('--coord-top', `${(Math.floor(Math.random() * (18 - 1)) + 1) * 5}%`);
    titles[titleNumber].style.setProperty('--coord-right', `${(Math.floor(Math.random() * (15 - 1)) + 1) * 5}%`);
    titles[titleNumber].classList.replace('disappear', 'appear');
  }
}

function totalSeparateDate() {
  let dateNow = new Date();
  let allSeconds = Math.round((releaseDate - dateNow) / 1000);
  let days = Math.floor(allSeconds / 86400);
  let hours = Math.floor(allSeconds % 86400 / 3600);
  let minutes = Math.floor(allSeconds % 86400 % 3600 / 60);
  let seconds = Math.floor(allSeconds % 86400 % 3600 % 60);

  if (allSeconds >= 0) {
    return waitTime = [{
      days: `${days}`.length == 2 ? days : '0' + days,
      hours: `${hours}`.length == 2 ? hours : '0' + hours,
      minutes: `${minutes}`.length == 2 ? minutes : '0' + minutes,
      seconds: `${seconds}`.length == 2 ? seconds : '0' + seconds
    }];
  } else if (allSeconds <= 0) {
    clearInterval(timerUpdate);
    thirdStepAction();
  }
}

function changeTimer() {
  let waitTime = totalSeparateDate();

  if (waitTime) {
    if (waitTime[0].days != timerDays.innerHTML) timerDays.innerHTML = waitTime[0].days;
    if (waitTime[0].hours != timerHours.innerHTML) timerHours.innerHTML = waitTime[0].hours;
    if (waitTime[0].minutes != timerMinutes.innerHTML) timerMinutes.innerHTML = waitTime[0].minutes;
    timerSeconds.innerHTML = waitTime[0].seconds;
  }
}

let timerUpdate = setInterval(changeTimer, 1000);

function hideAllTitles() {
  titles.forEach(title => {
    title.classList.replace('appear', 'disappear');
  });
}

async function blinkElementToShow(element, timeInDiffState, elementsTransitionTime) {
  element.classList.remove('hidden');
  await sleep(500);
  element.classList.remove('disappear'); // Amount of time, when element is visible

  await sleep(timeInDiffState);
  element.classList.add('disappear');
  console.log('disappear');
  await sleep(1000);
  element.addEventListener('transitionend', async function () {
    console.log('hidden');
    element.classList.add('hidden');
  });
  await sleep(elementsTransitionTime);
}

async function blinkElementToHide(element, timeInDiffState, elementsTransitionTime, exist) {
  element.classList.add('disappear');
  console.log('disappear');
  await sleep(1000);

  if (exist == true) {
    element.addEventListener('transitionend', async function () {
      console.log('hidden');
      element.classList.add('hidden');
    });
  }

  await sleep(timeInDiffState);

  if (exist == true) {
    element.classList.remove('hidden');
    await sleep(500);
  }

  element.classList.remove('disappear');
}

async function displayElement(element) {
  element.classList.remove('hidden');
  await sleep(500);
  element.classList.remove('disappear');
}

async function hideElement(element, ms) {
  element.classList.add('disappear');
  await sleep(500);
  element.addEventListener('transitionend', async function () {
    element.classList.add('hidden');
  });
}

range.addEventListener('input', async function () {
  let value = range.value;
  console.log(value);

  if (value != 0 && value != 100) {
    showTitle(Math.ceil(value / 9) - 1);
  } else if (range.value == 100) {
    changeToFinalScreen();
  } else {
    hideAllTitles();
  }

  TEST.addEventListener('click', () => {
    releaseDate = Date.now() + 5500;
    TEST.remove();
  });

  async function massEffect() {
    let ms = 200;

    for (i = 0; i < 850; i++) {
      let paragraph = document.createElement('p');
      paragraph.className = 'mass title disappear';
      paragraph.innerHTML = songs[Math.floor(Math.random() * songs.length)].title;
      paragraph.style.setProperty('--song-size', extraSizes[Math.floor(Math.random() * extraSizes.length)].extraSize);
      paragraph.style.setProperty('--coord-top', `${Math.floor(Math.random() * (110 + 10)) - 10}%`);
      paragraph.style.setProperty('--coord-right', `${Math.random() * (110 + 10) - 10}%`);
      massive.append(paragraph);
      await sleep(ms);
      paragraph.classList.remove('disappear');

      if (i == 800) {
        body.classList.replace('oldBack', 'newBack');
      }

      if (ms != 10) ms = ms - 5;
    }

    body.addEventListener('transitionend', async function () {
      await sleep(3000);
      let masses = document.querySelectorAll('.title');
      masses.forEach(mass => {
        mass.remove();
      });
    });
  }

  async function changeToFinalScreen() {
    hideElement(range);
    await massEffect();
    await sleep(3000);
    form.classList.add('hidden');
    await blinkElementToShow(logo, 3000, 3000);
    await displayElement(timer);
    displayElement(albumTitle);
    displayElement(TEST);
  }
});

async function thirdStepAction() {
  hideElement(timer);
  await blinkElementToHide(albumTitle, 3000, 3000, false);
  albumDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' + ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt' + ' eget. Tortor id aliquet lectus proin nibh nisl. Sagittis purus sit amet volutpat consequat' + ' mauris nunc. Enim neque volutpat ac tincidunt vitae semper quis lectus. Convallis convallis' + ' tellus id interdum velit laoreet id donec ultrices. Neque egestas congue quisque egestas diam in.' + ' Purus semper eget duis at tellus at urna condimentum. Eu non diam phasellus vestibulum lorem sed' + ' risus ultricies. Pharetra et ultrices neque ornare. Dignissim sodales ut eu sem integer vitae justo.' + ' Vulputate odio ut enim blandit. Urna condimentum mattis pellentesque id nibh tortor id aliquet.' + ' Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sit amet tellus cras adipiscing enim' + ' eu turpis. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Risus viverra' + ' adipiscing at in.';
  await displayElement(albumDescription);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56144" + '/');

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