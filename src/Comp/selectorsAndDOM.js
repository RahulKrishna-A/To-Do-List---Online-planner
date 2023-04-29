const new_project = (()=>{

    // blur screen
    const blur_screen = document.querySelector(".display_blur");

    // Content header
    const content_header_editable  = document.getElementById("main__content_header_editable")
    // New event
    const menu_addEvents = document.getElementById("menu__add_events");
    const new_eventForm = document.getElementById("new_event_form");
    const new_eventForm_input = document.getElementById("new_event_form_textbox");
    const new_eventForm_cancel = document.getElementById("new_event_form_x");
    const new_eventForm_submit = document.getElementById("new_event_form_submit");
    const new_event_error  = document.getElementById("new_event_form_error");
    // Add tasks
    const btn_add_todo = document.getElementById("main__add_todos");
    const add_todo_form = document.getElementById("menu__form_todoadd");
    const add_todo_form_cancel = document.getElementById("menu__form_todoadd_X");
    const add_todo_title = document.getElementById("form_todo_title");
    const add_todo_desc  =  document.getElementById("form_todo_desc");
    const add_todo_dateTime = document.getElementById("form_todo_datetime");
    const add_todo_Priority = document.getElementById("form_todo_priority");
    const add_todo_submit =  document.getElementById("form_todo_submit");
    // details_todo
    const todo_details=document.getElementById("display_todo_details");
    const todo_details_name = document.getElementById("todo_details_name_editable");
    const todo_details_desc = document.getElementById("todo_details_desc_editable");
    const todo_details_duedate = document.getElementById("todo_details_duedate_editable");
    const todo_details_X = document.getElementById("todo_details_X");
    // edit task
    const edit_task_window = document.getElementById("menu__form_todo_edit");
    const edit_task_name = document.getElementById("form_edit_title");
    const edit_task_desc = document.getElementById("form_edit_desc");
    const edit_task_datetime = document.getElementById("form_edit_datetime");
    const edit_task_priority = document.getElementById("form_edit_priority");



    const show = (element) =>{
        element.style.display="flex";
    };

    const hide =(element)=>{
        element.style.display="none";
    }

    const clear = (element)=>{
        element.value = "";
    }

    return{
        show,hide,clear,
        blur_screen,
        // Content header
        content_header_editable,
        // New event
        menu_addEvents ,
        new_eventForm,
        new_eventForm_cancel,
        new_eventForm_input,
        new_eventForm_submit ,
        new_event_error,

        // Add tasks
         btn_add_todo ,
        add_todo_form ,
        add_todo_form_cancel ,
        add_todo_title ,
        add_todo_desc ,
        add_todo_dateTime ,
        add_todo_Priority ,
        add_todo_submit,
        // details_todo
         todo_details,
        todo_details_name ,
        todo_details_desc ,
        todo_details_duedate,
        todo_details_X ,
        // edit task
         edit_task_window,
        edit_task_name ,
        edit_task_desc ,
        edit_task_datetime ,
        edit_task_priority,

    }
})()

export {new_project}