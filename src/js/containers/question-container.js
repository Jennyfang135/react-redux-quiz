import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { checkAnswer } from '../actions/check-answer';
import { getQuestions } from '../actions/get-questions';
import { updateScore } from '../actions/update-score';

class Question extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  componentDidUpdate() {
    if (this.props.answer.correct === true && this.props.score.justUpdated === false) {
      this.props.updateScore({
        score: this.props.score.score,
        justUpdated: true,
      });
    }
  }

  clickHandler(e) {
    if (e.target.tagName === 'LI') {
      const currentCountry = this.props.question.country;
      this.props.checkAnswer(currentCountry, e.target.innerText);
    } else {
      // Button is clicked.
      this.props.getQuestions();
      this.props.updateScore({
        score: this.props.score.score,
        justUpdated: false,
      });
    }
  }

  renderAnswers() {
    if (this.props.question.answers) {
      return this.props.question.answers.map((city) => {
        let correctOrIncorrect = '';
        if (this.props.answer.userAnswer === city) {
          if (this.props.answer.correct) {
            correctOrIncorrect = 'correct';
          } else {
            correctOrIncorrect = 'incorrect';
          }
        } else if (this.props.answer.correctAnswer === city) {
          correctOrIncorrect = 'correct';
        }
        return (<li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
          key={city}
          className={`answer ${correctOrIncorrect}`}
          onClick={this.clickHandler}
        >
          {city}
        </li>);
      });
    }
    return '';
  }

  renderResponse() {
    const correct = this.props.answer.correct;
    if (correct === true) {
      return 'CORRECT!';
    } else if (correct === false) {
      return 'INCORRECT!';
    }
    return '';
  }

  render() {
    return (
      <div className="main">
        <h2>What is the capital of {this.props.question.country}?</h2>
        <h3>Select the answer from the list below:</h3>
        <ul>{this.renderAnswers()}</ul>
        <p className="response">Score: {this.props.score.score} {this.renderResponse()}</p>
        <button onClick={this.clickHandler}>New Question</button>
      </div>
    );
  }
}

Question.propTypes = {
  answer: PropTypes.object,
  checkAnswer: PropTypes.func,
  getQuestions: PropTypes.func,
  question: PropTypes.object,
  updateScore: PropTypes.func,
  score: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    question: state.question,
    answer: state.answer,
    score: state.score,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkAnswer, getQuestions, updateScore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
