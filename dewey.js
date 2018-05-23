'use strict';
const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];
function searchbook(library, book){
  let bookmatch = library.filter(books => books.dewey === book.dewey);
  let authormatch = library.filter(books => books.author === book.author);
  let titlematch = library.filter(books => books.title=== book.title);
 
  if(bookmatch.length === 1){
    return bookmatch;
  }
  if (authormatch.length === 1) {
    return authormatch;
  }
  if (titlematch.length === 1) {
    return titlematch;
  }else{
    return 'No matches';
  }
}

console.log(searchbook(library, { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' }));
console.log(searchbook(library, {author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }));
console.log(searchbook(library, { author: 'Cowlishaw, Miki' }));