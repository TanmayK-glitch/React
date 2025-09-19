function Lists({ item = [], category = "Category" }) {

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetically
    // fruits.sort((a, b) => a.calories - b.calories); // Ascending 
    // fruits.sort((a, b) => b.calories - a.calories); // Descending

    const newList = item.map(entry => <li key={entry.id}>{entry.name} - {entry.calories}</li>);

    return (<>
        <h3>{props.category}</h3>
        <ol>{newList}</ol>
    </>);
}

export default Lists