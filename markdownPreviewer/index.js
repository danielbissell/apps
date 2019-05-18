function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",








    x => {
      this.setState({
        currentValue: x.target.value });

    });this.state = { currentValue: value };}



  render() {
    return (

      React.createElement("div", { className: "wrapper" },
      React.createElement("h1", { style: { textAlign: 'center' } }, "React Markdown Previewer"),
      React.createElement("div", { className: "markDown" },



      React.createElement("div", { className: "form" },

      React.createElement("textarea", { className: "editor", type: "text", value: this.state.currentValue, onChange: this.handleChange })),


      React.createElement("div", { className: "display" },
      React.createElement("div", { className: "title" }, "Previewer"),
      React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(this.state.currentValue) } })))));









  }}
// end App


let value = `# Use this Markdown Previewer!

## Edit the text to see how it looks
### Have fun
  
Heres some code, \`<div> let x = 25 </div>\`, between 2 backticks.

\`\`\`
// checkout the mutliple lines:

function exampleCode(x, y) {
  if (x == '\`\`\`' && y == '\`\`\`') {
    return z;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | very cool.

![React Logo w/ Text](https://goo.gl/Umyytc)

\`\`\`
`;

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));