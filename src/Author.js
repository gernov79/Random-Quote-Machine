

const Author = (props) => {
  return (
      <p id="author"><span className="author-line">~</span>{props.authors}</p>
    );
};

Author.defaultProps = {authors: "Author"};
/* PropTypes aren’t commonly used in modern React
Author.propTypes = { authors: PropTypes.text.isRequired };
*/

export default Author;