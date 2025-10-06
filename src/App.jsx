import { useEffect, useState } from 'react';
// import Button from './Button.jsx';
// import MyComponent from './myComponent.jsx';
// import ColorPicker from "./ColorPickerApp";
// import UpdateObjects from "./UpdateObjectsInState";
// import Projects from "./PracticeProjects";
// import UpdateArraysofObject from "./UpdateArrays";
// import Demo from "./Demo";
// import DigitalClock from "./DigitalClock";
// import ToDoApp from "./ToDoList";
// import UseEffect from "./useEffect()_Hook";
// import ComponentA from "./ComponentA";
// import UseState from "./useState";
// import StopWatch from "./StopWatch.jsx";
// import Project1 from "./Project1";
import { getPost, userData } from '../API';
import '../API/style.css';
import PostCard from '../API/PostCard';
import UserCard from '../API/UserCard';

function App() {


  const [items, setItems] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getPost().then((posts) => {
      setItems(posts);
    });
  }, []);

  useEffect(() => {
    userData().then((userDetails) => {
      console.log(userDetails);
      setUsers(userDetails.results);
    });
  }, []);

  return (
    <>
    {users && users.length > 0 && <UserCard data={users[0]} />}
      <div>
        {
          items ? items.map((e) => <PostCard title={e.title} body={e.body} />) : <p>No Data Available</p>
        }
      </div>
    </>
  );
}

export default App
