document.addEventListener("DOMContentLoaded", () => {
    const foodForm = document.getElementById("foodForm");
    const detailsForm = document.getElementById("detailsForm");
    const itemsContainer = document.getElementById("itemsContainer");

    // Retrieve stored food items
    const storedItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    renderFoodItems();

    // Add Food Item
    foodForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const foodName = document.getElementById("foodName").value.trim();
        const foodPrice = document.getElementById("foodPrice").value;
        const foodDescription = document.getElementById("foodDescription").value.trim();
        const foodImage = document.getElementById("foodImage").files[0];

        if (foodName && foodPrice && foodDescription && foodImage) {
            const newItem = {
                id: Date.now(),
                name: foodName,
                price: foodPrice,
                description: foodDescription,
                image: URL.createObjectURL(foodImage)
            };

            storedItems.push(newItem);
            localStorage.setItem("foodItems", JSON.stringify(storedItems));
            renderFoodItems();

            foodForm.reset();
            alert("Food item added successfully!");
        }
    });

    // Render Food Items
    function renderFoodItems() {
        itemsContainer.innerHTML = "";
        storedItems.forEach(item => {
            const foodCard = document.createElement("div");
            foodCard.classList.add("food-card");
            foodCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: ₹${item.price}</p>
                <button onclick="removeFoodItem(${item.id})">Remove</button>
            `;
            itemsContainer.appendChild(foodCard);
        });
    }

    // Remove Food Item
    window.removeFoodItem = function (id) {
        const index = storedItems.findIndex(item => item.id === id);
        if (index > -1) {
            storedItems.splice(index, 1);
            localStorage.setItem("foodItems", JSON.stringify(storedItems));
            renderFoodItems();
        }
    };

    // Update Personal Details
    detailsForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const location = document.getElementById("cookLocation").value.trim();
        const email = document.getElementById("cookEmail").value.trim();
        const phone = document.getElementById("cookPhone").value.trim();

        const personalDetails = { location, email, phone };
        localStorage.setItem("cookDetails", JSON.stringify(personalDetails));
        alert("Details updated successfully!");
    });
});
