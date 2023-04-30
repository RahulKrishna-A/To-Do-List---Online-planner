import {projectList} from "../index";
import {getActiveProject} from "./logicaloperations";
import {menuaddlisteners, todolisteners} from "./dynamiclisteners";
import {differenceInDays} from "date-fns";
import {new_project} from "./selectorsAndDOM";

const menu_container = document.getElementById("other__menu");
let todocontainer = document.getElementById("main__task_parent");

function eventrender() {
    emptyevents();
    new_project.btn_add_todo.style.display = "flex";
    console.log("---------------")
    console.log(projectList)
    projectList.forEach((value, index) => {
        let menuother = document.createElement("div");
        menuother.classList.add("menu__other");
        menuother.dataset.value = index;
        let p = document.createElement("p");
        p.innerText = value.Name;
        let deletes = document.createElement("div");
        deletes.setAttribute("title", "delete event");
        deletes.setAttribute("class", "menu_div_delete");
        deletes.dataset.value = index;
        // deletes.dataset.value = index;
        deletes.innerHTML = '<svg class="menu_delete" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n' +
            '                             width="30" height="30"\n' +
            '                             viewBox="0,0,256,256">\n' +
            '                            <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\n' +
            '                               stroke-linejoin="miter"\n' +
            '                               stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"\n' +
            '                               font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">\n' +
            '                                <g transform="scale(8.53333,8.53333)">\n' +
            '                                    <path d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z"></path>\n' +
            '                                </g>\n' +
            '                            </g>\n' +
            '                        </svg>';
        menuother.append(p);
        menuother.append(deletes);
        if (value.active) {
            menuother.classList.add("selected");
            new_project.content_header_editable.innerText = value.Name;
        }
        menu_container.append(menuother);
    })

    menuaddlisteners();
    todosRender();
}


function todosRender() {
    emptytodos();
    let activeproject = getActiveProject()[0];

    if (activeproject == undefined) {
        emptytodos();
        new_project.btn_add_todo.style.display = "none";
        new_project.content_header_editable.innerText = "Select/Create an event";
    }
    activeproject.todolist.forEach((value, index) => {
        let parent_div = document.createElement("div");
        parent_div.classList.add("main__tasks");
        parent_div.dataset.value = index;

        let form = document.createElement("form");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("data-value", index);
        checkbox.setAttribute("id", `maintask_checkbox${index}`)
        checkbox.setAttribute("type", "checkbox");
        if (value.complete) {

            parent_div.classList.add("checked");
        }
        let label = document.createElement("label");
        label.setAttribute("for", `maintask_checkbox${index}`);
        label.innerText = value.Name;

        form.append(checkbox);
        form.append(label);

        const daysleft = document.createElement("div");
        daysleft.classList.add("main__task_daysleft");
        const daysleft_p = document.createElement("p");
        if (value.DueDate === "") {
            daysleft_p.innerText = "No due";
        } else {
            let current_date = new Date();
            let due_date = new Date(value.DueDate);
            let diffs = differenceInDays(due_date, current_date)
            daysleft_p.innerText = `${diffs} days left`;
        }
        daysleft.append(daysleft_p);

        // create the button element
        const button = document.createElement('button');
        button.setAttribute('data-value', index);
        button.setAttribute('class', 'main__task_details_btn');
        button.textContent = 'Details';

        parent_div.append(form);
        parent_div.append(daysleft);
        parent_div.append(button);


        parent_div.innerHTML += `
                <svg class="main__task_delete" data-value = ${index} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="30" height="30"
                     viewBox="0,0,256,256"
                     style="fill:#000000;">
                    <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
                       stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                       font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z"></path>
                        </g>
                    </g>
                </svg>`;

        todocontainer.append(parent_div);
        if (value.priority === "High Priority") {
            parent_div.style.borderColor = "red";
        } else if (value.priority === "Medium Priority") {
            parent_div.style.borderColor = "yellow";
        } else {
            parent_div.style.borderColor = "green";
        }
        if (value.complete) {
            todocontainer.classList.add("checked");
        }

    })
    todolisteners();
}

function emptyevents() {
    menu_container.innerHTML = "";

}

function emptytodos() {
    todocontainer.innerHTML = "";

}

export {eventrender, todosRender}