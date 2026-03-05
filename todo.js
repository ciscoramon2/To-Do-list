const addBtn = document.getElementById("addBtn");
const eventsHeader = document.getElementById("eventsHeader");
const eventsList = document.getElementById("eventsList");
const addEventButton = document.getElementById("addEventButton");
const checkbox = document.querySelectorAll(".checkbox");
const checkboxText = document.querySelector(".checkboxText");
const deleteAllBtn = document.getElementById("deleteAllBtn");

let eventKey = localStorage.length;
addBtn.addEventListener('click', function () {
    const eventInput = document.getElementById("event").value;
    if (eventInput == "" || eventInput == null) {
        alert("Please enter an event");
    } else { 
        eventKey++;
        localStorage.setItem("event" + eventKey, eventInput);
        alert("Event" + eventKey + " added successfully");
        alert("You have " + localStorage.length + " events in your list");
        const eventDiv = document.createElement("div");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "event" + eventKey;
            checkbox.classList.add("checkbox");
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.id = "deleteEvent" + eventKey;
            deleteBtn.classList.add("bg-pink-400", "text-white", "ml-2", "px-3", "rounded-sm", "text-lg", "shadow-md", "hover:bg-pink-600");
            deleteBtn.textContent = "Delete";
            const checkboxText = document.createElement("span");
            checkboxText.classList.add("checkboxText", "px-2");
            checkboxText.textContent = eventInput;
            eventDiv.appendChild(checkbox);
            eventDiv.appendChild(checkboxText);
            eventDiv.appendChild(deleteBtn);
            eventsList.appendChild(eventDiv);
    }
});

deleteAllBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete all events?")) {
        localStorage.clear();
        alert("All events deleted successfully");
        location.reload();
    }
});

window.onload = function() {
    for (let i = 1; i <= localStorage.length; i++) {
        const event = localStorage.getItem("event" + i);
        if (event) {
            const eventDiv = document.createElement("div");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "event" + i;
            checkbox.classList.add("checkbox");
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.id = "deleteEvent" + i;
            deleteBtn.classList.add("bg-pink-400", "text-white", "ml-2", "px-3", "rounded-sm", "text-lg", "shadow-md", "hover:bg-pink-600");
            deleteBtn.textContent = "Delete";
            const checkboxText = document.createElement("span");
            checkboxText.classList.add("checkboxText", "px-2");
            checkboxText.textContent = event;
            eventDiv.appendChild(checkbox);
            eventDiv.appendChild(checkboxText);
            eventDiv.appendChild(deleteBtn);
            eventsList.appendChild(eventDiv);
        }
    }
};


// function checkboxClicked(checkbox) {
//     const checkboxText = checkbox.nextElementSibling;
//     if (checkbox.checked) {
//         checkboxText.classList.add("text-gray-400","line-through");
//     } else {
//         checkboxText.classList.remove("text-gray-400","line-through");
//     }
// }

// checkbox.addEventListener("change", function() {
//     checkboxClicked(this);
// });