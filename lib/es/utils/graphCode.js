export var STR =
  'A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m';
export var DATA = STR.split(',');
export var DATA_LENGTH = DATA.length;
/**
 * 生成随机色
 * @returns
 */

export var randomColor = function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};
export var isFunction = function isFunction(FunName) {
  return typeof FunName === 'function';
}; // 随机数字

export var randomNum = function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
};
