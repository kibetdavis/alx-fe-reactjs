import React, { useState } from 'react';
import useRecipeStore from './store/recipeStore';

function App() {
  const { recipes, addRecipe, removeRecipe } = useRecipeStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;
    addRecipe({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🍽 Recipe Sharing App</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>
          Add Recipe
        </button>
      </form>

      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{recipe.title}</strong>: {recipe.description}{' '}
            <button onClick={() => removeRecipe(index)} style={{ marginLeft: '10px' }}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
