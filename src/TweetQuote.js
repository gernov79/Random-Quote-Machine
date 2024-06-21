

const TweetQuote = (props) => {
  return (
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark" id="tweet-quote">
        <i className="fa fa-twitter"></i>
      </a>
  );
};

export default TweetQuote;