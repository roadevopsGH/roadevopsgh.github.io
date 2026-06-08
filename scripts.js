/*This function shows the popup menu from the menu logo in
the toolbar.  When a mouse hovers over the icon, it displays
the menu.  When a mouse clicks on the icon again, it closes
the menu.  When you are hovering over the div containing the
menu, it will stay visible. when you click on one of the elements
it will dissappear again.*/
function openHomeMenu(){
    var x = document.getElementById("toolbar-dropdown");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
  }
}
