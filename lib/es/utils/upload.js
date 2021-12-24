import _Toast from 'antd-mobile/es/components/toast';
import { __awaiter } from 'tslib';

/** 图片上传到服务器 */
export function uploadToServer(file, uploadUrl, imgPreUrl) {
  return __awaiter(
    this,
    void 0,
    void 0,
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var formData, res, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              formData = new FormData();
              formData.append('file', file);

              _Toast.show({
                icon: 'loading',
                content: '上传中',
                duration: 0,
                maskClickable: false,
              });

              _context.next = 5;
              return fetch(uploadUrl, {
                method: 'POST',
                body: formData,
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              data = _context.sent;

              _Toast.clear();

              if (!(data.code === 200)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt('return', imgPreUrl + data.data);

            case 14:
              _Toast.show({
                icon: 'fail',
                content: '上传失败',
              });

              return _context.abrupt('return', '');

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }),
  );
}
