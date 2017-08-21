import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ClientApp from './components/ClientApp';
import Searches from './components/Searches';
import registerServiceWorker from './registerServiceWorker';

const App = () =>
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={ClientApp} />
				<Route path="/history" component={Searches} />
			</Switch>
		</div>
	</BrowserRouter>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
