// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle)
    this.readButton = domElement.querySelector('.read');
    this.readButton.addEventListener('click', () => {
      this.domElement.style.display = 'none';
    })
  }

  expandArticle = () => {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
  
    if (this.expandButton.textContent === 'Click to Expand') {
      this.expandButton.textContent = 'Click to Close'
    } else {
      this.expandButton.textContent = 'Click to Expand'
    }
    TweenMax.from(this.domElement, 0.5, {x:300, y: -200, opacity:0, scale:0.5, ease:Bounce.easeOut});
    this.domElement.classList.toggle('article-open')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles;
articles = document.querySelectorAll('.article')

articles.forEach((articleDOM) => {
  new Article(articleDOM)
})
