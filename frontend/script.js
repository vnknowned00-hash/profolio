// ==========================
// TYPING EFFECT
// ==========================
const text = "Justin Carl A. Moslares";
let i = 0;

function typing() {
  const typingElement = document.querySelector(".typing");
  if (!typingElement) return;

  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();


// ==========================
// SCROLL ANIMATION
// ==========================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// ==========================
// CHATBOT (SMART VERSION)
// ==========================
function chat() {
  const input = document.getElementById("chatInput").value.toLowerCase();
  let response = "";

  if (input.includes("skills")) {
    response = "I specialize in frontend and backend development with React, Node.js, Express, and PostgreSQL.";
  } else if (input.includes("projects")) {
    response = "Check my OJT Tracker and Pasabuy System projects for live examples of my work.";
  } else if (input.includes("contact")) {
    response = "You can reach me at mimongbahalay@gmail.com or 09561234328.";
  } else if (input.includes("who are you")) {
    response = "I'm Justin Carl A. Moslares, a full stack web developer.";
  } else {
    response = "Great question — ask me about skills, projects, or contact details.";
  }

  document.getElementById("chatResponse").innerText = response;
}


// ==========================
// ADMIN PANEL INTEGRATION
// ==========================
const savedAbout = localStorage.getItem("aboutText");

if (savedAbout) {
  const aboutTextElement = document.getElementById("aboutText");
  if (aboutTextElement) {
    aboutTextElement.innerText = savedAbout;
  }
}


// ==========================
// SMOOTH SCROLL FIX (BUTTON)
// ==========================
function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}
