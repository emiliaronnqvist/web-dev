document.addEventListener("DOMContentLoaded", () => {
  console.log("JkpgCity App Initialized");

  // Function to fetch venues from the API
  async function fetchVenues() {
    try {
      // Replace with actual API endpoint later
      // const response = await fetch('/api/venues');
      // const venues = await response.json();

      // Placeholder data
      const venues = [
        { id: 1, name: "Sample Store", category: "Shop" },
        { id: 2, name: "Nice Restaurant", category: "Food" },
      ];

      renderVenues(venues);
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  }

  function renderVenues(venues) {
    const list = document.getElementById("venue-list");
    list.innerHTML = venues
      .map(
        (venue) => `
            <div class="venue-card">
                <h3>${venue.name}</h3>
                <p>Category: ${venue.category}</p>
            </div>
        `,
      )
      .join("");
  }

  fetchVenues();
});
