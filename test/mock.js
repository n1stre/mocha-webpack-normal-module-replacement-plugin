const mock = require('mock-require');
const defaultCustomer = require('../src/customer/default');
const fooCustomer = require('../src/customer/foo');

// import mock from 'mock-require';
// import defaultCustomer from '../src/customer/default';
// import fooCustomer from '../src/customer/foo';


const customerMock = (function () {
  switch (process.env.REACT_APP_CUSTOMER) {
    case 'foo': return fooCustomer;
    default: return defaultCustomer;
  }
}())

mock('../src/customer/CUSTOMER', customerMock);