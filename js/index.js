const welcomeForm = document.getElementById('welcomeForm');

welcomeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // It prevents default form submission
  console.log("hey, i executed this place.");
  
  const nameInput = document.getElementById('name');
  const name = nameInput.value;

  // We are Saving the name to localStorage
  localStorage.setItem('userName', name);
  window.location.href = 'enigma.html'; 
});