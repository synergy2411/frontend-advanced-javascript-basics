window.onload = function () {
    // const ul = document.querySelector("ul")

    // ul.classList.add("container")

    // const liChildren = ul.children

    // for (let i = 0; i < liChildren.length; i++) {
    //     liChildren[i].classList.add("list-item")
    // }

    // // console.log(ul.querySelector(".list-item"));
    // ul.querySelector(".list-item").classList.add("first-child")

    // console.log(ul.querySelector("li").nextSibling)


    // const firstChild = document.querySelector("li");
    // console.log(firstChild.parentElement)           // ?


    // const mainEl = document.querySelector("main");

    // const liItem = mainEl.querySelector("li");

    // console.log(liItem.parentElement)


    // console.log(document.body.firstElementChild)

    // console.log(document.querySelector("ul")
    //     .firstElementChild.nextElementSibling
    //     .previousElementSibling.parentElement)          // ?

    document.querySelector(".first-child")
        .closest("header")
        .nextElementSibling
        .querySelector("li")
        .innerHTML = `
            <p>Changed</p>
        `

}