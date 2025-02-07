



// ================================ DASHBOARD =====================================

// document.getElementById('add-student-btn').addEventListener('click', openAddStudentForm);
// document.getElementById('close-modal').addEventListener('click', closeAddStudentForm);
// document.getElementById('add-student-form').addEventListener('submit', addStudent);
// document.getElementById('search-bar').addEventListener('input', searchStudents);

function openAddStudentForm() {
  document.getElementById('new-student-modal').style.display = 'block';
}

function closeAddStudentForm() {
  document.getElementById('new-student-modal').style.display = 'none';
}

function addStudent(event) {
  event.preventDefault();
  const name = document.getElementById('student-name').value;
  const email = document.getElementById('student-email').value;
  const phone = document.getElementById('student-phone').value;
  const enroll = document.getElementById('student-enroll').value;
  const admissionDate = document.getElementById('admission-date').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${enroll}</td>
    <td>${admissionDate}</td>
    <td>
      <button class="edit-btn" onclick="editStudent(this)">✏️</button>
      <button class="delete-btn" onclick="deleteStudent(this)">🗑️</button>
    </td>
  `;
  document.querySelector('#students-table tbody').appendChild(newRow);
  closeAddStudentForm();
}

function editStudent(button) {
  const row = button.closest('tr');
  const cells = row.querySelectorAll('td');
  
  document.getElementById('student-name').value = cells[0].textContent;
  document.getElementById('student-email').value = cells[1].textContent;
  document.getElementById('student-phone').value = cells[2].textContent;
  document.getElementById('student-enroll').value = cells[3].textContent;
  document.getElementById('admission-date').value = cells[4].textContent;

  openAddStudentForm();

  row.remove();
}

function deleteStudent(button) {
  const row = button.closest('tr');
  row.remove();
}

function searchStudents(event) {
  const query = event.target.value.toLowerCase();
  const rows = document.querySelectorAll('#students-table tbody tr');

  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const email = row.cells[1].textContent.toLowerCase();

    if (name.includes(query) || email.includes(query)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}



function logout() {
    alert("sigin to the student...");
    window.location.href = "student_list.html";
}
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formning qayta yuklanishini oldini oladi
    signin();
});

function index() {
    alert("Redirecting to the homepage...");
    window.location.href = "Signin.html";
}


function index() {
    alert("Redirecting to the signin...");
    window.location.href = "Signin.html";
}


function signin() {
    alert("Redirecting to the Dashboard...");
    window.location.href = "student_list.html"; // Sahifa nomini dashboard sahifangizga moslang
}


   
// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 

    
//     let login = document.getElementById("login").value;
//     let password = document.getElementById("password").value;

//     if (login && password) {
//         let userData = {
//             login: login,
//             password: password
//         };

//         localStorage.setItem("userData", JSON.stringify(userData));
//         alert("Ma'lumotlar muvaffaqiyatli saqlandi!");
//     } else {
//         alert("Iltimos, barcha maydonlarni to'ldiring.");
//     }
// });

// window.onload = function() {
//     let savedData = localStorage.getItem("userData");

//     if (savedData) {
//         let parsedData = JSON.parse(savedData);
//         document.getElementById("login").value = parsedData.login;
//         document.getElementById("password").value = parsedData.password;
//     }
// };


// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 

//     let login = document.getElementById("login").value;
//     let password = document.getElementById("password").value;

//     if (login && password) {
//         let userData = {
//             login: login,
//             password: password
//         };

//         localStorage.setItem("userData", JSON.stringify(userData));

//         alert("Ma'lumotlar muvaffaqiyatli saqlandi!");
//     } else {
//         alert("Iltimos, barcha maydonlarni to'ldiring.");
//     }
// });

// window.onload = function() {
//     let savedData = localStorage.getItem("userData");

//     if (savedData) {
//         let parsedData = JSON.parse(savedData);
//         document.getElementById("login").value = parsedData.login;
//         document.getElementById("password").value = parsedData.password;
//     }
// };

// =============================== STUDENT LIST ============================================


