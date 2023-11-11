import React from 'react';

// Define the shape of the props expected by the component
interface QuestionProps {
  id: string;
  content: string;
  inputType: string;
  options?: string[];
  required?: boolean;
}

interface PollProps {
  questions: QuestionProps[];
}

// Define the shape of the state
interface PollState {
  responses: { [questionId: string]: any };
  errors: { [questionId: string]: string };
}

class Poll extends React.Component<PollProps, PollState> {
  constructor(props: PollProps) {
    super(props);
    this.state = {
      responses: {},
      errors: {},
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>, questionId: string) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      responses: {
        ...prevState.responses,
        [questionId]: value,
      },
    }));
  };

  validateResponse = (): boolean => {
    const { questions } = this.props;
    const { responses } = this.state;
    const errors: { [key: string]: string } = {};
    let isValid = true;

    questions.forEach((question) => {
      if (question.required && !responses[question.id]) {
        errors[question.id] = 'This question is required.';
        isValid = false;
      }
    });

    this.setState({ errors });
    return isValid;
  };

  submitPoll = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validateResponse()) {
      // Submit the responses here, e.g., using a GraphQL mutation
      console.log('Poll submitted:', this.state.responses);
      alert('Poll submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  renderInput = (question: QuestionProps) => {
    const inputProps = {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, question.id),
      value: this.state.responses[question.id] || '',
    };

    switch (question.questionType) {
      case 'TEXT':
        return <input type="text" {...inputProps} />;
      case 'MULTIPLE_CHOICE':
        return (
          <div>
            {question.options?.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={this.state.responses[question.id] === option}
                  onChange={inputProps.onChange}
                />
                {option}
              </label>
            ))}
          </div>
        );
      case 'CHECKBOX':
        return (
          <div>
            {question.options?.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name={question.id}
                  value={option}
                  checked={this.state.responses[question.id]?.includes(option)}
                  onChange={(event) => this.handleCheckboxChange(event, question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        );
      case 'SLIDER':
        return <input type="range" {...inputProps} />;
      case 'YES_NO':
        return (
          <div>
            <label>
              <input
                type="radio"
                name={question.id}
                value="Yes"
                checked={this.state.responses[question.id] === "Yes"}
                onChange={inputProps.onChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name={question.id}
                value="No"
                checked={this.state.responses[question.id] === "No"}
                onChange={inputProps.onChange}
              />
              No
            </label>
          </div>
        );
      case 'RANKING':
        // Implement the ranking question type as per your requirements
        return null;
      default:
        return null; // Return null for unrecognized types
    }
  };

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, questionId: string, option: string) => {
    const { checked } = event.target;
    this.setState((prevState) => {
      const currentResponses = prevState.responses[questionId] || [];
      if (checked) {
        return {
          responses: {
            ...prevState.responses,
            [questionId]: [...currentResponses, option],
          },
        };
      } else {
        return {
          responses: {
            ...prevState.responses,
            [questionId]: currentResponses.filter((opt: string) => opt !== option),
          },
        };
      }
    });
  };

  render() {
    const { questions } = this.props;
    const { errors } = this.state;

    return (
      <form onSubmit={this.submitPoll}>
        {questions.map((question) => (
          <div key={question.id}>
            <label>{question.content}</label>
            {this.renderInput(question)}
            {errors[question.id] && <div className="error">{errors[question.id]}</div>}
          </div>
        ))}
      </form>
    );
  }
}

export default Poll;
