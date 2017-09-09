import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getQuestions } from '../actions/get-questions';

class Question extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  renderAnswers() {
    if (this.props.question.answers) {
      return this.props.question.answers.map(city => (
        <li
          key={city}
        >
          {city}
        </li>
      ));
    }
    return '';
  }

  render() {
    console.log(this.props.question);
    // const capital = Object.keys(this.props.questions)[0];
    return (
      <div className="question">
        <h3>What is the capital of {this.props.question.country}?</h3>
        <h3>Select the answer from the list below:</h3>
        <ol>{this.renderAnswers()}</ol>
      </div>
    );
  }
}

Question.propTypes = {
  getQuestions: PropTypes.func,
  question: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    question: state.question,
  };
}

export default connect(mapStateToProps, { getQuestions })(Question);
