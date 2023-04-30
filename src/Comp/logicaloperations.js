import {projectList} from "../index";
import {eventrender, todosRender} from "./render";
import {new_project} from "./selectorsAndDOM";


function createProject(name) {
    ClearActiveProjects();
    projectList.push({
        Name: name,
        todolist: [],
        active: true,
    })
    eventrender()
    storemyproject()
}

const createTOdo = (name, desc, due, priority) => {
    let activeproject = getActiveProject()[0];
    activeproject.todolist.push(
        {
            Name: name,
            description: desc,
            DueDate: due,
            complete: false,
            priority: priority,
        }
    )
    todosRender();
    storemyproject()


}

const ClearActiveProjects = () => {
    projectList.forEach((value) => {
        value.active = false;
    })
    storemyproject()
}

const getActiveProject = () => {
    return projectList.filter((project) => {
        return project.active === true;
    })
}

const changeActiveProjects = (index) => {

    ClearActiveProjects();
    projectList[index].active = true;
    eventrender();

}

const deleteMenus = (index) => {
    projectList.splice(index, 1)
    eventrender();
    storemyproject()
}

const displaytodos = (index) => {
    new_project.show((new_project.todo_details));
    let activeProject = getActiveProject()[0];

    new_project.todo_details_name.innerText = activeProject.todolist[index].Name;
    new_project.todo_details_desc.innerText = activeProject.todolist[index].description;
    new_project.todo_details_duedate.innerText = activeProject.todolist[index].DueDate;
    new_project.todo_details_priority.innerText = activeProject.todolist[index].priority;
    new_project.todo_details_X.addEventListener("click", () => {
        new_project.hide((new_project.todo_details));
    })
}

const deletetodos = (index) => {
    let activeProject = getActiveProject()[0];
    activeProject.todolist.splice(index, 1);
    eventrender();
    storemyproject()
}

const checking = (index) => {
    let activeProject = getActiveProject()[0];
    if (activeProject.todolist[index].complete) {
        activeProject.todolist[index].complete = false;
    } else {
        activeProject.todolist[index].complete = true;
    }
    todosRender()
    storemyproject()
}

const storemyproject = () => {
    window.localStorage.setItem("user", JSON.stringify(projectList));
}

export {
    createProject,
    ClearActiveProjects,
    getActiveProject,
    createTOdo,
    changeActiveProjects,
    deleteMenus,
    deletetodos,
    displaytodos,
    checking,
}