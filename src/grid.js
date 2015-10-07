import React from 'react-native';

const {
  StyleSheet,
  View,
  Component,
} = React;

class Row extends Component {
	render(){
		return (
			<View style={[styles.row, this.props.rowStyle]}>
				{this.props.children}
			</View>
		)
	};
}

export default class Grid extends Component {
	render() {

		let self = this;
		let children = this.props.children;

		children = Array.isArray(children)?children:[children];

		let row = [];
		let rows = [];

		function isFullRow(){

			let span = 0;
			row.map(function(_row){
				span += _row.props.span;
			})

			if(span===24) return true;
			return false;
		}

		children.map(function(child, index){

			row.push(child);

			if(isFullRow()){
				rows.push(row);
				row = [];
			}
			
		});

		let GridComponent = rows.map(function(row, index){
			let content = row.map(function(_row){
				return _row;
			});
			return (
				<Row key={index} style={[styles.row, self.props.style]}>
					{content}
				</Row>
			)
		});


		if(GridComponent.length>1){
			return (
				<View style={this.props.style}>
					{GridComponent}
				</View>
			);
		}else if(GridComponent.length===1){
			return GridComponent[0];
		}else{
			return null;
		}
		
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
});