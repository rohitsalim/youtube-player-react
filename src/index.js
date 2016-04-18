import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyArnRbVm5SKpPUE27161Mf8kXwVf4B2-dQ';



// Create a new component . 
// This component should produce some HTML

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };
		YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			// Equivalent to this.setState({ videos: videos }); -> ES6 will allow the shorter syntax if the key and value are the same value
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}


// This component should be added to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
