"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AlertDialog = _interopRequireDefault(require("./components/AlertDialog"));

var _ConfirmDialog = _interopRequireDefault(require("./components/ConfirmDialog"));

var _PromptDialog = _interopRequireDefault(require("./components/PromptDialog"));

var _DialogContext = _interopRequireDefault(require("./DialogContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var DialogProvider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DialogProvider, _React$PureComponent);

  var _super = _createSuper(DialogProvider);

  function DialogProvider() {
    var _this;

    _classCallCheck(this, DialogProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      alertDialog: null,
      confirmDialog: null,
      promptDialog: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleAlertDialogClose", function (value) {
      var alertDialog = _this.state.alertDialog;

      _this.setState({
        alertDialog: _objectSpread(_objectSpread({}, alertDialog), {}, {
          open: false
        })
      });

      return alertDialog.resolve(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirmDialogClose", function (value) {
      var confirmDialog = _this.state.confirmDialog;

      _this.setState({
        confirmDialog: _objectSpread(_objectSpread({}, confirmDialog), {}, {
          open: false
        })
      });

      return value ? confirmDialog.resolve(value) : confirmDialog.reject();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePromptDialogClose", function (value) {
      var promptDialog = _this.state.promptDialog;

      _this.setState({
        promptDialog: _objectSpread(_objectSpread({}, promptDialog), {}, {
          open: false
        })
      });

      return value ? promptDialog.resolve(value) : promptDialog.reject();
    });

    _defineProperty(_assertThisInitialized(_this), "handleExited", function () {
      _this.setState({
        alertDialog: null,
        confirmDialog: null,
        promptDialog: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "alert", function (options) {
      return typeof options === 'string' ? new Promise(function (resolve, reject) {
        _this.setState({
          alertDialog: {
            message: options,
            resolve: resolve,
            reject: reject,
            open: true
          }
        });
      }) : new Promise(function (resolve, reject) {
        _this.setState({
          alertDialog: _objectSpread(_objectSpread({}, options), {}, {
            resolve: resolve,
            reject: reject,
            open: true
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "confirm", function (options) {
      return typeof options === 'string' ? new Promise(function (resolve, reject) {
        _this.setState({
          confirmDialog: {
            message: options,
            resolve: resolve,
            reject: reject,
            open: true
          }
        });
      }) : new Promise(function (resolve, reject) {
        _this.setState({
          confirmDialog: _objectSpread(_objectSpread({}, options), {}, {
            resolve: resolve,
            reject: reject,
            open: true
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prompt", function (options) {
      return typeof options === 'string' ? new Promise(function (resolve, reject) {
        _this.setState({
          promptDialog: {
            message: options,
            resolve: resolve,
            reject: reject,
            open: true
          }
        });
      }) : new Promise(function (resolve, reject) {
        _this.setState({
          promptDialog: _objectSpread(_objectSpread({}, options), {}, {
            resolve: resolve,
            reject: reject,
            open: true
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dialog", {
      alert: _this.alert,
      confirm: _this.confirm,
      prompt: _this.prompt
    });

    return _this;
  }

  _createClass(DialogProvider, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          alertDialog = _this$state.alertDialog,
          confirmDialog = _this$state.confirmDialog,
          promptDialog = _this$state.promptDialog;
      return /*#__PURE__*/_react["default"].createElement(_DialogContext["default"].Provider, {
        value: {
          dialog: this.dialog
        }
      }, children, alertDialog && /*#__PURE__*/_react["default"].createElement(_AlertDialog["default"], _extends({}, alertDialog, {
        open: alertDialog.open,
        onClose: this.handleAlertDialogClose,
        onExited: this.handleExited
      })), confirmDialog && /*#__PURE__*/_react["default"].createElement(_ConfirmDialog["default"], _extends({}, confirmDialog, {
        open: confirmDialog.open,
        onClose: this.handleConfirmDialogClose,
        onExited: this.handleExited
      })), promptDialog && /*#__PURE__*/_react["default"].createElement(_PromptDialog["default"], _extends({}, promptDialog, {
        open: promptDialog.open,
        onClose: this.handlePromptDialogClose,
        onExited: this.handleExited
      })));
    }
  }]);

  return DialogProvider;
}(_react["default"].PureComponent);

var _default = DialogProvider;
exports["default"] = _default;