var officeName = ['xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'doc', 'docx'];
var pdfName = ['pdf'];
/**
 * 判断是否为 office 文件
 * @param url 文件链接
 * @returns boolean
 */

export var isOffice = function isOffice(url) {
  var urlList = url === null || url === void 0 ? void 0 : url.split('.');

  if (urlList.length <= 1) {
    return false;
  }

  var endName = urlList === null || urlList === void 0 ? void 0 : urlList[(urlList === null || urlList === void 0 ? void 0 : urlList.length) - 1];

  if (officeName.includes(endName === null || endName === void 0 ? void 0 : endName.toLocaleLowerCase())) {
    return true;
  } else {
    return false;
  }
};
/**
 * 判断是否为 pdf 文件
 * @param url 文件链接
 * @returns boolean
 */

export var isPdf = function isPdf(url) {
  var urlList = url === null || url === void 0 ? void 0 : url.split('.');

  if (urlList.length <= 1) {
    return false;
  }

  var endName = urlList === null || urlList === void 0 ? void 0 : urlList[(urlList === null || urlList === void 0 ? void 0 : urlList.length) - 1];

  if (pdfName.includes(endName === null || endName === void 0 ? void 0 : endName.toLocaleLowerCase())) {
    return true;
  } else {
    return false;
  }
};