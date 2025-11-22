const book = {
    title: "Douglas Adams",
    author: "The Hitchhiker's Guide to the Galaxy",
    publicationYear: 1979,
    genres: ["Science Fiction", "Comedy"],
    isAvailable: true,
    displayInfo: function () {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Published: ${this.publicationYear}`);
      console.log(`Genres: ${this.genres.join(", ")}`);
      console.log(`Available: ${this.isAvailable ? "Yes" : "No"}`);
    },
};

// book.genres?.[0];

// write a function that return the book's publication year

function getBookYear({ publicationYear }) {
  if (publicationYear) {
    return publicationYear
  }
  return "there is no publication year"

  // return publicationYear ?? "there is no publication year";
}

getBookYear(book);

// write a function that return the book's first genre

function firstGenre({ genres }) {
  if (genres) {
    const [firstGenre] = genres
    return firstGenre;
  }
  return "there is no genres"
}

firstGenre(book)
// check that the book's name is in the author property and the author name is in the title property, swap them using destructuring

[book.author, book.title] = [book.title, book.author]

console.log(book)