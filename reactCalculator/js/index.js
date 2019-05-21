function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "stringify",













    x => {

      var last = this.state.currentValue.charAt(this.state.currentValue.length - 1);
      var current = x.target.value;
      console.log(last, current);
      //    if(current == last && x.target.value == '/' | x.target.value == '+' | x.target.value == '-' | x.target.value == '*') {console.log(last, current, " Samzies");}

      if (this.state.firstChar == true && x.target.value == 0 | x.target.value == '/' | x.target.value == '+' | x.target.value == '-' | x.target.value == '*')
      {console.log(x.target.value, this.state.firstChar);} else

      {if (current == '/' | current == '+' | current == '-' | current == '*' && last == '/' | last == '+' | last == '-' | last == '*') {console.log(last, current, " Samzies");} else

        {

          this.setState({
            currentValue: this.state.currentValue + x.target.value,
            answerStatus: 'formula',
            firstChar: false });

        } //end second
      } //end first if

    });_defineProperty(this, "evaluate",

    x => {
      this.setState({
        answer: eval(this.state.currentValue),
        currentValue: '',
        answerStatus: 'answer',
        firstChar: true });

    });_defineProperty(this, "clear",

    x => {
      this.setState({
        currentValue: '',
        answerStatus: 'formula',
        firstChar: true });

    });this.state = { currentValue: '', answer: 0, exp: 0, //can probably delete once done
      answerStatus: 'formula', firstChar: true }; //   let value = 0;
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { style: { textAlign: 'center' } }, "React Calculator"),
      React.createElement("div", { className: "calculator" },

      React.createElement("div", { className: "display" },


      React.createElement("h2", null, this.state.answerStatus == 'formula' ? React.createElement("p", null, " ", this.state.currentValue, " ") : React.createElement("p", null, " ", this.state.answer))),


      React.createElement("div", { className: "buttons" },

      React.createElement("div", { className: "calcBtn" },
      React.createElement("button", { onClick: this.stringify, value: 1 }, "1"),
      React.createElement("button", { onClick: this.stringify, value: 2 }, "2"),
      React.createElement("button", { onClick: this.stringify, value: 3 }, "3"),
      React.createElement("button", { className: "mathBtn", onClick: this.stringify, value: "+" }, "+")),

      React.createElement("div", { className: "calcBtn" },
      React.createElement("button", { onClick: this.stringify, value: 4 }, "4"),
      React.createElement("button", { onClick: this.stringify, value: 5 }, "5"),
      React.createElement("button", { onClick: this.stringify, value: 6 }, "6"),
      React.createElement("button", { className: "mathBtn", onClick: this.stringify, value: "-" }, "-")),

      React.createElement("div", { className: "calcBtn" },
      React.createElement("button", { onClick: this.stringify, value: 7 }, "7"),
      React.createElement("button", { onClick: this.stringify, value: 8 }, "8"),
      React.createElement("button", { onClick: this.stringify, value: 9 }, "9"),
      React.createElement("button", { className: "mathBtn", onClick: this.stringify, value: "*" }, "x")),

      React.createElement("div", { className: "calcBtn" },
      React.createElement("button", { onClick: this.stringify, value: 0 }, "0"),
      React.createElement("button", { className: "mathBtn", onClick: this.stringify, value: "." }, "."),
      React.createElement("button", { className: "mathBtn", onClick: this.stringify, value: "/" }, "/"),
      React.createElement("button", { className: "mathBtn", onClick: this.clear, value: "C" }, "C"),
      React.createElement("button", { className: "evalBtn", onClick: this.evaluate }, "="))))));







  }}
// end App


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));