import React from "react"; // If you are using JSX in the file, you need to import React.
import "./styles.css";
import ListAndKeys from "./ListAndKeys";
import AuthContext from "./ContextExample";
import ConditionalRendering from "./ConditionalRendering";
import ChildrenExample from "./ChildrenExample";
import LazyLoad from "./LazyLoad";

// Functional based component (new way).
// export default function App(props) {
//     return (
//         <div className={props.bgClass}>
//             <b>{props.appString}</b>
//         </div>
//     );
// }

// Class based component (old way).
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgClass: "",
      authenticated: false
    };
  }

  componentDidMount() {
    this.setState({
      bgClass: "bg-red"
    });
  }

  componentWillUnmount() {
    this.setState({
      bgClass: "bg-black"
    });
  }

  clickHandler() {
    if (this.state.bgClass === "bg-red") {
      this.setState({
        bgClass: "bg-black"
      });
    } else {
      this.setState({
        bgClass: "bg-red"
      });
    }
  }

  clickHandler2 = () => {
    this.setState({
      bgClass: "bg-black"
    });
  };

  loginHandler = () =>
    this.state.authenticated
      ? this.setState({ authenticated: false })
      : this.setState({ authenticated: true });

  render() {
    console.log(this.state);
    const { appString } = this.props; // or const props = this.props;
    return (
      <React.Fragment>
        <ChildrenExample />
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <ConditionalRendering />
        </AuthContext.Provider>
        <ListAndKeys />
        <LazyLoad />
        <div className={this.state.bgClass}>{appString}</div>
        <button onClick={this.clickHandler.bind(this)}>Change bg</button>
        <button onClick={() => this.clickHandler2()}>
          Change bg with arrow function{" "}
        </button>
      </React.Fragment>
    );
  }
}
export default App;
