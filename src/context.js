import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useDebounce } from "./hooks";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const debounced = useDebounce(input, 1000).trim();
  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${debounced}`);
      const result = await res.json();

      const { drinks } = result;
      // console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strInstructions,
            strCategory,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
            category: strCategory,
            ingredient: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
            ],
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (e) {
      setLoading(true);

      console.log("failed connecting to database:", e.message);
      throw e;
    }
  };

  useEffect(() => {
    fetchDrinks();
    console.log(cocktails);
  }, [debounced]);

  return (
    <AppContext.Provider value={{ loading, input, cocktails, setInput }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
