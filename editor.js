function edit(value){
    document.execCommand(value,false,null);
  }
function triggercolor(){
  document.getElementById("fontcolor").click();
}
function changefontcolor(){
  let color = document.getElementById("fontcolor").value;
  document.execCommand("foreColor",false,color);
  document.getElementById("underline").style.backgroundColor=color;
}

