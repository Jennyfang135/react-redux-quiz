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
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  clickHandler(e) {
    if (e.target.className === 'answer') {
      // alert(`clicked ${e.target.innerText}`);
      const currentCountry = this.props.question.country;
      this.props.checkAnswer(currentCountry, e.target.innerText);
    }
  }

  renderAnswers() {
    if (this.props.question.answers) {
      return this.props.question.answers.map(city => (
        <li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
          key={city}
          className="answer"
          onClick={this.clickHandler}
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
        <h4>Select the answer from the list below:</h4>
        <ol>{this.renderAnswers()}</ol>
      </div>
    );
  }
}

Question.propTypes = {
  checkAnswer: PropTypes.func,
  getQuestions: PropTypes.func,
  question: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    question: state.question,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkAnswer, getQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
