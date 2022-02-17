'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var classPrefix = 'ly-link-sider-bar';

var LinkSiderBar = function LinkSiderBar(props) {
  var tabs = props.tabs,
    defaultKey = props.defaultKey,
    renderItem = props.renderItem;

  var _useState = (0, _react.useState)(defaultKey || tabs[0].key),
    activeKey = _useState[0],
    setActiveKey = _useState[1];

  var containerRef = (0, _react.useRef)(null);

  var wrapScrollHandle = function wrapScrollHandle() {
    var scrollTop = containerRef.current.scrollTop;
    var childrens = containerRef.current.children;

    for (
      var i = 0;
      i <
      (childrens === null || childrens === void 0 ? void 0 : childrens.length);
      i++
    ) {
      // 距离屏幕上边距离
      var offsetTop = childrens[i].offsetTop;
      var elemH = childrens[i].clientHeight;

      if (offsetTop <= scrollTop && offsetTop + elemH > scrollTop) {
        setActiveKey(tabs[i].key);
      }
    }
  };

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: '' + classPrefix,
    },
    /*#__PURE__*/ _react['default'].createElement(
      'nav',
      {
        className: classPrefix + '-nav-wrap',
      },
      tabs.map(function(item, index) {
        return /*#__PURE__*/ _react['default'].createElement(
          'a',
          {
            href: '#' + item.key,
            className:
              classPrefix +
              '-nav-item ' +
              (activeKey === item.key ? 'activate' : ''),
            key: item.key,
          },
          item.title,
        );
      }),
    ),
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: classPrefix + '-item-wrap',
        ref: containerRef,
        onScroll: wrapScrollHandle,
      },
      tabs.map(function(item, index) {
        return renderItem(item);
      }),
    ),
  );
};

var _default = /*#__PURE__*/ _react['default'].memo(LinkSiderBar);

exports['default'] = _default;
