import { useEffect, useRef, useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "maggi",
    "oregano",
    "vegetables",
    "pasta",
  ]);

  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null)
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
  }, [recipe]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const getRecipe = async () => {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  };

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button> + Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
