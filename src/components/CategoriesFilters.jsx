import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesFilters, setSelectedCategory,
  updateFoundRecipes } from '../Redux/RecipesReducer';
import { emptyFetch, fetchCategories, getCategoryRecipes } from '../services/API';

function CategoriesFilter() {
  const page = useSelector(({ recipes }) => recipes.typeRecipes);
  const selectedCategory = useSelector(({ recipes }) => recipes.selectedCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCategories() {
      const data = await fetchCategories(page);
      if (page === 'food') {
        dispatch(setCategoriesFilters(data.meals));
      } else {
        dispatch(setCategoriesFilters(data.drinks));
      }
    }
    getCategories();
  }, [dispatch, page]);

  const categories = useSelector(({ recipes }) => (recipes.categoriesFilters));

  async function setCategoryFilter({ target: { value } }) {
    let data;
    if (page === 'food') {
      if (selectedCategory === value) {
        data = await emptyFetch('food');
        dispatch(setSelectedCategory(''));
      } else {
        data = await getCategoryRecipes(page, value);
        dispatch(setSelectedCategory(value));
      }
      dispatch(updateFoundRecipes(data.meals));
    } else {
      if (selectedCategory === value) {
        data = await emptyFetch('drink');
        dispatch(setSelectedCategory(''));
      } else {
        data = await getCategoryRecipes(page, value);
        dispatch(setSelectedCategory(value));
      }
      dispatch(updateFoundRecipes(data.drinks));
    }
  }
  const NUM = 5;
  return (
    <section className="categories-container">
      {categories.map((category, index) => index < NUM && (
        <button
          type="button"
          key={ index }
          value={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ setCategoryFilter }
        >
          {category.strCategory}
        </button>
      ))}
    </section>
  );
}

export default CategoriesFilter;
