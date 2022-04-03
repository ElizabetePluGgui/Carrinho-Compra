"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PromptDialog = /*#__PURE__*/function (_React$Component) {
  _inherits(PromptDialog, _React$Component);

  var _super = _createSuper(PromptDialog);

  function PromptDialog() {
    var _this;

    _classCallCheck(this, PromptDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.defaultValue
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    return _this;
  }

  _createClass(PromptDialog, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
          open = _this$props.open,
          _onClose = _this$props.onClose,
          onExited = _this$props.onExited,
          title = _this$props.title,
          message = _this$props.message,
          placeholder = _this$props.placeholder,
          ok = _this$props.ok,
          cancel = _this$props.cancel,
          required = _this$props.required,
          defaultValue = _this$props.defaultValue,
          inputType = _this$props.inputType;
      return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        fullWidth: true,
        open: open,
        onClose: function onClose() {
          return _onClose(null);
        },
        "aria-labelledby": "prompt-dialog-title",
        "aria-describedby": "prompt-dialog-message",
        TransitionProps: {
          onExited: onExited
        }
      }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
        id: "prompt-dialog-title"
      }, title), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, typeof message === "string" ? /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
        id: "confirm-dialog-message"
      }, message) : message, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "prompt-dialog-text-field",
        onChange: this.handleChange,
        defaultValue: defaultValue,
        required: true,
        placeholder: placeholder,
        margin: "dense",
        fullWidth: true,
        type: inputType,
        autoFocus: true
      })), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: function onClick() {
          return _onClose(null);
        },
        color: cancel.color,
        variant: cancel.variant,
        startIcon: cancel.startIcon,
        endIcon: cancel.endIcon
      }, cancel.text), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: function onClick() {
          return _onClose(value);
        },
        color: ok.color,
        variant: ok.variant,
        disabled: required && !value,
        startIcon: ok.startIcon,
        endIcon: ok.endIcon
      }, ok.text)));
    }
  }]);

  return PromptDialog;
}(_react["default"].Component);

PromptDialog.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onExited: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  message: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
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
  }),
  required: _propTypes["default"].bool,
  inputType: _propTypes["default"].oneOf(['string', 'password']),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
PromptDialog.defaultProps = {
  open: false,
  title: '',
  placeholder: '',
  ok: {
    text: 'OK',
    color: 'primary',
    variant: 'text'
  },
  cancel: {
    text: 'Cancel',
    color: 'primary',
    variant: 'text'
  },
  required: false
};
var _default = PromptDialog;
exports["default"] = _default;