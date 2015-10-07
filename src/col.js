import React from 'react-native';

const {
  StyleSheet,
  View,
  Component,
} = React;

export default class Col extends Component {
	render() {
		return (
			<View style={[styles.col, { flex: parseInt(this.props.span) }, this.props.style]}>{this.props.children}</View>
		)
	}
}

const styles = StyleSheet.create({
	col: {
	}
});