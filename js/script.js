/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
`showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const studentList = document.querySelector('ul.student-list')

function showPage(list, page) {
   startIndex = (page * 9) - 9
   endIndex = page * 9
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if( i >= startIndex && i < endIndex ) {
         let studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
                  <h3>${data[i].name.first} ${data[i].name.last}</h3>
                  <span class="email">${data[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${data[i].registered.date}</span>
               </div>
            </li>`
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
 }

/* 
Add pagination function.
*/
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

/*
Add search bar
*/
function searchBar(list) {
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

   /*function to update the page */
   function updatePage(list) {
      if (list.length === 0) {
         showPage(list, 1);
         addPagination(list);
         studentList.innerHTML = `<p>No results. Please try a different name.</p>`;
      } else {
         studentList.innerHTML = ``;
         showPage(list, 1);
         addPagination(list);
      }
   }

   searchButton.addEventListener( 'click', () => {
      let matches = [];
      let inputValue = input.value;

      for (let i = 0; i < data.length; i++) {
         let studentName = Object.values(data[i].name).join(' ')
         matches.push(studentName)
      }
      if (matches.includes(inputValue)) {
         alert(`yes ${input.value} is a student`)         
      }
   });
}
const arr = ['my name is', 'Timothy']
console.log(arr.join(' '))

showPage(data, 1)
addPagination(data);
searchBar(data);

/* 
- 
*/