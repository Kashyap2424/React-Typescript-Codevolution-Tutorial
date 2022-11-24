import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Kashyap",
    last: "Kapdi",
  };

  const personNameList = [
    {
      first: "Kashyap",
      last: "Kapdi",
    },
    {
      first: "Chintan",
      last: "Kapdi",
    },
    {
      first: "Maitri",
      last: "Kapdi",
    },
  ];

  return (
    <div className="App">
      <Greet name="Kashyap" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personNameList} />
    </div>
  );
}

export default App;
