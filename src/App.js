import React from "react";

import "./App.css";

class App extends React.Component {
  valueDate = new Date().toISOString().slice(0, 10);
  state = {
    username: "",
    description: "",
    exchange: "",
    date: this.valueDate,
    reason: {
      notMySize: false,
      smellsFunny: false,
      toYoung: false,
      uglyColor: false,
      notfair: false,
      toCheap: false,
    },
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
      reason: {
        notMySize: false,
        smellsFunny: false,
        toYoung: false,
        uglyColor: false,
        notfair: false,
        toCheap: false,
      },
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
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>DO NOT WANT</h1>
          <span>GIFT COMPLAINT FORM</span>
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
              <div>
                <div>
                  <label htmlFor="size">
                    <input
                      type="checkbox"
                      id="size"
                      name="size"
                      value={this.state.reason.notMySize}
                      onChange={this.handleChange}
                    />
                    Not my size
                  </label>
                </div>
                <div>
                  <label htmlFor="smell">
                    <input
                      type="checkbox"
                      id="smell"
                      name="smell"
                      value={this.state.reason.smellsFunny}
                      onChange={this.handleChange}
                    />
                    Smells funny
                  </label>
                </div>
                <div>
                  <label htmlFor="young">
                    <input
                      type="checkbox"
                      id="young"
                      name="young"
                      value={this.state.reason.toYoung}
                      onChange={this.handleChange}
                    />
                    I'm to young for this
                  </label>
                </div>
                <div>
                  <label htmlFor="color">
                    <input
                      type="checkbox"
                      id="color"
                      name="color"
                      value={this.state.reason.uglyColor}
                      onChange={this.handleChange}
                    />
                    Ugly color
                  </label>
                </div>
                <div>
                  <label htmlFor="notfair">
                    <input
                      type="checkbox"
                      id="notfair"
                      name="notfair"
                      value={this.state.reason.notfair}
                      onChange={this.handleChange}
                    />
                    Totally not fair
                  </label>
                </div>
                <div>
                  <label htmlFor="cheap">
                    <input
                      type="checkbox"
                      id="cheap"
                      name="cheap"
                      value={this.state.reason.toCheap}
                      onChange={this.handleChange}
                    />
                    Too cheap
                  </label>
                </div>
              </div>
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
