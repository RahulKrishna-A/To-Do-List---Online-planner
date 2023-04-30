import {changeActiveProjects, deleteMenus} from "./logicaloperations";


function menuaddlisteners() {
    const menu_delete = document.querySelectorAll(".menu_div_delete");
    const menus = document.querySelectorAll(".menu__other");

    // menu_delete.forEach(value => {
    //     value.addEventListener("click", (e) => {
    //         e.stopPropagation();
    //         console.log(e.dataset.value)
    //         // deleteMenus(e);
    //
    //     })
    // })
    menus.forEach((value) => {

        value.addEventListener("click", (e) => {
            console.log(e)
            changeActiveProjects(e.target.dataset.value);
        })
    })
}

export {menuaddlisteners}