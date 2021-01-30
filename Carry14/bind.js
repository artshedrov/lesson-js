'use strict'

const log = (base, n) => Math.log(n) / Math.log(base);

//usage

const lg = log.bind(null, 10);
const ln = log.bind(null, Math.E);

console.log('lg(5) = ' + lg(5));
console.log('lg(5) = ' + ln(5));