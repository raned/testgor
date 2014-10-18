var $menu = $("#menu-slider");

Article.fetch_data();
setTimeout(function(){
    Restaurant.fetch_data();
    Recipe.fetch_data();
    CulinaryTalents.fetch_data();
    CulinaryTours.fetch_data();
}, 2000);

$(document).on("click", "#menu-slider a", function(){
    $("#menu-slider a").removeClass("active");
    $this = $(this);
    $this.addClass("active");
});

$(document).on("swipeleft", "#pages [data-role=page]", function($e){
    var hashed = "#"+($(this).next().attr("id"));
    $current_menu = $menu.find("a[href="+hashed+"]");
    if($current_menu.length != 0){
        $menu.find("a").removeClass("active");
        $current_menu.addClass("active");
        $current_menu.click();
    }
});
$(document).on("swiperight", "#pages [data-role=page]", function($e){
    var hashed = "#"+($(this).prev().attr("id"));
    $current_menu = $menu.find("a[href="+hashed+"]");
    if($current_menu.length != 0){
        $menu.find("a").removeClass("active");
        $current_menu.addClass("active");
        $current_menu.click();
    }
});

$(document).ready(function() {
    if(location.hash != ""){
        $menu.find("a").removeClass("active");
        $menu.find("a[href="+location.hash+"]").addClass("active");
    }
});
