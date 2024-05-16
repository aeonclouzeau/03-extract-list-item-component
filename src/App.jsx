import { recipes } from "./data/data";
import Recepie from "./components/Recepie";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recepie
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
