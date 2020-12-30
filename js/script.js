
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

   function searchedStudent() {
      let searched = [];
         for (let i = 0; i < data.length; i++) {
           let firstName = data[i].name.first.toLowerCase();
           let lastName = data[i].name.last.toLowerCase();
           let fullName = data[i].name.first.toLowerCase() + " " + data[i].name.last.toLowerCase()
            if (input.value == firstName || input.value == lastName || input.value == fullName) {
               searched.push(data[i]);
            }
         }
      return searched;
   }

   label.addEventListener('keyup', (e) => {
      if (studentList.innerHTML == `<ul class="student-list"></ul>`) {
         alert('no student');
      } else {
      showPage(searchedStudent(), 1);
      addPagination(searchedStudent())
      }
            
   });

   searchButton.addEventListener('click', () => { 
         showPage(searchedStudent(), 1);
         addPagination(searchedStudent())
   });

   showPage(data, 1);
addPagination(data);