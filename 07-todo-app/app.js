window.onload = function () {
    let todoCollection = [{ id: "t001", label: "pot the plants" }];

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
            const paraElement = document.createElement("span")
            const checkElement = document.createElement("input")
            const divEl = document.createElement("div")

            checkElement.setAttribute("type", "checkbox")
            checkElement.setAttribute("class", "checkbox")
            paraElement.innerHTML = todo.label;
            paraElement.style.marginLeft = "10px";
            divEl.append(checkElement)
            divEl.append(paraElement)

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `DEL`
            deleteButton.classList.add("btnDelete");
            deleteButton.style.display = 'none';

            liElement.appendChild(divEl)
            liElement.appendChild(deleteButton)
            // liElement.innerHTML = `
            //     <p> ${todo.label} <p>
            //     <button class="btnDelete">DEL</button>
            // `
            liElement.setAttribute("id", todo.id);
            liElement.classList.add("list-item")

            let checkbox = liElement.querySelector(".checkbox")
            checkbox.addEventListener("change", function () {
                if (this.checked) {
                    return deleteButton.style.display = "block";
                }
                deleteButton.style.display = "none";
            })

            let btnDelete = liElement.querySelector(".btnDelete")
            btnDelete.addEventListener("click", btnDeleteHandler)
            ulContainer.prepend(liElement)
        })
        txtAddItem.value = '';
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