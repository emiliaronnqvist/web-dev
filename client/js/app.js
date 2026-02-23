// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  //Fetches all stores from the server for index.html
  fetch("/stores")
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("stores");

      data.forEach((store) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <h2>${store.name}</h2>
          <p>${store.description}</p>
          <a href="/store/${store.slug}" target="_blank">Visit</a>
          <hr>
        `;

        list.appendChild(li);
      });
    })
    .catch((err) => console.error("Error loading stores:", err));

  //Fetches a specific store from the server for store.html template
  fetch(`/stores/${slug}`)
    .then((res) => res.json())
    .then((data) => {
      const div = document.getElementById("store_info");

      div.innerHTML = `
        <h2>${store.name}</h2>
        <p>${store.description}</p>
        <a href="${store.url}" target="_blank">Visit ${store.name}</a>
        <hr>
      `;
    })
    .catch((err) => console.error("Error loading store:", err));
});
