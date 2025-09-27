let students = [];
const form = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const id = document.getElementById('studentId').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const department = document.getElementById('department').value;
  const year = document.getElementById('year').value;

  if(id) {
    // Update existing student
    const studentIndex = students.findIndex(s => s.id === id);
    students[studentIndex] = { id, name, email, department, year };
  } else {
    // Add new student
    const newStudent = {
      id: Date.now().toString(),
      name,
      email,
      department,
      year
    };
    students.push(newStudent);
  }

  renderTable();
  form.reset();
  document.getElementById('studentId').value = '';
});

function renderTable() {
  studentTableBody.innerHTML = '';
  students.forEach(student => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.department}</td>
      <td>${student.year}</td>
      <td>
        <button onclick="editStudent('${student.id}')">Edit</button>
        <button onclick="deleteStudent('${student.id}')">Delete</button>
      </td>
    `;

    studentTableBody.appendChild(tr);
  });
}

function editStudent(id) {
  const student = students.find(s => s.id === id);
  document.getElementById('studentId').value = student.id;
  document.getElementById('name').value = student.name;
  document.getElementById('email').value = student.email;
  document.getElementById('department').value = student.department;
  document.getElementById('year').value = student.year;
}

function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
  renderTable();
}

// Initial render
renderTable();
