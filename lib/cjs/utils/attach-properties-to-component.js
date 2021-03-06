"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachPropertiesToComponent = attachPropertiesToComponent;

/* eslint-disable no-prototype-builtins */

/* eslint-disable @typescript-eslint/no-explicit-any */
function attachPropertiesToComponent(component, properties) {
  var ret = component;

  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }

  return ret;
}