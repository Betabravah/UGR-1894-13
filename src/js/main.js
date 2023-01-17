// side menu

document.querySelector(".menu__icon").addEventListener
("click", showSideMenu);


function showSideMenu(e){
    e.preventDefault()

    document.querySelector(".nav__elem").classList.toggle("nav--show")
    document.querySelector(".link--current").classList.remove("link--current")
}


// validate forms

document.querySelector(".submit").addEventListener
("click", validateForm)

function showAlert(message) {
    const div = document.createElement('div')
    div.className = `alert`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const form = document.querySelector('#contact__form')
    container.insertBefore(div, form)

    // vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000)
}

function validateForm(e){
    e.preventDefault()

    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if(firstName.length == 0 || lastName.length == 0 || email.length == 0 || message.length == 0){

        const div = document.createElement('div')
        div.className = 'alert'
        div.appendChild(document.createTextNode("Please enter all required fields."))
        const container = document.querySelector('.contact__left')
        const form = document.querySelector('#contact__form')
        container.insertBefore(div, form)
        // vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}


