const new_project = (()=>{

    // blur screen
    const blur_screen = document.querySelector(".display_blur");

    // Content header
    const content_header_editable  = document.getElementById("main__content_header_editable")
    // New event
    const menu_addEvents = document.getElementById("menu__add_events");
    const new_eventForm = document.getElementById("new_event_form");
    const new_eventForm_cancel = document.getElementById("new_event_form_x");
    const new_eventForm_submit = document.getElementById("new_event_form_submit");
    // Add tasks
    const btn_add_todo = document.getElementById("main__add_todos");
    const add_todo_form = document.getElementById("menu__form_todoadd");
    const add_todo_form_cancel = document.getElementById("menu__form_todoadd_X");
    const add_todo_title = document.getElementById("form_todo_title");
    const add_todo_desc  =  document.getElementById("form_todo_desc");
    const add_todo_dateTime = document.getElementById("form_todo_datetime");
    const add_todo_Priority = document.getElementById("form_todo_submit);
    // details_todo
    const todo_details=document.getElementById("display_todo_details")
    const todo_details_name = document.getElementById("todo_details_name_editable");
    const todo_details_desc = document.getElementById("todo_details_desc_editable");
    const todo_details_duedate = document.getElementById("todo_details_duedate_editable");
    const todo_details_X = document.getElementById("todo_details_X");


})()