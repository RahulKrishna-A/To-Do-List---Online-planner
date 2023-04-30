import {projectList} from "../index";
import {eventrender,todosRender} from "./render";

function createProject(name){
    ClearActiveProjects();
    projectList.push({
        Name:name,
        todolist:[],
        active:true,
    })
    eventrender()
}

const createTOdo=(name,desc,due,priority)=>{
    let activeproject =getActiveProject()[0];
    activeproject.todolist.push(
        {
            Name:name,
            description:desc,
            DueDate:due,
            complete:false,
            priority:priority,
        }
    )
    todosRender();


}

const ClearActiveProjects = () => {
    projectList.forEach((value)=>{
        value.active = false;
    })
}

const getActiveProject = () =>{
    return projectList.filter((project)=>{
        return project.active===true;
    })
}

const changeActiveProjects = (index) =>{

    ClearActiveProjects();
    projectList[index].active = true;
    eventrender();

}

const deleteMenus = (index) =>{
    projectList.splice(index,1)
    eventrender();
}

const deletetodos = (index)=>{
    let activeProject  = getActiveProject()[0];

    activeProject.todolist.splice(index,1)
}

export {createProject,ClearActiveProjects,getActiveProject,createTOdo,changeActiveProjects,deleteMenus}