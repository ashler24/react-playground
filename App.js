/**
 *
 *
 *  <div id="parent">
 *      <div id="child">
 *          <h1>Hello World</h1>
 *          <h1>Hello World</h1>
 *      </div>
 *  </div>
 *
 *
 */

// const heading = React.createElement('h1', {id:"heading"}, 'Hello World from React!');
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement("h2", { id: "heading1" }, "Hello World from React!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
