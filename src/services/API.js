export const fetchByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchByFirstLetter = async (firstLetter) => {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const request = await fetch(URL);
    const response = await request.json();
    return response;
  }
};
