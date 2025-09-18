function Lists(props) {

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetically
    // fruits.sort((a, b) => a.calories - b.calories); // Ascending 
    // fruits.sort((a, b) => b.calories - a.calories); // Descending

    const itemList = props.item;

    const newList = itemList.map(entry => <li key={entry.id}>{entry.name} - {entry.calories}</li>);

    return (<>
        <h3>{props.category}</h3>
        <ol>{newList}</ol>
    </>);
}

Lists.defaultProps = {
    item: [],
    category: "Category",
}

export default Lists