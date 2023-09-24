const navLinks = document.getElementById("nav-links")
const hamburgerBtn = document.getElementById("hamburger")
const closeBtn = document.getElementById("close")
const navLinks2 = document.getElementById("nav-links-2")
const hamburgerBtn2 = document.getElementById("hamburger-2")
const closeBtn2 = document.getElementById("close-2")
const navbar2 = document.getElementById("nav-contain")


// document.addEventListener("scroll", () => {
//   if (navbar2.getBoundingClientRect().top === 0) {
//     hamburgerBtn2.style.opacity = "1"
//   } else hamburgerBtn2.style.opacity = "0"
// })

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.add("navlinks-open")
  hamburgerBtn.style.display = "none"
  closeBtn.style.display = "inline"
})

hamburgerBtn2.addEventListener("click", () => {
  navLinks2.classList.add("navlinks-open")
  navLinks2.classList.add("navlinks-open-2")
  hamburgerBtn2.style.display = "none"
  closeBtn2.style.display = "inline"
})

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("navlinks-open")
  hamburgerBtn.style.display = "inline"
  closeBtn.style.display = "none"
})

closeBtn2.addEventListener("click", () => {
  navLinks2.classList.remove("navlinks-open")
  navLinks2.classList.remove("navlinks-open-2")
  hamburgerBtn2.style.display = "inline"
  closeBtn2.style.display = "none"
})
