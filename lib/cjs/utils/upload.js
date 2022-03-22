"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadToServer = uploadToServer;

var _toast = _interopRequireDefault(require("antd-mobile/es/components/toast"));

var _tslib = require("tslib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** 图片上传到服务器 */
function uploadToServer(file, uploadUrl, imgPreUrl) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var formData, res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData();
            formData.append('file', file);

            _toast["default"].show({
              icon: 'loading',
              content: '上传中',
              duration: 0,
              maskClickable: false
            });

            _context.next = 5;
            return fetch(uploadUrl, {
              method: 'POST',
              body: formData
            });

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;

            _toast["default"].clear();

            if (!(data.code === 200)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", imgPreUrl + data.data);

          case 14:
            _toast["default"].show({
              icon: 'fail',
              content: '上传失败'
            });

            return _context.abrupt("return", '');

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

;