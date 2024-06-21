

const Text = (props) => {
  return (
    <p id="text"><span className="quotes">“</span>{props.quotes}<span className="quotes">”</span></p>
  );
};

Text.defaultProps = {quotes: "Lorem Ipsum..."};
/* PropTypes aren’t commonly used in modern React
Text.propTypes = { quotes: PropTypes.text.isRequired };
*/

export default Text;