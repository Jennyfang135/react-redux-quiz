import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getQuestions } from '../actions/get-questions';

class Question extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    console.log(this.props.questions);
    const capital = Object.keys(this.props.questions)[0];
    return (
      <div className="question">
        <h3>What is the capital of {capital}?</h3>
      </div>
    );
  }
}

Question.propTypes = {
  getQuestions: PropTypes.func,
  questions: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}

export default connect(mapStateToProps, { getQuestions })(Question);
