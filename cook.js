// cook.js

// Function to open the corresponding form
function openForm(type) {
    const newCookForm = document.getElementById("newCookForm");
    const existingCookForm = document.getElementById("existingCookForm");

    if (type === "newCook") {
        newCookForm.style.display = "block";
        existingCookForm.style.display = "none";
    } else if (type === "existingCook") {
        existingCookForm.style.display = "block";
        newCookForm.style.display = "none";
    }
}

// Function to close the forms
function closeForm() {
    document.getElementById("newCookForm").style.display = "none";
    document.getElementById("existingCookForm").style.display = "none";
}

// Handle New Cook Registration
document.getElementById("registerCookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather data
    const newCook = {
        name: document.getElementById("newCookName").value.trim(),
        email: document.getElementById("newCookEmail").value.trim(), // Unique identifier
        location: document.getElementById("newCookLocation").value.trim(),
        availability: document.getElementById("availability").value.trim(),
        timings: document.getElementById("timings").value.trim(),
        details: document.getElementById("foodDetails").value.trim(),
        type: document.getElementById("foodType").value.trim(),
        price: document.getElementById("foodPrice").value.trim(),
        hygiene: document.getElementById("hygiene").value.trim(),
        image: document.getElementById("foodImage").files[0]?.name || "no_image.jpg" // Default if no image is selected
    };

    // Retrieve existing cooks from localStorage
    const cooks = JSON.parse(localStorage.getItem("cooks")) || [];

    // Check for duplicate email
    const duplicate = cooks.find(cook => cook.email === newCook.email);
    if (duplicate) {
        alert("This email is already registered. Please use a different email.");
        return;
    }

    // Add new cook to the list
    cooks.push(newCook);

    // Save updated cooks list to localStorage
    localStorage.setItem("cooks", JSON.stringify(cooks));

    alert("Cook registered successfully!");
    closeForm();
    document.getElementById("registerCookForm").reset();
});

// Handle Existing Cook Verification
document.getElementById("existingCookVerificationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredEmail = document.getElementById("existingCookEmail").value.trim();

    const cooks = JSON.parse(localStorage.getItem("cooks")) || [];

    const cook = cooks.find(cook => cook.email === enteredEmail);

    if (cook) {
        alert(`Welcome back, ${cook.name}! You can now manage your account.`);
        closeForm();
        // Here, you can display the cook's dashboard or details
    } else {
        alert("No matching cook found. Please check your email or register as a new cook.");
    }
});






// cook.js

// Function to open the corresponding form
// function openForm(type) {
//     const newCookForm = document.getElementById("newCookForm");
//     const existingCookForm = document.getElementById("existingCookForm");

//     if (type === "newCook") {
//         newCookForm.style.display = "block";
//         existingCookForm.style.display = "none";
//     } else if (type === "existingCook") {
//         existingCookForm.style.display = "block";
//         newCookForm.style.display = "none";
//     }
// }

// // Function to close the forms
// function closeForm() {
//     document.getElementById("newCookForm").style.display = "none";
//     document.getElementById("existingCookForm").style.display = "none";
// }

// // Handle New Cook Registration
// document.getElementById("registerCookForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Gather data
//     const newCook = {
//         name: document.getElementById("newCookName").value,
//         location: document.getElementById("newCookLocation").value,
//         availability: document.getElementById("availability").value,
//         timings: document.getElementById("timings").value,
//         details: document.getElementById("foodDetails").value,
//         type: document.getElementById("foodType").value,
//         price: document.getElementById("foodPrice").value,
//         hygiene: document.getElementById("hygiene").value,
//         image: document.getElementById("foodImage").files[0].name, // Store filename
//         password: document.getElementById("cookPassword").value // Password stored
//     };

//     // Retrieve existing cooks from localStorage
//     const cooks = JSON.parse(localStorage.getItem("cooks")) || [];

//     // Add new cook to the list
//     cooks.push(newCook);

//     // Save updated cooks list to localStorage
//     localStorage.setItem("cooks", JSON.stringify(cooks));

//     console.log("Cook details saved", newCook); // Debugging
//     alert("Cook details saved successfully!");
//     closeForm();
//     document.getElementById("registerCookForm").reset();
// });

// // Handle Existing Cook Password Verification
// document.getElementById("existingCookPasswordForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const enteredPassword = document.getElementById("cookPassword").value;
//     const cooks = JSON.parse(localStorage.getItem("cooks")) || [];

//     let cookFound = false;
//     cooks.forEach(function (cook) {
//         console.log(`Checking password: ${enteredPassword} vs ${cook.password}`); // Debugging

//         if (cook.password === enteredPassword) {
//             cookFound = true;
//             alert("Verification successful! You can now manage your account.");
//             closeForm();
//             // Proceed with showing the management features
//             // e.g., viewOrders(), updateItems(), etc.
//         }
//     });

//     if (!cookFound) {
//         alert("Incorrect password. Please try again.");
//     }
// });



// // Function to open the corresponding form
// function openForm(type) {
//     const newCookForm = document.getElementById("newCookForm");
//     const existingCookForm = document.getElementById("existingCookForm");

//     if (type === "newCook") {
//         newCookForm.style.display = "block";
//         existingCookForm.style.display = "none";
//     } else if (type === "existingCook") {
//         existingCookForm.style.display = "block";
//         newCookForm.style.display = "none";
//     }
// }

// // Function to close the forms
// function closeForm() {
//     document.getElementById("newCookForm").style.display = "none";
//     document.getElementById("existingCookForm").style.display = "none";
// }

// // Handle New Cook Registration
// document.getElementById("registerCookForm").addEventListener("submit", function (event) {
//     event.preventDefault();


//     // Gather data
//     const newCook = {
//         name: document.getElementById("newCookName").value,
//         location: document.getElementById("newCookLocation").value,
//         availability: document.getElementById("availability").value,
//         timings: document.getElementById("timings").value,
//         details: document.getElementById("foodDetails").value,
//         type: document.getElementById("foodType").value,
//         price: document.getElementById("foodPrice").value,
//         hygiene: document.getElementById("hygiene").value,
//         image: document.getElementById("foodImage").files[0].name, // Store filename
//     };
    

//     // Save new cook to localStorage
//     const cooks = JSON.parse(localStorage.getItem("cooks")) || [];
//     cooks.push(newCook);
//     localStorage.setItem("cooks", JSON.stringify(cooks));

//     alert("Cook details saved successfully!");
//     closeForm();
//     document.getElementById("registerCookForm").reset();
// });


// // Handle Existing Cook Password Verification
// document.getElementById("existingCookPasswordForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const enteredPassword = document.getElementById("cookPassword").value;
//     const cooks = JSON.parse(localStorage.getItem("cooks")) || [];

//     let cookFound = false;
//     cooks.forEach(function (cook) {
//         if (cook.password === enteredPassword) {
//             cookFound = true;
//             alert("Verification successful! You can now manage your account.");
//             closeForm();
//             // Proceed with showing the management features
//             // e.g., viewOrders(), updateItems(), etc.
//         }
//     });

//     if (!cookFound) {
//         alert("Incorrect password. Please try again.");
//     }
// });



// // Existing Cook Actions
// function viewOrders() {
//     alert("Feature to view orders coming soon!");
// }

// function updateItems() {
//     alert("Feature to update/add/delete items coming soon!");
// }

// function viewEarnings() {
//     alert("Feature to view total earnings coming soon!");
// }

// function viewFeedback() {
//     alert("Feature to view feedback coming soon!");
// }
