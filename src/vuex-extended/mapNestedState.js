import { get as lodashGet } from 'lodash';

/**
 *
 * Checks whether the value is an object
 * @param {Object} obj
 * @return {Boolean}
 */

function isObject (obj) {
  return obj instanceof Object && !Array.isArray(obj) && !(obj instanceof Function);
}

/**
 *
 * @param {String} moduleName Name of store module
 * @param {Array} path Path to the state variable
 * @return {obj} obj with getter set to return state value
 */

function getStateValue (moduleName, path) {
  return {
    get () {
      if (moduleName !== 'root' && !this.$store.state[moduleName]) {
        throw new Error(`[vuex-extension] mapNestedState: ${moduleName} module does not exist. Please pass a valid module name`);
      }

      return lodashGet(this.$store.state, path);
    },
  };
}

/**
 *
 * @param {String} pathStr Dot notation path string
 * @return {Array} array of path strings
 */

function convertDotStringToArray (pathStr) {
  return pathStr.replace(/(\[)|(\])/g, (_, p1) => {
    if (p1) return '.';
    return '';
  }).split('.');
}

/**
 * Returns object of nested state vals mapped to alias'
 * @param {Object} obj { storeModule: { alias: path } }
 * @return {Object}
 */

export default function mapNestedState (obj) {
  if (!isObject(obj)) {
    throw new Error('[vuex-extension] mapNestedState: mapper parameter must be an Object eg. { storeModule: { alias: path } }');
  }

  const returnObj = {};

  Object.keys(obj).forEach((moduleName) => {
    // iterate through the module obj
    // set alias on return obj
    // split dot notation string
    // build a new path array with moduleName and path
    // pass path to getStateValue and assign value to alias
    Object.keys(obj[moduleName]).forEach(alias => {
      const dotNotationPathString = obj[moduleName][alias];
      const fullPathArray = [];
      // root represents the store index
      if (moduleName !== 'root') fullPathArray[0] = moduleName;

      if (typeof dotNotationPathString !== 'string') {
        throw new TypeError('[vuex-extension] mapNestedState: path to state value must be of type String');
      }

      fullPathArray.push(...convertDotStringToArray(dotNotationPathString));
      returnObj[alias] = getStateValue(moduleName, fullPathArray);
    });
  });

  return returnObj;
}
