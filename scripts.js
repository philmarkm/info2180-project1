/* Add your JavaScript to this file */
window.onload= ()=>{
    let subscribeBtn = document.querySelector("section.newsletter form button.btn");
    let eField = document.querySelector("section.newsletter form input[type=\"email\"]");
    eField.setAttribute("placeholder", "Email address");
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let msg = document.querySelector("section.newsletter div.message");
    subscribeBtn.onclick = (event)=>{
        event.preventDefault();
        if (eField.value.length != 0 && emailRegex.test(eField.value.toLowerCase())){
            msg.innerHTML = `Thank you! Your email address ${eField.value} has been added to our mailing list!`;
        }
        else{
            msg.innerHTML = "Please enter a valid email address.";
        }
    }
}