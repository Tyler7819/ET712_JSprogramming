const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

function scrollGallery(pixels) {
    document.querySelector("div.gallerycontainer").scrollBy({
        left: pixels,
        behavior: "smooth"
    })
}

if (btnright) {
    btnright.addEventListener("click", function () {
        scrollGallery(500)
    })
}

if (btnleft) {
    btnleft.addEventListener("click", function () {
        scrollGallery(-500)
    })
}

const myForm = document.querySelector("#myForm")
const msg = document.querySelector(".msg")
const passwordInput = document.querySelector("#password")
const passwordError = document.querySelector("#passwordError")
const submitbtn = document.querySelector(".submitbtn")
const passwordmsg = document.querySelector(".passwordmsg")

if (submitbtn) {
    submitbtn.disabled = true
    submitbtn.classList.add("disablebtn")
    submitbtn.classList.remove("submitbtn")
}

if (passwordInput) {
    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value

        if (password.length < 8) {
            passwordError.textContent = "Password must be 8+ characters"
            submitbtn.disabled = true
            submitbtn.classList.add("disablebtn")
            submitbtn.classList.remove("submitbtn")
            passwordmsg.style.display = "none"
        } else {
            passwordError.textContent = ""
            submitbtn.disabled = false
            submitbtn.classList.add("submitbtn")
            submitbtn.classList.remove("disablebtn")
            passwordmsg.style.display = "block"
        }
    })
}

if (myForm) {
    myForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const usernameInput = document.querySelector("#username")
        const username = usernameInput.value

        if (username.trim() === "") {
            msg.textContent = "Please enter a username"
            return
        }

        msg.textContent = `Welcome to JS form ${username}`
        usernameInput.value = ""
    })
}