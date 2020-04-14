import React from "react";
import CheckboxList from "./CheckboxInput";
import "./App.css";

class App extends React.Component {
  valueDate = new Date().toISOString().slice(0, 10);
  state = {
    username: "",
    description: "",
    exchange: "",
    date: this.valueDate,

    reason: [
      { id: 1, name: "Not my size", isClicked: false },
      { id: 2, name: "Smells funny", isClicked: false },
      { id: 3, name: "I'm to young", isClicked: false },
      { id: 4, name: "Ugly color", isClicked: false },
      { id: 5, name: "Not fair", isClicked: false },
      { id: 6, name: "Too cheap", isClicked: false },
    ],
  };
  formValidate = () => {
    const username = this.state.username;
    const description = this.state.description;
    const exchange = this.state.exchange;
    const date = this.state.date;
    const reason = this.state.reason;

    return {
      username,
      description,
      exchange,
      reason,

      date,
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let validation = this.formValidate();
    console.log(validation);

    this.setState({
      username: "",
      description: "",
      exchange: "",
      date: this.valueDate,
    });
  };
  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type === "text") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
      //console.log(value);
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
      console.log(checked);
    }
  };
  render() {
    const reasonList = this.state.reason;

    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>DO NOT WANT</h1>
          <span className="span">GIFT COMPLAINT FORM</span>
          <fieldset>
            <div>
              <label htmlFor="user">Name</label>
              <input
                type="text"
                id="user"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="description">Description of bad gift</label>
              <input
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="description of bad gift"
              />
            </div>
            <div className="checkbox-container">
              <span>Reason for complaint</span>
              <CheckboxList reason={reasonList} change={this.handleChange} />
            </div>

            <div>
              <label htmlFor="exchange">Please exchange my gift for</label>
              <input
                type="text"
                id="exchange"
                name="exchange"
                value={this.state.exchange}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={this.state.date}
              />
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
