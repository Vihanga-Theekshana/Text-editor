function edit(value){
    document.execCommand(value,false,null);//edit text
  }
function triggercolor(){
  document.getElementById("colorselect").click();
}
function changefontcolor(){
  let color = document.getElementById("colorselect").value;//Assume to select color 
  document.execCommand("foreColor",false,color);
  document.getElementById("underline").style.backgroundColor=color; //Add color to underline div
}

