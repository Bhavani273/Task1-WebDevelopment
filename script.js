
console.log("Welcome to Bhavani's Portfolio");

function showMessage() {
    alert("Thank you for visiting my portfolio! Feel free to connect with me through LinkedIn or GitHub.");
}


const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
