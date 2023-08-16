import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/Feedback';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = React.useState({
    good: 0,
    neutral: 0,
    bad: 0,
  },
  );
   const handleLeaveFeedback = option => {
     setState(prevState => ({
       ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();

    return Number(`${Math.floor((good * 100) / total)}`) || 0;
  };

    return (
      <div className="wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positiveFeedbacksPercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
