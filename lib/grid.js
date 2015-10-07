'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var StyleSheet = _reactNative2['default'].StyleSheet;
var View = _reactNative2['default'].View;
var Component = _reactNative2['default'].Component;

var Row = (function (_Component) {
	_inherits(Row, _Component);

	function Row() {
		_classCallCheck(this, Row);

		_get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Row, [{
		key: 'render',
		value: function render() {
			return _reactNative2['default'].createElement(
				View,
				{ style: [styles.row, this.props.rowStyle] },
				this.props.children
			);
		}
	}]);

	return Row;
})(Component);

var Grid = (function (_Component2) {
	_inherits(Grid, _Component2);

	function Grid() {
		_classCallCheck(this, Grid);

		_get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Grid, [{
		key: 'render',
		value: function render() {

			var self = this;
			var children = this.props.children;

			children = Array.isArray(children) ? children : [children];

			var row = [];
			var rows = [];

			function isFullRow() {

				var span = 0;
				row.map(function (_row) {
					span += _row.props.span;
				});

				if (span === 24) return true;
				return false;
			}

			children.map(function (child, index) {

				row.push(child);

				if (isFullRow()) {
					rows.push(row);
					row = [];
				}
			});

			var GridComponent = rows.map(function (row, index) {
				var content = row.map(function (_row) {
					return _row;
				});
				return _reactNative2['default'].createElement(
					Row,
					{ key: index, style: [styles.row, self.props.style] },
					content
				);
			});

			if (GridComponent.length > 1) {
				return _reactNative2['default'].createElement(
					View,
					{ style: this.props.style },
					GridComponent
				);
			} else if (GridComponent.length === 1) {
				return GridComponent[0];
			} else {
				return null;
			}
		}
	}]);

	return Grid;
})(Component);

exports['default'] = Grid;

var styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
});
module.exports = exports['default'];