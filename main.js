var mouseEvent = "empty";


    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("lw").value;
        mouseEvent = "mouseDown";
    }
    var Last_positionx ,Last_positiony;
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    { console.log(e);
        current_position_of_mouse_x = e.clientX-canvas.offsetLeft ; 
        current_position_of_mouse_y = e.clientY-canvas.offsetTop ;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(Last_positionx,Last_positiony);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
        }
        Last_positionx=current_position_of_mouse_x;
        Last_positiony=current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


//Additional Activity
function ca() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
var Last_position_touchx;
var Last_position_touchy;
var width=screen.width;
var Nw=screen.width-70;
var Nh=screen.height-300;
if(width<992)
{
    document.getElementById("can").height=Nh;
    document.getElementById("can").width=Nw;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("lw").value;
        Last_position_touchx= e.clientX-canvas.offsetLeft ; 
        Last_position_touchy = e.clientY-canvas.offsetTop ;
    }
    canvas.addEventListener("touchmove",my_touchmove);
    function my_touchmove(e)
    {
        current_position_touchx= e.clientX-canvas.offsetLeft ; 
        current_position_touchy = e.clientY-canvas.offsetTop ;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(Last_position_touchx,Last_position_touchy);
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
        ctx.stroke();
        Last_position_touchx=current_position_of_touch_x;
        Last_position_touchy=current_position_of_touch_y;
    }