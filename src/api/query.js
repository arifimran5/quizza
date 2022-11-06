export const fetchCategories = async () => {
  const res = await (
    await fetch('https://opentdb.com/api_category.php')
  ).json();
  return res.trivia_categories;
};
