export function getLocation() {
  return new Promise(function (resolve, reject) {
    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000 // 超过10秒后停止定位，默认：5s

      });
      geolocation.getCurrentPosition(function (status, _ref) {
        var position = _ref.position;

        if (status === 'complete') {
          var result = {
            lng: position.lng,
            lat: position.lat
          };
          resolve(result);
        } else {
          reject('获取点位失败');
        }
      });
    });
  });
}
/**
 * 经纬度逆地址解析，获取地址信息
 * @param location { lng: string, lat: string }
 */

export function getAddressName(location) {
  return new Promise(function (resolve, reject) {
    var geocoder = new AMap.Geocoder();
    geocoder.getAddress(location, function (status, result) {
      if (status === 'complete' && result.regeocode) {
        resolve(result.regeocode.formattedAddress);
      } else {
        reject('无效的点位');
      }
    });
  });
}