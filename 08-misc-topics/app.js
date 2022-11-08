const navList = document.querySelector(".nav-list")

navList.addEventListener("click", function (event) {
    console.log(event.target.href)
})














const parentDiv = document.querySelector(".parent")
const childDiv = document.querySelector(".child")

parentDiv.addEventListener("click", function (event) {
    console.log("Parent Clicked")
    console.log("EVENT : ", event);
})

childDiv.addEventListener("click", function (event) {
    // event.stopPropagation()
    console.log("Child Clicked")
    console.log("EVENT : ", event);
})

// childDiv.addEventListener()
