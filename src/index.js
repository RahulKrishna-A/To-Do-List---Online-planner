import "./Index.css"
import {staticlisteners} from "./Comp/addeventlisteners";
import {eventrender} from "./Comp/render";


let projectList =[]


if(localStorage.getItem('user') == null){

}else{
    projectList = JSON.parse(window.localStorage.getItem('user'));
    eventrender();

}
export {projectList}
