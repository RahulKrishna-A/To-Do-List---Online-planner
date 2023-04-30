import {new_project} from "./selectorsAndDOM";
import {createProject,createTOdo} from "./logicaloperations";
import {format, differenceInDays, parseISO} from "date-fns";

// --------new event
new_project.menu_addEvents.addEventListener("click", (e) => {
    new_project.show(new_project.blur_screen);
    new_project.show(new_project.new_eventForm);
});

new_project.new_eventForm_cancel.addEventListener("click", (e) => {
    new_project.hide(new_project.blur_screen);
    new_project.hide(new_project.new_eventForm);
    new_project.new_event_error.style.display = "none";

});

new_project.new_eventForm_submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (new_project.new_eventForm_input.value!=="") {
        new_project.hide(new_project.blur_screen);
        new_project.hide(new_project.new_eventForm);
        new_project.new_event_error.style.display = "none";
        createProject(new_project.new_eventForm_input.value);
        new_project.new_eventForm_input.value="";
    } else {
        new_project.new_event_error.style.display = "flex"
    }


});


//--------new task[event]

new_project.btn_add_todo.addEventListener("click", (e) => {
    new_project.show(new_project.add_todo_form);
    new_project.show(new_project.blur_screen);
});

new_project.add_todo_form_cancel.addEventListener("click", (e) => {
    new_project.hide(new_project.add_todo_form);
    new_project.hide(new_project.blur_screen);
    new_project.form_todo_error.style.display = "none";
});


new_project.add_todo_submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (new_project.add_todo_title.value) {
        new_project.hide(new_project.add_todo_form);
        new_project.hide(new_project.blur_screen);
        new_project.form_todo_error.style.display = "none";
        createTOdo(new_project.add_todo_title.value,
            new_project.add_todo_desc.value,
            new_project.add_todo_dateTime.value,
            new_project.add_todo_Priority.value)
            new_project.add_todo_title.value="";
            new_project.add_todo_desc.value="";
            new_project.add_todo_dateTime.value=""
    }
    else{
        new_project.form_todo_error.style.display = "flex"
    }
    // createTodo()
});
