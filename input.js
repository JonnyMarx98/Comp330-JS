// Keys
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var keySpace = false;
var keyUp = false;
var keyDown = false;
var keyLeft = false;
var keyRight = false;

// Mouse
var mouseY;
var mouseX;
var mouseIsDown = false;

window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

window.addEventListener('touchstart', function(e) {
    // Cache the client X/Y coordinates
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
}, false);

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}

function keyDownHandler(e) {
    if(e.keyCode === KEYCODE_d) keyD = true;
    if(e.keyCode === KEYCODE_s) keyS = true;
    if(e.keyCode === KEYCODE_a) keyA = true;
    if(e.keyCode === KEYCODE_w) keyW = true;
    if(e.keyCode === KEYCODE_space_bar) keySpace = true;
    if(e.keyCode === KEYCODE_left_arrow) keyLeft = true;
    if(e.keyCode === KEYCODE_up_arrow) keyUp = true;
    if(e.keyCode === KEYCODE_right_arrow) keyRight = true;
    if(e.keyCode === KEYCODE_down_arrow) keyDown = true;

}
function keyUpHandler(e) {
    if(e.keyCode === KEYCODE_d) keyD = false;
    if(e.keyCode === KEYCODE_s) keyS = false;
    if(e.keyCode === KEYCODE_a) keyA = false;
    if(e.keyCode === KEYCODE_w) keyW = false;
    if(e.keyCode === KEYCODE_space_bar) keySpace = false;
    if(e.keyCode === KEYCODE_left_arrow) keyLeft = false;
    if(e.keyCode === KEYCODE_up_arrow) keyUp = false;
    if(e.keyCode === KEYCODE_right_arrow) keyRight = false;
    if(e.keyCode === KEYCODE_down_arrow) keyDown = false;
}

function clickHandler(){
    canvas.onmousedown = function() {mouseDown()}
    canvas.onmouseup = function() {mouseUp()}
    canvas.ontouchstart = function() {mouseDown()}
    canvas.ontouchcancel = function() {mouseUp()}
}