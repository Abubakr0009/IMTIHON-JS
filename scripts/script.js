



// ================================ DASHBOARD ====================================
function openAddStudentForm() {
  document.getElementById('new-student-modal').style.display = 'block';
}

function closeAddStudentForm() {
  document.getElementById('new-student-modal').style.display = 'none';
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
    event.preventDefault(); 
    signin();
});

function index() {
    alert("Redirecting to the Sigin...");
    window.location.href = "Signin.html";
}





function signin() {
    alert("re to the Dashboard...");
    window.location.href = "student_list.html"; 

}
   


window.onload = function() {
    let savedData = localStorage.getItem("userData");

    if (savedData) {
        let parsedData = JSON.parse(savedData);
        document.getElementById("login").value = parsedData.login;
        document.getElementById("password").value = parsedData.password;
    }
};




window.onload = function() {
    let savedData = localStorage.getItem("userData");

    if (savedData) {
        let parsedData = JSON.parse(savedData);
        document.getElementById("login").value = parsedData.login;
        document.getElementById("password").value = parsedData.password;
    }
};

// =============================== STUDENT LIST ============================================


