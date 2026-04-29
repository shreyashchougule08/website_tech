function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <div className="app">
      <h1>Small React Demo</h1>
      <p>
        Hello, <strong>{name || "friend"}</strong>! Try typing your name and clicking the button.
      </p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <div className="card">
        <button onClick={() => setCount((value) => value + 1)}>
          Count: {count}
        </button>
      </div>
      <p>React state updates instantly when you type or click.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
