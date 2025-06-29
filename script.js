document.getElementById("contactForm").addEventListener("submit", function (e){
    e.preventDefault();
    document.getElementById("responseMsg").textContent="Thank you! Your Message has been received.";
    this.result();
});