function Lists(){
    const fruits = ["Banana", "Apple", "Orange", "Pineapple", "Kiwi"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ol>{listItems}</ol>);
}

export default Lists