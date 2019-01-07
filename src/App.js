import React, { Component } from 'react';
import './App.css';
import List from './component/List';
import Form from './component/Form';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			list1: ['hello', 'world'],
			list2: ['Hi'],
			list3: ['Yo'],
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLeft = this.handleLeft.bind(this);
		this.handleRight = this.handleRight.bind(this);
	}

	handleInput(e) {
		this.setState({ input: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState(({ input, list1 }) => {
			list1.push(input);
			return { input: '', list1 };
		});
	}

	handleLeft(listNum, cardIndex) {
		let text = '';

		switch (listNum) {
			case 1:
				break;
			case 2:
				text = this.state.list2[cardIndex];

				this.setState(({ list1, list2 }) => {
					list2.splice(cardIndex, 1);
					list1.push(text);
					return { list1, list2 };
				});
				break;
			case 3:
				text = this.state.list3[cardIndex];

				this.setState(({ list2, list3 }) => {
					list3.splice(cardIndex, 1);
					list2.push(text);
					return { list2, list3 };
				});
				break;
			default:
				break;
		}
	}

	handleRight(listNum, cardIndex) {
		let text = '';

		switch (listNum) {
			case 1:
				text = this.state.list1[cardIndex];

				this.setState(({ list1, list2 }) => {
					list1.splice(cardIndex, 1);
					list2.push(text);
					return { list1, list2 };
				});
				break;
			case 2:
				text = this.state.list2[cardIndex];

				this.setState(({ list2, list3 }) => {
					list2.splice(cardIndex, 1);
					list3.push(text);
					return { list2, list3 };
				});
				break;
			case 3:
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div className="App">
				<div>
					<Form
						text={this.state.input}
						handleInput={this.handleInput}
						handleSubmit={this.handleSubmit}
					/>
					<List
						listNum={1}
						cards={this.state.list1}
						handleLeft={this.handleLeft}
						handleRight={this.handleRight}
					/>
				</div>
				<List
					listNum={2}
					cards={this.state.list2}
					handleLeft={this.handleLeft}
					handleRight={this.handleRight}
				/>
				<List
					listNum={3}
					cards={this.state.list3}
					handleLeft={this.handleLeft}
					handleRight={this.handleRight}
				/>
			</div>
		);
	}
}

export default App;
