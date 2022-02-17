import React, { useRef, useState } from 'react';
var classPrefix = 'ly-link-sider-bar';

var LinkSiderBar = function LinkSiderBar(props) {
  var tabs = props.tabs,
    defaultKey = props.defaultKey,
    renderItem = props.renderItem;

  var _useState = useState(defaultKey || tabs[0].key),
    activeKey = _useState[0],
    setActiveKey = _useState[1];

  var containerRef = useRef(null);

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

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: '' + classPrefix,
    },
    /*#__PURE__*/ React.createElement(
      'nav',
      {
        className: classPrefix + '-nav-wrap',
      },
      tabs.map(function(item, index) {
        return /*#__PURE__*/ React.createElement(
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
    /*#__PURE__*/ React.createElement(
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

export default /*#__PURE__*/ React.memo(LinkSiderBar);
