function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getQuote",










    x => {
      fetch(this.state.quotesEndPoint).
      then(response => response.json()).
      then(data => {
        //   console.log(data.quotes.length);
        let targetNum = Math.floor(Math.random() * data.quotes.length);
        let targetQuote = data.quotes[targetNum].quote;
        let targetAuthor = data.quotes[targetNum].author;
        //   console.log(data.quotes[0].quote, data.quotes[0].author)
        this.setState({
          randomQuote: targetQuote,
          randomAuthor: targetAuthor });


      });
    });this.state = { quotesEndPoint: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', randomQuote: 'You miss all the shots you don\'t take.', randomAuthor: 'Michael Scott, Wayne Gretzky', twitter: "hello" };}
  // <img src={'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png'} alt="twitter" className="imgTwitter" /><span></span>

  render() {

    return (
      React.createElement("div", { className: "Main" },
      React.createElement("h1", null, "React - Random Quote Generator"),
      React.createElement("div", { className: "quoteMachine" },
      React.createElement("div", { className: "display" },
      React.createElement("h3", null, "\"", this.state.randomQuote, "\""),
      React.createElement("h4", null, this.state.randomAuthor),
      React.createElement("button", { className: "quoteBtn", onClick: this.getQuote }, "get quote"),
      React.createElement("div", { className: "boxFooter" },
      React.createElement("div", { className: "btnLink" },
      React.createElement("a", { target: "_blank", href: `https://twitter.com/intent/tweet?text=${this.state.randomQuote} --${this.state.randomAuthor}` }, React.createElement("p", null, "Share on Twitter"))))))));











  }}
// end App


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));