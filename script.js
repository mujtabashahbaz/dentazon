window.addEventListener("DOMContentLoaded", () => {
    const departments = document.querySelectorAll(".dept");
  
    departments.forEach(dept => {
      const imageUrl = dept.getAttribute("data-image");
      const contactUrl = dept.getAttribute("data-contact");
  
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = dept.querySelector("h3").textContent + " Image";
  
      const contactLink = document.createElement("a");
      contactLink.href = contactUrl;
      contactLink.textContent = "Contact Us";
  
      dept.insertBefore(img, dept.firstChild);
      dept.appendChild(contactLink);
    });
  });
  