import searchYouTube from '../lib/searchYoutube.js';

var Search = (props) => {
  var handler = (event) => {
    console.log('Event value', event.target.value);
    props.search(event.target.value);
    searchYouTube(event.target.value, props.cb);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={handler}/>
      <button className="btn hidden-sm-down">
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