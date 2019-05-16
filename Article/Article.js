// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

const articleData = [
  {
    title: 'sdjhjmbkjsdhnkjsd', date: '02/03/2017', paragraphs: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam officia nesciunt ducimus dolores! Molestias repudiandae ut necessitatibus obcaecati numquam nihil eius ad illo ducimus quidem voluptatem quisquam veniam voluptates, atque placeat sunt officia at dolores et labore libero voluptatibus dolorem provident distinctio? Debitis, quisquam laboriosam. Fuga consectetur magnam modi accusamus.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, eum.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quos nam quod quas ab veritatis architecto deleniti, dolores modi voluptates.',
    ]
  },
  {
    title: 'sdjhjmbkjsdhnkjsd', date: '02/03/2017', paragraphs: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam officia nesciunt ducimus dolores! Molestias repudiandae ut necessitatibus obcaecati numquam nihil eius ad illo ducimus quidem voluptatem quisquam veniam voluptates, atque placeat sunt officia at dolores et labore libero voluptatibus dolorem provident distinctio? Debitis, quisquam laboriosam. Fuga consectetur magnam modi accusamus.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, eum.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quos nam quod quas ab veritatis architecto deleniti, dolores modi voluptates.',
    ]
  }
]
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
    TweenMax.from(this.domElement, 0.5, { x: 300, y: -200, opacity: 0, scale: 0.5, ease: Bounce.easeOut });
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

class BuildArticle {
  constructor(data) {
    this.container = document.querySelector('.articles')
    this.articleContainer = document.createElement('div')
    this.data = data;
    this.constructHeading()
    this.constructDate()
    this.constructParagraph()
    this.createExpandButton();
    this.createReadBtn();
    this.constructArticle()
  }

  createReadBtn = () => {
    const btn = document.createElement('button')
    btn.classList.add('read');
    btn.textContent = 'Read'
    this.articleContainer.appendChild(btn);
    btn.addEventListener('click', () => {
      TweenMax.to(this.articleContainer, 1, { display: 'none'})
    })
  }

  createExpandButton = () => {
    const span = document.createElement('span')
    span.classList.add('expandButton')
    span.textContent = 'Click to Expand';
    this.articleContainer.appendChild(span)
    span.addEventListener('click', () => {
      if (span.textContent === 'Click to Expand') {
        span.textContent = 'Click to Close'
      } else {
        span.textContent = 'Click to Expand'
      }
      TweenMax.from(this.articleContainer, 0.5, { x: 300, y: -200, opacity: 0, scale: 0.5, ease: Bounce.easeOut });
      this.articleContainer.classList.toggle('article-open')
    })
  }

  constructParagraph = () => {
    this.data.paragraphs.forEach(p => {
      const pa = document.createElement('p');
      pa.textContent = p;
      this.articleContainer.appendChild(pa)
    })
  }
  constructHeading = () => {
    const h2 = document.createElement('h2');
    h2.textContent = this.data.title;
    this.articleContainer.appendChild(h2);
  }
  constructDate = () => {
    const date = document.createElement('p')
    date.classList.add('date');
    date.textContent = this.data.date;
    this.articleContainer.appendChild(date);
  }

  constructArticle = () => {
    this.articleContainer.classList.add('article');
    this.container.appendChild(this.articleContainer)
  }

}


articleData.forEach((data) => {
  new BuildArticle(data)
})





