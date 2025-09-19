// ===========================
// Custom Form Validation
// ===========================
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      msg.textContent = "All fields are required.";
      msg.style.color = "red";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "Please enter a valid email.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "Thank you, " + name + "! Your message has been sent.";
    msg.style.color = "green";
    form.reset();
  });
}

