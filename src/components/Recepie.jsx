import PropTypes from "prop-types";

const Recepie = ({ id, name, ingredients }) => {
  console.log(ingredients);
  return (
    <div key={id}>
      <h1>{name}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

Recepie.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default Recepie;
