"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _DialogContext = _interopRequireDefault(require("./DialogContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useDialog() {
  var _useContext = (0, _react.useContext)(_DialogContext["default"]),
      dialog = _useContext.dialog;

  return dialog;
}

var _default = useDialog;
exports["default"] = _default;