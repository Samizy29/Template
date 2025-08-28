// Attendance form handling
const form = document.getElementById("attendanceForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide form and show confirmation
  form.parentElement.style.display = "none";
  confirmation.classList.remove("hidden");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
