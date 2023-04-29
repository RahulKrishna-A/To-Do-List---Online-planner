import {new_project} from "./selectorsAndDOM";
import {createProject} from "./logicaloperations";

// --------new event
new_project.menu_addEvents.addEventListener("click",(e)=>{
    new_project.show(new_project.blur_screen);
    new_project.show(new_project.new_eventForm);
});

new_project.new_eventForm_cancel.addEventListener("click",(e)=>{
    new_project.hide(new_project.blur_screen);
    new_project.hide(new_project.new_eventForm);
    new_project.new_event_error.style.display="none"});

new_project.new_eventForm_submit.addEventListener("click",(e) => {
    e.preventDefault();
    createProject(new_project.new_eventForm_input.value);
    if(new_project.new_eventForm_input.value!==""){
    new_project.hide(new_project.blur_screen);
    new_project.hide(new_project.new_eventForm);
    new_project.new_event_error.style.display="none";}
    else{
        new_project.new_event_error.style.display="flex"}


});


//--------new task[event]

new_project.btn_add_todo.addEventListener("click",(e)=>{
   new_project.show(new_project.add_todo_form);
    new_project.show(new_project.blur_screen);
});

new_project.add_todo_form_cancel.addEventListener("click",(e)=>{
    new_project.hide(new_project.add_todo_form);
    new_project.hide(new_project.blur_screen);
});



new_project.add_todo_submit.addEventListener("click" ,(e)=>{
    e.preventDefault();
    // createTodo()
    new_project.hide(new_project.add_todo_form);
    new_project.hide(new_project.blur_screen);

});
