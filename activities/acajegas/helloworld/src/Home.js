import React, {Component} from 'react';
import logo from './tenor.gif';

class Home extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>
						Ang Pambansang Ibon ng Pilipinas!
					</h2>
				</header>
			</div>
		);
	}
}

export default Home;