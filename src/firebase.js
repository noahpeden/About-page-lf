
import firebase from 'firebase';
let config = {
	apiKey: 'AIzaSyCdUuv5HIN9YPMrnFWpFZ09maRVctZVIaY',
	authDomain: 'dagonit-weather.firebaseapp.com',
	databaseURL: 'https://dagonit-weather.firebaseio.com',
	projectId: 'dagonit-weather',
	storageBucket: 'dagonit-weather.appspot.com',
	messagingSenderId: '195449909187'
};
let fire = firebase.initializeApp(config);
export default fire;
