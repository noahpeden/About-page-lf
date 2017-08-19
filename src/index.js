import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import ClientApp from './ClientApp';
import Weather from './Weather';
import Searches from './Searches'
import registerServiceWorker from './registerServiceWorker';

const App = () =>
	<BrowserRouter>
		<div className="app">
			<Route exact path="/" component={ClientApp} />
			<Route path="/weather" component={Weather} />
			<Route path="/history" component={Searches} />
		</div>
	</BrowserRouter>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
