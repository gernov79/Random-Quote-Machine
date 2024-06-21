

const NewQuote = (props) => {
  return <button type="button" onClick={props.changeQuote} id="new-quote" className="btn btn-dark">New quote</button>
};

export default NewQuote;