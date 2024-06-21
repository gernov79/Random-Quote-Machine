import React from 'react';
import Text from './Text';
import Author from './Author';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';
import TumblrQuote from './TumblrQuote';

const QuoteBox = (props) => {
  return (
      <div id="quote-box">
        {/* Components: */}
        <Text quotes={props.quotes} />
        <Author authors={props.authors} />
        <div id="links">
          <span><TweetQuote link={props.link1} /></span> <span><TumblrQuote link={props.link2} /></span>
          <span><NewQuote changeQuote={props.changeQuote} /></span>
        </div>
      </div>
  );
};

export default QuoteBox;