// Handle search icon click
document.getElementById("search-icon").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Search icon clicked! Implement search functionality here.");
});

// Handle bell icon click for notifications
document.getElementById("bell-icon").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Notification icon clicked! Implement notifications here.");
});

// Handle user icon click for user profile
document.getElementById("user-icon").addEventListener("click", function(event) {
    event.preventDefault();
    alert("User profile icon clicked! Implement user profile functionality here.");
});
document.getElementById('sidebar-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('open');
    document.body.classList.remove('sidebar-open');
});


