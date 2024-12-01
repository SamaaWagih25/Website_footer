 // Function to handle Accept button click
 //Pop-up messages
function accept() {
    alert("You have accepted the use of cookies.");
    // Logic to hide the cookie consent banner
    document.querySelector('.container').style.display = 'none';
    
}

// Function to handle Decline button click
function decline() {
    alert("You have declined the use of cookies."); //pop-up decline message
    // Logic to hide the cookie consent banner
    document.querySelector('.container').style.display = 'none';

}

// Adding event listeners to the buttons
document.getElementById("accept-btn").addEventListener("click", accept);
document.getElementById("decline-btn").addEventListener("click", decline);