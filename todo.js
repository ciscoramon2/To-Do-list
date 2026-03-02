const eventInput = document.getElementById("event");
const eventsHeader = document.getElementById("eventsHeader");
const eventsList = document.getElementById("eventsList");
const addEventButton = document.getElementById("addEventButton");
const checkbox = document.getElementById("event1");
const checkboxText = document.querySelector(".checkboxText");

   
function checkboxClicked(checkbox) {
    const checkboxText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        checkboxText.classList.add("text-gray-400","line-through");
    } else {
        checkboxText.classList.remove("text-gray-400","line-through");
    }
}

checkbox.addEventListener("change", function() {
    checkboxClicked(this);
});

localStorage.setItem("name","John Doe");
document.getElementById("demo").innerHTML = localStorage.getItem("name");