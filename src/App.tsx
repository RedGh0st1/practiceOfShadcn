import "./App.css";
import RouteProvider from "./Providers/RouteProvider";
import BooksList from "./Components/Books/BooksList";
function App() {
  return (
    <main className="app-container">
      <RouteProvider />
    </main>
  );
}

export default App;
