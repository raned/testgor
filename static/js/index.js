$("#container").height($window_height);
var $div_login = $("#login");
var $div_signup = $("#signup");

// Login user in if user exists in localStorage.
User.auto_login();


$div_login.css("margin-top", $window_height/2 - $div_login.height()/2);
$div_signup.css("margin-top", $window_height/2 - $div_signup.height()/2);

$(document).ready(function(){

});

$("#btn-registration").click(function(){
  $div_login.hide();
  $div_signup.show();
});
$("#btn-login").click(function(){
  $div_login.show();
  $div_signup.hide();
});


$(document).on("submit", "#user_registration", function(e){
  User.register($(this).serialize());
  return false;
});

$(document).on("submit", "#user_login", function(e){
  User.login($(this).serialize());
  return false;
});
