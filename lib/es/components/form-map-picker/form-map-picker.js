import _Dialog from "antd-mobile/es/components/dialog";
import { __awaiter } from "tslib";
import React, { useState, useEffect, useRef } from 'react';
import { RightOutline } from 'antd-mobile-icons';
import { getAddressName, getLocation } from '../../utils/amap';
import isEmpty from 'lodash/isEmpty';
var classPrefix = "ly-form-map-picker";
export var FormMapPicker = function FormMapPicker(props) {
  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请选择' : _props$placeholder,
      _props$title = props.title,
      title = _props$title === void 0 ? '选择您的点位' : _props$title,
      _props$value = props.value,
      value = _props$value === void 0 ? {} : _props$value,
      onChange = props.onChange,
      _props$zoom = props.zoom,
      zoom = _props$zoom === void 0 ? 16 : _props$zoom;

  var _useState = useState(placeholder),
      text = _useState[0],
      setText = _useState[1];

  var locationRef = useRef(value);
  useEffect(function () {
    if (isEmpty(value)) {
      getLocation().then(function (res) {
        locationRef.current = res;
      });
    } else {
      getAddressName(value).then(function (res) {
        setText(res);
      });
    }
  }, [value]);

  var drawMap = function drawMap() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
      var map = new AMap.Map('container', {
        zoom: zoom,
        scrollWheel: false,
        center: [locationRef.current.lng, locationRef.current.lat]
      });
      var positionPicker = new PositionPicker({
        mode: 'dragMarker',
        map: map
      });
      positionPicker.on('success', function (result) {
        map.setCenter(result.position);
        locationRef.current = {
          lng: result.position.lng,
          lat: result.position.lat
        };
      });
      positionPicker.start();
      map.panBy(0, 1);
      map.addControl(new AMap.ToolBar({
        liteStyle: true
      }));
    });
  };

  var DialogContent = function DialogContent() {
    useEffect(function () {
      drawMap();
    }, []);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: classPrefix + "-subtitle"
    }, "\u62D6\u52A8\u56FE\u6807\uFF0C\u9009\u62E9\u60A8\u7684\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
      id: "container",
      className: classPrefix + "-dialog"
    }));
  };

  var handleClick = function handleClick() {
    _Dialog.confirm({
      title: title,
      content: /*#__PURE__*/React.createElement(DialogContent, null),
      onConfirm: function onConfirm() {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  getAddressName(locationRef.current).then(function (res) {
                    setText(res);
                  });
                  onChange === null || onChange === void 0 ? void 0 : onChange(locationRef.current);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "" + classPrefix,
    onClick: function onClick() {
      return handleClick();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-text"
  }, text), /*#__PURE__*/React.createElement(RightOutline, {
    className: classPrefix + "-icon",
    color: "var(--adm-color-weak)"
  })));
};