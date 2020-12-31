// Constant that will be used in several functions. Selects the UL with the class of student-list.
const studentList = document.querySelector('ul.student-list')

// This function shows a list of students on to the webpage. 
// We can pass array/objects into the list param. The page param is used to display what page we are currently in.
function showPage(list, page) {
   startIndex = (page * 9) - 9
   endIndex = page * 9
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if( i >= startIndex && i < endIndex ) {
         let studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>`
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
   if (list.length === 0) {
      studentList.innerHTML = '<li class="student-item cf">No Results</li>'
   }
}

// This function is used to add pagination on the web page and adds the class 'active' to the current active page
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
      for (let i = 1; i <= numOfPages; i++) {
         let button = `
         <li>
            <button type="button">${i}</button>
         </li>
         `
         linkList.insertAdjacentHTML("beforeend", button);
      }
// Changes the class name of an active button to apply css styling
   const firstButton = document.querySelector('button')
   firstButton.className = 'active'
   linkList.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') {
         const activeClass = document.querySelector('.active')
         activeClass.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent)
      }
   })
}

// Adds a search bar
const header = document.querySelector('.header')
const html = 
`<label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`
header.insertAdjacentHTML("beforeend", html)

const label = document.querySelector('.student-search');
const input = label.querySelector('#search');
const searchButton = label.querySelector('button');

// This function filters the student that is searched and stores it inside an array.
function searchedStudent() {
   let searched = [];
      for (let i = 0; i < data.length; i++) {
         let fullName = data[i].name.first.toLowerCase() + " " + data[i].name.last.toLowerCase()
         if (fullName.includes(input.value.toLowerCase())) {
            searched.push(data[i]);
         }
      }
   return searched;
}

// This keyup listener calls the searchedStudent() function and outputs the array into the ShowPage function.
input.addEventListener('keyup', (e) => {
   showPage(searchedStudent(), 1);
   addPagination(searchedStudent())
});

// This click listener does the same as the keyup listener but it listens to a click. It can also act as fallback.
searchButton.addEventListener('click', () => { 
   showPage(searchedStudent(), 1);
   addPagination(searchedStudent())
});

// Input data into the list param in showPage function to show all students, starting at page 1. 
// Input data into the list param in AddPagination function to apply pagination and select pages. 
showPage(data, 1);
addPagination(data);