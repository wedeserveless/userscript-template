// get all the divs on the page
const divs = document.getElementsByTagName("div")

// give them a red shadow
for (let i = 0; i < divs.length; i++) {
  divs[i].style.boxShadow = "0px 0px 3px red"
}
