'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _class,_temp2;var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _Constants=require('../Constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Form=(_temp2=_class=function(_React$Component){_inherits(Form,_React$Component);function Form(){var _temp,_this,_ret;_classCallCheck(this,Form);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,_React$Component.call.apply(_React$Component,[this].concat(args))),_this),_this.state={fields:{},canSubmit:false,isSubmitting:false},_temp),_possibleConstructorReturn(_this,_ret);}Form.prototype.getChildContext=function getChildContext(){return{setField:this.setField.bind(this),initField:this.initField.bind(this),removeField:this.removeField.bind(this),getField:this.getField.bind(this),fields:this.state.fields,setHasBeenTouched:this.setHasBeenTouched.bind(this),canSubmit:this.state.canSubmit,isSubmitting:this.state.isSubmitting,submit:this.submitForm.bind(this)};};Form.prototype.initField=function initField(_ref){var name=_ref.name,value=_ref.value,validator=_ref.validator,hasDefaultValue=_ref.hasDefaultValue,rest=_objectWithoutProperties(_ref,['name','value','validator','hasDefaultValue']);var fields=this.state.fields;var onFieldUpdate=this.props.onFieldUpdate;fields[name]=_extends({value:value,validator:validator,hasDefaultValue:hasDefaultValue,hasBeenTouched:false,error:null,displayError:false},rest);fields[name].error=this.getError(name,fields[name]);var canSubmit=this.canSubmit();this.setState({fields:fields,canSubmit:canSubmit});onFieldUpdate(name,fields[name]);};Form.prototype.setField=function setField(_ref2){var _extends2;var name=_ref2.name,value=_ref2.value,rest=_objectWithoutProperties(_ref2,['name','value']);var fields=this.state.fields;var onFieldUpdate=this.props.onFieldUpdate;var field=fields[name];var oldValue=field.value;var displayError=field.displayError||value!=oldValue&&field.hasBeenTouched;var newField=_extends({},field,{value:value,error:field.error,displayError:displayError},rest);newField.error=this.getError(name,newField);var newFields=_extends({},fields,(_extends2={},_extends2[name]=newField,_extends2));var canSubmit=this.canSubmit(newFields);this.setState({fields:newFields,canSubmit:canSubmit});onFieldUpdate(name,newField);};Form.prototype.removeField=function removeField(name){var fields=this.state.fields;var onFieldUpdate=this.props.onFieldUpdate;var newFields=_extends({},fields);delete newFields[name];var canSubmit=this.canSubmit(newFields);this.setState({fields:newFields,canSubmit:canSubmit});onFieldUpdate(name,null);};Form.prototype.getField=function getField(name){return this.state.fields[name];};Form.prototype.setHasBeenTouched=function setHasBeenTouched(name){var touched=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var fields=this.state.fields;var onFieldUpdate=this.props.onFieldUpdate;var newFields=_extends({},fields);var error=this.getError(name,fields[name]);newFields[name]=_extends({},newFields[name],{hasBeenTouched:touched,error:error,displayError:touched});var canSubmit=this.canSubmit();this.setState({fields:newFields,canSubmit:canSubmit});onFieldUpdate(name,newFields[name]);};Form.prototype.getError=function getError(name,field){var fields=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.state.fields;var validator=field.validator;return validator?validator(name,field,fields):null;};Form.prototype.canSubmit=function canSubmit(){var fields=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.state.fields;for(var _key2 in fields){if(fields[_key2].error){return false;}}return true;};Form.prototype.submitForm=function submitForm(){var submit=this.props.submit;var fields=this.state.fields;this.setState({isSubmitting:true});var values={};for(var _key3 in fields){values[_key3]=fields[_key3].value;}submit(values,this.submitFinished.bind(this));};Form.prototype.submitFinished=function submitFinished(errors){var fields=this.state.fields;var newFields=_extends({},fields);for(var _key4 in errors){newFields[_key4]=_extends({},newFields[_key4],{error:errors[_key4]});}this.setState({isSubmitting:false,fields:newFields});this.setState({canSubmit:this.canSubmit(newFields)});};Form.prototype.render=function render(){var children=this.props.children;return _react2.default.createElement('form',{className:'forms-form'},children);};return Form;}(_react2.default.Component),_class.childContextTypes=_Constants.CONTEXT_TYPES,_class.propTypes={submit:_propTypes2.default.func.isRequired,onFieldUpdate:_propTypes2.default.func},_class.defaultProps={onFieldUpdate:function onFieldUpdate(){}},_temp2);exports.default=Form;module.exports=exports['default'];