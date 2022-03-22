"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./video-uploader.css");

var _videoUploader2 = require("./video-uploader");

var _videoPlayerDialog = _interopRequireDefault(require("./video-player-dialog"));

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_videoUploader2.VideoUploader, {
  Dialog: _videoPlayerDialog["default"]
});

exports["default"] = _default;