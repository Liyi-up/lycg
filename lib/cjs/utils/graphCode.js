"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNum = exports.randomColor = exports.isFunction = exports.STR = exports.DATA_LENGTH = exports.DATA = void 0;
var STR = 'A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,q,w,e,r,t,y,u,i,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m';
exports.STR = STR;
var DATA = STR.split(',');
exports.DATA = DATA;
var DATA_LENGTH = DATA.length;
/**
 * 生成随机色
 * @returns
 */

exports.DATA_LENGTH = DATA_LENGTH;

var randomColor = function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


exports.randomColor = randomColor;

var isFunction = function isFunction(FunName) {
  return typeof FunName === 'function';
}; // 随机数字


exports.isFunction = isFunction;

var randomNum = function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
};

exports.randomNum = randomNum;