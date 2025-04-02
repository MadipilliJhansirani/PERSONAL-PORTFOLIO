document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const projectCards = document.querySelectorAll(".project-card");
  
    // Highlight active section in navbar on scroll
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 80) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    // Add interactive effects for project icons
    projectCards.forEach((card) => {
      // Hover effect (for desktop users)
      card.addEventListener("mouseover", function () {
        card.style.transform = "scale(1.1)";
        card.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
      });
  
      card.addEventListener("mouseout", function () {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
      });
  
      // Touch effect (for mobile users)
      card.addEventListener("touchstart", function () {
        card.style.transform = "scale(1.1)";
        card.style.transition = "transform 0.3s ease-in-out";
      });
  
      card.addEventListener("touchend", function () {
        card.style.transform = "scale(1)";
      });
  
      // Click event to display project details
      card.addEventListener("click", function () {
        const projectTitle = card.querySelector("h3").textContent;
        alert(`You clicked on: ${projectTitle}\nMore details coming soon! 🚀`);
      });
    });
  
    // Contact form validation
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!name || !email || !subject || !message) {
          alert("All fields are required!");
          return;
        }
  
        if (!emailPattern.test(email)) {
          alert("Enter a valid email address!");
          return;
        }
  
        alert("✅ Message sent successfully!");
        this.reset();
      });
  });
  