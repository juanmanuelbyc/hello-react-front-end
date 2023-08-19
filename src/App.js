import { Greeting } from "./features/greeting/Greeting";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
   return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
