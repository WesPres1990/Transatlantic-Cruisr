import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

// export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
// };

export default {
  // Gets all Cruises
  getCunardCruises: function() {
    return axios.get("/api/cunard-cruises/scrape");
  },
  getHollandAmericaCruises: function() {
    return axios.get("/api/holland-america-cruises/scrape");
  },
  getRoyalCaribbeanCruises: function() {
    return axios.get("/api/royal-caribbean-cruises/scrape");
  },
  getPrincessCruises: function() {
    return axios.get("/api/princess-cruises/scrape");
  },
  getPOCruises: function() {
    return axios.get("/api/po-cruises/scrape");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
