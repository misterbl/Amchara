import { expect } from 'chai';
import sinon from 'sinon';
import 'babel-polyfill';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

global.expect = expect;
global.sinon = sinon;

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;
global.document = document;


Object
  .keys(document.defaultView)
  .forEach((property) => {
    if (!global[property]) global[property] = document.defaultView[property];
  });

global.navigator = {
  userAgent: 'node.js',
};


require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;
