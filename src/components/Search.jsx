import searchYouTube from '../lib/searchYoutube.js';

var Search = (props) => {

  return (
    <div className="search-bar form-inline">
      <form>
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onChange={props.search}>
          <span className="glyphicon glyphicon-search"
          ></span>
        </button>
      </form>
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