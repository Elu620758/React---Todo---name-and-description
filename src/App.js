import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodosMain from "./Components/TodosMain";


function App() {
  return (
    <div className="App">
      <div className=".App-header">
      <Header />
      <TodosMain />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;