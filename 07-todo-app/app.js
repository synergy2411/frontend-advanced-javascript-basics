window.onload = function () {
    let todoCollection = [];

    let btnAddItem = document.querySelector(".btnAddItem")
    let txtAddItem = document.querySelector(".txtAddItem")
    let ulContainer = document.querySelector(".list-container")


    const deleteTodoItem = (todoId) => {
        todoCollection = todoCollection.filter(todo => todo.id !== todoId)
    }

    const btnDeleteHandler = function () {
        let todoId = this.closest(".list-item").id
        deleteTodoItem(todoId)
        createUI()
    }
    const createUI = () => {
        ulContainer.innerHTML = ''
        todoCollection.forEach(todo => {
            const liElement = document.createElement("li")
            liElement.innerHTML = `
                <p> ${todo.label} <button class="btnDelete">DEL</button><p>
            `
            liElement.setAttribute("id", todo.id);
            liElement.classList.add("list-item")
            let btnDelete = liElement.querySelector(".btnDelete")
            btnDelete.addEventListener("click", btnDeleteHandler)
            ulContainer.prepend(liElement)

        })
    }

    btnAddItem.addEventListener("click", function (event) {
        event.preventDefault();
        let itemLabel = txtAddItem.value;
        if (itemLabel.trim() === '') {
            return;
        }
        let item = {
            id: "t00" + (todoCollection.length + 1),
            label: itemLabel
        }
        todoCollection.push(item)
        createUI()
    })




    createUI();
}