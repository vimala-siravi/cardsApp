# React Cards App with Pagination

### This project aims at:

- Creating a card component
- Fetching data from http://jsonplaceholder.typicode.com/posts
- On inital render only 10 cards would be shown and using custom hook the useInfiniteScroll to fetch and render more cards as the user scrolls down the page

### The card component:

- Shows id from the api response as card's header
- Shows title from the api response as card's title
- Shows body from the api response as card's body

### The custome hook useInfiniteScroll:

- Checks the condition: window.innerHeight + window.scrollY >= document.body.offsetHeight to see if user has reached the bottom of the window/page
- Takes in any function passed to it and executes it

## Getting Started

Clone the repo

```
https://github.com/vimala95/cardsApp.git
```

Install the dependencies

```
npm install
```

Run the project

```
cd cardsApp
npm run start
```
