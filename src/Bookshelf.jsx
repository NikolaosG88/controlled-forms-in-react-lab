
import { useState } from 'react';

const handleInputChange = (event) => {
  //  event.preventDefault();
   setNewBook({ ...newBook, [event.target.name]: event.target.value });

};

const Bookshelf = () => {
  
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  
  const [newBook, setNewBook] = useState (
    {title: '', author: ''},
  );

  return (
    <>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
  
    <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="title">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
        <button type="submit">Add  Book</button>
  </div>
  <div className="bookCardsDiv">
    {/* Book cards will display here */}
    {books.map((book, index) => (
            <div key={index} className="bookCard">
              <strong>{book.title}</strong>
              <p>by {book.author}</p>
            </div>
          ))}
  </div>
</div>
</>
)};

export default Bookshelf;
