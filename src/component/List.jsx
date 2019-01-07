import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		cards: this.props.cards,
	// 	};
	// }

	render() {
		return (
			<ul>
				{this.props.cards.map((text, cardIndex) => {
					return (
						<li key={text + cardIndex.toString()}>
							<Card
								cardIndex={cardIndex}
								listNum={this.props.listNum}
								text={text}
								handleLeft={this.props.handleLeft}
								handleRight={this.props.handleRight}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default List;
