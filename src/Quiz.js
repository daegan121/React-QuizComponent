import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
let quizData = require("./quiz_data.json");
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }
  showNextQuestion() {
    let quiz_position = this.state.quiz_position + 1;
    this.setState({ quiz_position });
  }
  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }
  render() {
    const isQuizEnd =
      quizData.quiz_questions.length === this.state.quiz_position - 1
        ? true
        : false;
    return (
      <div>
        <div className="QuizQuestion">
          {isQuizEnd ? (
            <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
          ) : (
            <QuizQuestion
              showNextQuestionHandler={this.showNextQuestion.bind(this)}
              quiz_question={
                quizData.quiz_questions[this.state.quiz_position - 1]
              }
            />
          )}
        </div>
      </div>
    );
  }
}
export default Quiz;
