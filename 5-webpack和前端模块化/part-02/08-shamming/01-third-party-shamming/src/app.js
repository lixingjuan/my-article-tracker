// import join from 'lodash/join';

console.log(_.join( ['全局','shamming'] ));


// 尝试全局exports
const { file, parse } = require('./global');

console.log({ file, parse });