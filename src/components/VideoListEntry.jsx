var VideoListEntry = (props) => {
  var onTitleClick = () => {
    console.log('I got clicked');
    props.videoChange(props.video);
  };

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={onTitleClick}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


// {
//   "video": {
//     "kind": "youtube#searchResult",
//     "etag": "bwdNgV-HSrz_Ep5y0UQTEE9c7f4",
//     "id": "{kind: \"youtube#video\", videoId: \"dYh6R4Jhxoo\"}",
//     "snippet": {
//       "publishedAt": "2020-11-24T17:00:10Z",
//       "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
//       "title": "Kids React To Adult Jokes In Kids&#39; Shows (SpongeBob, Animaniacs, Steven Universe &amp; More!)",
//       "description": "Kids React to adult jokes in kids' TV shows (SpongeBob, StevenUniverse, and more!) Check out previous episodes of this series here! https://bit.ly/39a6Zli Join ...",
//       "thumbnails": {
//         "default": "{height: 90, url: \"https://i.ytimg.com/vi/dYh6R4Jhx…}",
//         "medium": "{height: 180, url: \"https://i.ytimg.com/vi/dYh6R4Jh…}",
//         "high": "{height: 360, url: \"https://i.ytimg.com/vi/dYh6R4Jh…}"
//       },
//       "channelTitle": "REACT",
//       "liveBroadcastContent": "none",
//       "publishTime": "2020-11-24T17:00:10Z"
//     }
//   }
// }