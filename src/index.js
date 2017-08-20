import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ClientApp from './ClientApp';
import Weather from './Weather';
import Searches from './Searches';
import registerServiceWorker from './registerServiceWorker';

const App = () =>
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={ClientApp} />
				<Route path="/weather" component={Weather} />
				<Route path="/history" component={Searches} />
			</Switch>
		</div>
	</BrowserRouter>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
