/*
var user = User.get_current_user();
if(user === undefined){
  window.location.assign("index.html");
}
*/

$(document).on("click", "#opt-search", function(e){
  $("#gen-search").slideToggle("slow");
});
