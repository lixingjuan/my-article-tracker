import _ from 'lodash';
import numRef from './ref.json';

export const numToWord = (num) => _.reduce(numRef, (tol, ref)=> ref.num === num ? ref.word : tol, 1)

export const wordToNum = (word) => _.reduce(numRef, (tol, ref) => ref.word === word ? ref.word : tol,1)

