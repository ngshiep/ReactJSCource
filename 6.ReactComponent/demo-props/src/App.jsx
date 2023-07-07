import Welcome from "./components/Wellcome";
import AddComponent from "./components/AddComponent";

function App() {
  return (
    <div className="App">
      <Welcome name="Admin" />
      <AddComponent firstNumber={1} secondNumber={2} />
    </div>
  );
}
export default App;
