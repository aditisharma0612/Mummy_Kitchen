// menu.js

// Fetch cooks from localStorage and display them
function displayCooks(filterLocation = "") {
    const cooks = JSON.parse(localStorage.getItem("cooks")) || [];
    const cookListDiv = document.getElementById("cookList");

    // Clear existing cook cards
    cookListDiv.innerHTML = "";

    // Filter cooks by location if provided
    const filteredCooks = filterLocation
        ? cooks.filter(cook => cook.location.toLowerCase() === filterLocation.toLowerCase())
        : cooks;

    if (filteredCooks.length > 0) {
        // Generate and append cook cards
        filteredCooks.forEach(cook => {
            const cookCard = `
                <div class="cook-card">
                    <h3>${cook.name}</h3>
                    <p><strong>Location:</strong> ${cook.location}</p>
                    <p><strong>Meal Type:</strong> ${cook.mealType}</p>
                    <p><strong>Thali:</strong> ${cook.thali}</p>
                    <p><strong>Price:</strong> ₹${cook.price}</p>
                    <p><strong>Timings:</strong> ${cook.timings}</p>
                </div>
            `;
            cookListDiv.innerHTML += cookCard;
        });
    } else {
        cookListDiv.innerHTML = "<p>No cooks available for the selected location.</p>";
    }
}

// Handle filter button click
document.getElementById("filterBtn").addEventListener("click", () => {
    const filterLocation = document.getElementById("filterLocation").value;
    displayCooks(filterLocation);
});

// Load all cooks on page load
window.onload = () => displayCooks();
