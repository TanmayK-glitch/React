import UserGreeting from "./ConditionalRendering.jsx"

function App(){
  return (
    <UserGreeting isLoggedin={true} name="Tanmay" />
  );
}

export default App
