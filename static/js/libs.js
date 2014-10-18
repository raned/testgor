var $window_height = $(window).height();
var $window_width = $(window).width();
var server = "104.131.48.187";
//var server = "localhost";
var current_user = undefined;

function encrypt(data){
    var key = 100;
    var result = "";
    for(i=0; i<data.length;i++)
    {
        result += String.fromCharCode(key^data.charCodeAt(i));
    }
    return result;
}

function decrypt(data)
{
    var key = 100; //Any integer value
    var result="";
    for(i=0; i < data.length; i++)
    {
        result += String.fromCharCode(key^data.charCodeAt(i));
    }
    return result;
}


function User(){
  this.email ="";
  this.user_id = "";
  this.facebook_id = "";
  this.twitter_id = "";
  this.full_name = "";
  this.username = "";
  this.login_hash = "";
  this.photo_url = "";
  this.thumb_url = "";
  this.twitter_id = "";

  this.save = function(){
    localStorage.setItem("current_user", JSON.stringify(this));
  }
}

User.save_login = function(user_data){
    localStorage.setItem("current_user_logs", encrypt(JSON.stringify(user_data)));
}

User.auto_login = function(){
    var user_data = localStorage.getItem("current_user_logs");
    if(user_data != undefined){
        user_data = JSON.parse(decrypt(user_data));
        User.login(user_data);
    }
}

User.initiate = function(json_data){
  var user = new User();
  user = $.extend(user, json_data);
  return user;
}

User.get_current_user = function(){
  var current_user = localStorage.getItem("current_user");
  if(current_user == undefined)
    return undefined
  var user = new User();
  user = $.extend(user, current_user);
  return user;
}

User.current_user_exists = function(){
  var current_user = localStorage.getItem("current_user");
  return (current_user != undefined)? true: false;
}

User.register = function(user_data){
  var url = "http://"+server+"/popup/rest/register.php";
  $.post(url, user_data, function(data){
      localStorage.setItem("current_user", JSON.stringify(data));
      User.save_login(user_data);
      window.location.assign("home.html");
  }, 'json')
  .fail(function(){
    announcement("Registration was a failure", "danger");
  });
}

User.login = function(user_data){
  var url = "http://"+server+"/popup/rest/login.php";
  $.post(url, user_data, function(data){
    localStorage.setItem("current_user", JSON.stringify(data.user_info));
    User.save_login(user_data);
    window.location.assign("home.html");
  }, 'json')
  .fail(function(){
    announcement("Registration was a failure", "danger");
  });
}
