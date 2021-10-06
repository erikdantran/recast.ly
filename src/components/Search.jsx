import searchYouTube from '../lib/searchYoutube.js';

var Search = (props) => {
  // var inputHandlers = (event) => {
  //   console.log('Event value', event.target.value);
  //   props.search(event.target.value);
  //   // searchYouTube(event.target.value, props.cb);
  // };

  // var inputHandler = (event) => {
  //   console.log('inputEvent value', event.target.value);
  //   props.search(event.target.value);
  // };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text"
        // onClick={inputHandler}
        onChange={props.handleInputChange}
      />
      <button className="btn hidden-sm-down" onClick={props.searchYouTubeAPI}>
        <span className="glyphicon glyphicon-search"
        ></span>
      </button>
    </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


// / onClick={function (input) { onSearch('tutorials'); }}


// var onSearch = (input) => {
//   console.log('Entered');
//   searchYouTube(input, props.cb);
//   console.log('Entered');
// };