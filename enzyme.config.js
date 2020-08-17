/** Used in jest.config.js */
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const fetch = require('node-fetch');
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// If you're using the fetch API
// import fetch from 'node-fetch';
global.fetch = fetch;

