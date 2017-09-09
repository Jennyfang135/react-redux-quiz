import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { checkAnswer } from '../actions/check-answer';
import { getQuestions } from '../actions/get-questions';

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

  clickHandler(e) {
    if (e.target.tagName === 'LI') {
      const currentCountry = this.props.question.country;
      this.props.checkAnswer(currentCountry, e.target.innerText);
    } else {
      this.props.getQuestions();
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
        <h3>What is the capital of {this.props.question.country}?</h3>
        <h4>Select the answer from the list below:</h4>
        <ol>{this.renderAnswers()}</ol>
        <p>{this.renderResponse()}</p>
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
};

function mapStateToProps(state) {
  return {
    question: state.question,
    answer: state.answer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkAnswer, getQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
