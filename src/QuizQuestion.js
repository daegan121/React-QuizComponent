import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    };
  }
  handleClick(buttonText) {
    let incorrectAnswer;
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      incorrectAnswer = false;
    } else {
      incorrectAnswer = true;
    }
    this.setState({ incorrectAnswer });
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((item, index) => {
              return (
                <QuizQuestionButton
                  key={index}
                  clickHandler={this.handleClick.bind(this)}
                  button_text={item}
                />
              );
            })}
          </ul>
        </section>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}
export default QuizQuestion;
