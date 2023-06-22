import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
};