import React from 'react';

// Define the shape of the props expected by the component
interface PollProps {
  questions: {
    id: string;
    label: string;
    questionType: string;
    inputType: string;
    options?: string[];
    required?: boolean;
  }[];
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

  submitPoll = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validateResponse()) {
      console.log('Poll submitted:', this.state.responses);
      alert('Poll submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  renderInput = (questionType: string, inputType: string, questionId: string, options: string[] = []) => {
    const inputProps = {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, questionId),
      value: this.state.responses[questionId] || '',
    };
  
    // This is an example. You should adjust the cases and elements based on your needs.
    switch (inputType) {
      case 'text':
        return <input type="text" {...inputProps} />;
      case 'radio':
        return (
          <div>
            {options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={questionId}
                  value={option}
                  checked={this.state.responses[questionId] === option}
                  onChange={inputProps.onChange}
                />
                {option}
              </label>
            ))}
          </div>
        );
      // Handle other input types here...
      default:
        return <input type="text" {...inputProps} />; // Default to text input if type is unrecognized
    }
  };
  
  render() {
    const { questions } = this.props;
    const { errors } = this.state;

    return (
        <form onSubmit={this.submitPoll}>
          {questions.map(question => (
            <div key={question.id}>
              <label>{question.label}</label>
              {this.renderInput(question.questionType, question.inputType, question.id, question.options)}
              {errors[question.id] && <div className="error">{errors[question.id]}</div>}
            </div>
          ))}
        </form>
      );
      
  }
}


export default Poll;
