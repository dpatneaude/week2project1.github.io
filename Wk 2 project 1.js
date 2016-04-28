// 1. Create an object called "me" that describes you with your name, city, and job title.
console.log('Question 1');
var me = {
  name: "Dave",
  city: "Seattle",
  job_title: "Business Analyst",
};
console.log(me);

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }
console.log('Question 2');
var me = {
  name: "Dave",
  city: "Seattle",
  job_title: "Business Analyst",
  family: ['Jim', 'Mary', 'John', 'Katie']
};
console.log(me);

// 3. Using the "me" object, use the two different methods to access the value of your city.
var me = {
  name: "Dave",
  city: "Seattle",
  job_title: "Business Analyst",
  family: ['Jim', 'Mary', 'John', 'Katie']
};
console.log(me.city);
console.log(me["city"]);
//console.log(me); commented out to not run the entire 'me' object

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
console.log('Question 4');
console.log(invitees.adults[0].dinnerChoice);

// 5. Access Pablo's table number.
console.log('Question 5');
console.log(invitees.children[1].allergies);

// 6. Access Lauren's seating specialConsideration.
console.log('Question 6');
console.log((invitees.adults[2].specialConsiderations.seating));

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
console.log('Question 7');
console.log(invitees.adults[1].dinnerChoice[2]);

// 8. Access Ada's allergies.
console.log('Question 8');
console.log(invitees.children[2].allergies);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log('Question 9');
var laurenDinner = {//need to somehow pull laurenDinner down in console.log ??
  appetizer: soup,
  dinner: chicken,
  dessert: ice cream
};
console.log(("Laurens appetizer is "+ appetizer.)("She will be eating " + dinner) ("for dinner and has selected " + dessert) ("as her dessert."));

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

console.log('Question 10');
var jsWorkshop = new Object();
console.log(jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

console.log('Question 11');
var jsWorkshop = new Object();
var classmates = ['JT', 'Ashley', 'Matt', 'Duncan', 'Emma']
console.log(classmates);

// 12. Get the length of the fourth classmate's name.

console.log('Question 12');
var jsWorkshop = new Object();
var classmates = ['JT', 'Ashley', 'Matt', 'Duncan', 'Emma'];
console.log(classmates[3].length);

// 13. Clear the classmates value.

console.log('Question 13');
var jsWorkshop = {
  classmates: ['JT', 'Ashley', 'Matt', 'Duncan', 'Emma']
    };
jsWorkshop.classmates = '';
console.log(jsWorkshop);

// 14. Create an empty array called "books".

console.log('Question 14');
var books = new Object();
console.log(books);

//15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.

console.log('Question 15');

var fictionBook12345 = {
  title: "Gone With The Wine",
  author: "Dionysis",
  numberOfPages: "324",
  price: "$349.00",
};
var romComBook12345 = {
  title: "Singled Out",
  author: "Cupid",
  numberOfPages: "12",
  price: "$12.95",
};
var sciFiBook12345 = {
  title: "Beyond Boba Fett",
  author: "Jedi Solo",
  numberOfPages: "1200",
  price: "$122.95",
};
console.log(romComBook12345);
console.log(sciFiBook12345);
console.log(fictionBook12345);

// 16. Access the author of the first book.

console.log('Question 16');

console.log(fictionBook12345.author);

// 17. Get the length of the author the the third book.

console.log('Question 17');

console.log(sciFiBook12345.author.length);

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

console.log('Question 18');

fictionBook12345.dateRead = "October 12, 1952",
romComBook12345.dateRead = "February 14, 1978",
sciFiBook12345.dateRead = "June 14, 2008",
console.log(fictionBook12345);
console.log(romComBook12345);
console.log(sciFiBook12345);

// 19. Remove the second book from the books Array.

console.log('Question 19');
var bookDelete = new Object();
romComBook12345 = bookDelete;
delete bookDelete;
console.log(romComBook12345);
