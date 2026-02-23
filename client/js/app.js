// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetch("/stores")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("stores");

      data.forEach(store => {
        const li = document.createElement("li");

        li.innerHTML = `
          <h2>${store.name}</h2>
          <p>${store.description}</p>
          <a href="${store.url}" target="_blank">Visit</a>
          <hr>
        `;

        list.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading stores:", err));
});