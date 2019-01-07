import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<input value={this.props.text} onChange={this.props.handleInput} />
				<button>Submit</button>
			</form>
		);
	}
}

export default Form;
