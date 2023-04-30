import {changeActiveProjects, deleteMenus, displaytodos, deletetodos, checking} from "./logicaloperations";


function menuaddlisteners() {
    const menu_delete = document.querySelectorAll(".menu_div_delete");
    const menus = document.querySelectorAll(".menu__other");

    menu_delete.forEach(value => {
        value.addEventListener("click", (e) => {
            const dataValue = e.currentTarget.getAttribute('data-value');
            deleteMenus(dataValue);

        })
    })
    menus.forEach((value) => {

        value.addEventListener("click", (e) => {
            console.log(e)
            changeActiveProjects(e.target.dataset.value);

        })
    })
}


function todolisteners() {
    const todo_details = document.querySelectorAll(".main__task_details_btn");
    const todo_delete = document.querySelectorAll(".main__task_delete");
    const check_boxes = document.querySelectorAll("input[type=checkbox]")
    console.log(check_boxes);
    todo_details.forEach((value) => {
        value.addEventListener("click", (e) => {
            displaytodos(e.target.dataset.value)
        })
    })
    todo_delete.forEach((value) => {
        value.addEventListener("click", (e) => {
            deletetodos(e.currentTarget.getAttribute('data-value'));
        })
    })

    check_boxes.forEach((value) => {
        value.addEventListener("click", (e) => {
            checking(e.currentTarget.getAttribute('data-value'));
        })

    })
}

export {menuaddlisteners, todolisteners}