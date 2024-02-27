const itemsCount = document.querySelectorAll('li.item');
console.log(`Number of categories: ${itemsCount.length}`);

itemsCount.forEach(item => {

    const title = item.querySelector('h2').textContent;

    const numberOfElements = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numberOfElements}`);
});