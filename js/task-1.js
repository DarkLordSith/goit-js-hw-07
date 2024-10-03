const categoriesList = document.querySelectorAll("li.task1_item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
