import React from 'react';


class VideoListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var video = this.props.video;
		const imageUrl = video.snippet.thumbnails.default.url;
		return (
			<li className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-image" src={imageUrl} />
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</li>
		)
	}
}

export default VideoListItem;