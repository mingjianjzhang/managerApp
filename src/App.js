import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'

class App extends Component {

	componentWillMount(){
		const config = {
	    apiKey: "AIzaSyAu-Dky-VX8ynsCjp3ZNGcLizy_8LLnzFw",
	    authDomain: "mana-cabf3.firebaseapp.com",
	    databaseURL: "https://mana-cabf3.firebaseio.com",
	    projectId: "mana-cabf3",
	    storageBucket: "mana-cabf3.appspot.com",
	    messagingSenderId: "475357412501"
	  };

	  firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore()}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		)
	}
}

export default App;

