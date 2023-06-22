import PropTypes from 'prop-types';
import { Notification } from './Notification';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total > 0 ? (
    <>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>{' '}
    </>
  ) : (
    <Notification message="There is no feedback" />
  );

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };