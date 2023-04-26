function AnimalsInfo({ pets, dispatch }) {
    const handleRemove = id => {
        dispatch({ type: 'Delete', payload: id });
    };

    return (
        <ul>
            {pets.map(animal => (
                <li key={animal.id}>
                    {animal.name} <button onClick={() => handleRemove(animal.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default AnimalsInfo;