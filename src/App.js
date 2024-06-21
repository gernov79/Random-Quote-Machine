import './App.scss';
import React from 'react';
import QuoteBox from './QuoteBox';
import { quotes } from "./quotesAuthorsData";
import { authors } from "./quotesAuthorsData";

/* New way of making components, but it doesn't work in the freeCodeCamp tutorial and tests: 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Components: }
      <QuoteBox />
    </div>
  );
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "", 
      quotes: quotes, 
      authors: authors
    };
    this.changeQuote = this.changeQuote.bind(this);
  }
  changeQuote = () => {
    this.setState( state => ({
      randomNumber: Math.floor(Math.random() * state.quotes.length )
    }));
  }
  componentDidMount() {
      this.setState( state => ({
        randomNumber: Math.floor(Math.random() * state.quotes.length )
      }));
  }
  render() {
    return (
      <div className="App container-fluid">
          {/* Components: */}
          <QuoteBox 
            quotes={this.state.quotes[this.state.randomNumber]} 
            authors={this.state.authors[this.state.randomNumber]} 
            link1="twitter.com/intent/tweet" 
            link2="https://www.tumblr.com/widgets/share/tool" 
            changeQuote={this.changeQuote}
           />
      </div>
    );
  }
};

export default App;
