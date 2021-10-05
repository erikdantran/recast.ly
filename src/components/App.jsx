import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
// import searchYouTube from '../lib/searchYoutube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData,
      errorPresent: false,
      searchQuery: ''
    };

    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
  }

  handleSearchQuery(query) {
    this.setState({searchQuery: query});
  }

  searchResults(results) {
    this.setState({allVideos: results});
    this.setState({currentVideo: results[0]});
  }

  handleVideoChange(video) {
    this.setState({currentVideo: video});
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.handleSearchQuery} cb={this.searchResults}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} videoChange={this.handleVideoChange}/>
          </div>
        </div>
      </div>
    );
  }
}


// ReactDOM.render(<App />, document.getElementById("app"));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

