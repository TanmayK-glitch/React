import Lists from "./Lists"

function App() {

  const fruits = [{ id: 1, name: "Apple", calories: 90 },
  { id: 2, name: "Orange", calories: 120 },
  { id: 3, name: "Pineapple", calories: 200 },
  { id: 4, name: "Cherry", calories: 150 }];

  const vegetables = [{ id: 5, name: "Carrot", calories: 23 },
    { id: 6, name: "Tomaotes", calories: 44 },
    { id: 7, name: "Ladysfinger", calories: 99 },
    { id: 8, name: "Onion", calories: 12 }];


  return (
    <>
      {fruits.length > 0 && <Lists item = {fruits} category = "Fruits"/>}
      {vegetables.length > 0 && <Lists item = {vegetables} category = "Vegetables" />}
    </>
  );
}

export default App
