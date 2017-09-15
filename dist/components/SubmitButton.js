'use strict';exports.__esModule=true;var _dec,_class,_class2,_temp;var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);var _FieldMixin=require('./common/FieldMixin');var _FieldMixin2=_interopRequireDefault(_FieldMixin);require('../styles/SubmitButton.css');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SubmitButton=(_dec=_reactMixin2.default.decorate(_FieldMixin2.default),_dec(_class=(_temp=_class2=function(_React$Component){_inherits(SubmitButton,_React$Component);function SubmitButton(){_classCallCheck(this,SubmitButton);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}SubmitButton.prototype.shouldComponentUpdate=function shouldComponentUpdate(_nextState,_nextProps,nextContext){return nextContext.canSubmit!=this.canSubmit()||nextContext.isSubmitting!=this.isSubmitting();};SubmitButton.prototype.render=function render(){var _props=this.props,isSubmittingText=_props.isSubmittingText,canSubmitText=_props.canSubmitText,cannotSubmitText=_props.cannotSubmitText;if(this.isSubmitting()){return _react2.default.createElement('div',{className:'forms-submit-button forms-submitting'},isSubmittingText);}else if(this.canSubmit()){return _react2.default.createElement('div',{className:'forms-submit-button forms-can-submit',onClick:this.submit.bind(this)},canSubmitText);}else{return _react2.default.createElement('div',{className:'forms-submit-button forms-cannot-submit'},cannotSubmitText);}};return SubmitButton;}(_react2.default.Component),_class2.propTypes={canSubmitText:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.element]),cannotSubmitText:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.element]),isSubmittingText:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.element])},_temp))||_class);exports.default=SubmitButton;module.exports=exports['default'];