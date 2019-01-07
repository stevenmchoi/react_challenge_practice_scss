import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { listNum, cardIndex, handleLeft, handleRight } = this.props;

		const leftClick = () => handleLeft(listNum, cardIndex);
		const rightClick = () => handleRight(listNum, cardIndex);

		return (
			<div>
				<p>{this.props.text}</p>
				<div className="card-buttons">
					<button onClick={leftClick}>{'<-'}</button>
					<button onClick={rightClick}>{'->'}</button>
				</div>
			</div>
		);
	}
}

export default Card;
