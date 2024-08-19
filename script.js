// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function toggleList(event) {
    const button = event.currentTarget; // Get the button that was clicked
    let list = button.nextSibling; // Get the next sibling of the button (which will be the list if it exists)

    // Check if the next sibling is an unordered list
    if (list && list.tagName === "UL") {
    // If the list is already visible, hide it
        if (list.style.display === "none") {
            list.style.display = "block";
        } else {
            // Otherwise, hide the list
            list.style.display = "none";
        }
    } else {
        // Create a new unordered list if it doesn't exist
        list = document.createElement("ul");

        // Array of items to include in the list
        const items = ["Ferrets", "Rats", "Mice", "Hamsters", "Guinea Pigs", "Hedgehogs", "Tarantulas", "Chinchillas"];

        // Create and append each list item to the unordered list
        for (const item of items) {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            list.appendChild(listItem);
        }

        // Insert the list after the button
        button.parentNode.insertBefore(list, button.nextSibling);
    }

    // Optionally, remove the event listener if you want the button to be clickable only once
    // button.removeEventListener("click", toggleList);
}

// Attach the event listener to all buttons
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", toggleList);
}