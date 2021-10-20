menu_list_array = ["Plant your own tree"];

function getmenu(){
var htmldata="";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+ menu_list_array[i] + '<br>'
}
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
var htmldata;
var imgtags='<img id="im1" src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/31136.png"/>'
var item=document.getElementById("add_item").value;
menu_list_array.sort();
menu_list_array.push(item)
htmldata=""
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
}
document.getElementById("display_addedmenu").innerHTML = htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}