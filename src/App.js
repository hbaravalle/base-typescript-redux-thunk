import { React } from "react";
import Advice from "./components/Advice/index.jsx"
import "./App.scss"

function App() {
  return (
    <main>
      <Advice id={"100"} text={"Ad lorem ipsum"} />
    </main>
  );
}

export default App;
