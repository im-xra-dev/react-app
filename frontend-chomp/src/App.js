"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var header_1 = require("./components/header");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(header_1.default, { test: "yes" }),
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null,
                "ddEdit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload fsdfsdfhgh."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports.default = App;
//# sourceMappingURL=App.js.map