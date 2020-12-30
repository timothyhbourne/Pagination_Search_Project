
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

   searchButton.addEventListener('click', () => {
         let matches = [];
         
         for (let i = 0; i < data.length; i++) {
            if (data[i].name.first == input.value || data[i].name.last == input.value) {
               matches.push(data[i])
            }
         }
         console.log(matches);

         showPage(matches, 1);
      addPagination(matches);
   })

showPage(data, 1)
addPagination(data);
