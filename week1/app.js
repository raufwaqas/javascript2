'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'bas_bokforing',
    'confessions_of_economic_hitman',
    'grid_system',
    'how_to_use_graphic_design',
    'leteral_thinking',
    'rich_dad_poor_dad',
    'seo_2022',
    'things_fall_apart',
    'thinking_with_type'
  ];

  // Replace with your own code
  // console.log(bookTitles);
}

//1.4 Object in each book
const books = {
  bas_bokforing: {
    title: 'BASbok i bokföring',
    language: 'Svenska',
    author: 'Jan-Olof Andersson',
  },
  confessions_of_economic_hitman: {
    title: 'Confessions of an Economic Hit Man',
    language: 'English',
    author: 'John Perkins',
  },
  grid_system: {
    title: 'Grid systems in graphic design',
    language: 'English',
    author: 'Josef Müller-Brockmann',
  },
  how_to_use_graphic_design: {
    title: 'How to Use Graphics',
    language: 'English',
    author: 'Michael Bierut',
  },
  leteral_thinking: {
    title: 'Lateral Thinking',
    language: 'English',
    author: 'Edward De Bono',
  },
  rich_dad_poor_dad: {
    title: 'Rich Dad Poor Dad',
    language: 'English',
    author: 'Robert T. Kiyosaki',
  },
  seo_2022: {
    title: 'SEO 2022',
    language: 'English',
    author: 'Adam Clarke',
  },
  things_fall_apart: {
    title: 'Things Fall Apart',
    language: 'English',
    author: 'Chinua Achebe',
  },
  thinking_with_type: {
    title: 'Ellen Lupton',
    language: 'English',
    author: 'Ellen Lupton',
  },
  six_thinking_hats: {
    title: 'Six Thinking Hats',
    language: 'English',
    author: 'Edward De Bono',
  },
};

//1.5
function createBooks(obj) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'booksSection');
  for (let key in obj) {
    const bookCard = document.createElement('li');
    bookCard.setAttribute('class', 'bookShelf');
    bookCard.setAttribute('id', key);

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = obj[key].title;
    bookTitle.setAttribute('class', 'bookTitle');
    bookCard.appendChild(bookTitle);

    const bookLanguage = document.createElement('h4');
    bookLanguage.innerHTML = obj[key].language;
    bookCard.appendChild(bookLanguage);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = obj[key].author;
    bookCard.appendChild(bookAuthor);
    ul.appendChild(bookCard);
  }
  console.log(ul);
  document.getElementById('bookList').appendChild(ul);
}
createBooks(books);

//Books cover
let bookCover = {
  bas_bokforing:
    './img/bas-bokforing.png',
  confessions_of_economic_hitman:
    './img/confessions_of_economic_hitman.png',

  grid_system:
    './img/grid-system.png',

  how_to_use_graphic_design:
    './img/how-to.png',

  leteral_thinking:
    './img/leteral-thinking.png',

  rich_dad_poor_dad:
    './img/rich-dad-poor.png',

  seo_2022:
    './img/SEO-2020.png',

  things_fall_apart:
    './img/things-fall-apart.png',

  thinking_with_type:
    './img/thinking-with-type.png',

  six_thinking_hats:
    './img/six-thinking-hats.png',
};

//1.6 Function with images
function createBooksCard(obj) {
  for (const key of Object.keys(obj)) {
    const img = document.createElement('img');
    img.setAttribute('class', 'book_img');
    img.src = bookCover[key];
    img.alt = key;
    document.getElementById(key).prepend(img);
  }
}
createBooksCard(bookCover);