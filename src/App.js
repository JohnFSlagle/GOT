import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import gofImage from "./images/wallpaperflare.com_wallpaper_4.jpg";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "./globals";

const App = () => {
  const [books, setBooks] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(API_URL);
  //     console.log(response.data);
  //     setBooks(response.data);
  //   } catch (error) {
  //     console.log("Error fetching data: ", error);
  //   }
  // };

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network not ok");
      }
      const data = await response.json();
      console.log(data);
      setBooks(data);
    } catch (error) {
      console.log("error fetching data: ", error);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="game-universe-content">
        <p>
          Welcome to the vast and complex world of Game of Thrones, created by
          George R.R. Martin. In this fictional universe, you'll encounter
          kingdoms, intrigue, and epic battles for the Iron Throne.
        </p>
        <p>
          On the continent of Westeros, noble houses like Stark, Lannister,
          Targaryen, and Baratheon vie for power, while the Night's Watch guards
          the Wall in the North against threats from beyond.
        </p>
        <p>
          Meanwhile, across the Narrow Sea in the continent of Essos, cities
          like King's Landing, Winterfell, and Braavos are bustling with
          political intrigue, and the Dothraki roam the vast grasslands.
        </p>
        <p>
          Magic, dragons, White Walkers, and direwolves are just some of the
          fantastical elements that await you in this epic tale of power and
          betrayal.
        </p>
        <p>
          So, whether you're a fan of the books or the TV series, or you're new
          to the world of Game of Thrones, prepare for an unforgettable journey
          through this rich and captivating universe.
        </p>

        <div className="centered-image-container">
          <img src={gofImage} alt="Game of Thrones" className="game-image" />
        </div>
      </div>
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            console.log(cleanedDate);
            const authors = book.authors.join(", ");
            console.log(authors);
            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>{authors}</p>
                  <p>{book.numberOfPages}</p>
                  <p>{book.country}</p>
                  <p>{cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
