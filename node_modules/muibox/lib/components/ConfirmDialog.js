"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));

var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ConfirmDialog(props, context) {
  var open = props.open,
      _onClose = props.onClose,
      onExited = props.onExited,
      title = props.title,
      message = props.message,
      ok = props.ok,
      cancel = props.cancel;
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullWidth: true,
    open: open,
    onClose: function onClose() {
      return _onClose(false);
    },
    "aria-labelledby": "confirm-dialog-title",
    "aria-describedby": "confirm-dialog-message",
    TransitionProps: {
      onExited: onExited
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "confirm-dialog-title"
  }, title), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, typeof message === "string" ? /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "confirm-dialog-message"
  }, message) : message), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick() {
      return _onClose(false);
    },
    color: cancel.color,
    variant: cancel.variant,
    startIcon: cancel.startIcon,
    endIcon: cancel.endIcon
  }, cancel.text), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick() {
      return _onClose(true);
    },
    color: ok.color,
    variant: ok.variant,
    startIcon: ok.startIcon,
    endIcon: ok.endIcon,
    autoFocus: true
  }, ok.text)));
}

ConfirmDialog.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onExited: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  message: _propTypes["default"].node,
  ok: _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    startIcon: _propTypes["default"].element,
    endIcon: _propTypes["default"].element
  }),
  cancel: _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    startIcon: _propTypes["default"].element,
    endIcon: _propTypes["default"].element
  })
};
ConfirmDialog.defaultProps = {
  open: false,
  title: '',
  ok: {
    text: 'OK',
    color: 'primary',
    variant: 'text'
  },
  cancel: {
    text: 'Cancel',
    color: 'primary',
    variant: 'text'
  }
};
var _default = ConfirmDialog;
exports["default"] = _default;