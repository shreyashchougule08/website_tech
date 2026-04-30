import React, { useState, useEffect, useRef } from "react";

/* 1. Functional Component */
function Welcome() {
  return <h1>Hello Student!</h1>;
}

/* 2. Class Component */
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}

/* 3. Props Example (Child Component) */
function Student(props) {
  return <h2>Name: {props.name}</h2>;
}

/* 4. State Example 1: Counter */
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

/* 5. State Example 2: Toggle */
function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <h2>Welcome React</h2>}
    </div>
  );
}

/* 6. useState Hook Example */
function UseStateDemo() {
  const [name, setName] = useState("Divya");

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("React")}>Change</button>
    </div>
  );
}

/* 7. useEffect Hook Example */
function UseEffectDemo() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <h2>Check console for useEffect</h2>;
}

/* 8. useRef Hook Example */
function UseRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus" />
      <br />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

/* Main App Component */
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Concepts Demo</h1>

      <hr />
      <h2>1. Components</h2>
      <Welcome />
      <WelcomeClass />

      <hr />
      <h2>2. Props Example</h2>
      <Student name="Divya" />
      <Student name="Rahul" />

      <hr />
      <h2>3. State Examples</h2>
      <Counter />
      <Toggle />

      <hr />
      <h2>4. Hooks Examples</h2>
      <UseStateDemo />
      <UseEffectDemo />
      <UseRefDemo />
    </div>
  );
}

export default App;