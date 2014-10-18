
function Restaurant(){
    this.store_name = "";
    this.store_address = "";
    this.store_id = "";
    this.viewUrl = "";
    this.photoUrl = "";
    this.reviewUrl = "";
    this.deleteUrl = "";
    this.updateUrl = "";
    this.rating = "";
    this.no_of_photos = 0;
    this.featured = "1";
    this.$holder = $("#restaurants .restaurants-feeds");

    this.render = function(){
        var $article = $("<article class='restaurant row'></article>");

        // Sections of the article.
        var $section1 = $('<section class="col-xs-4 no-padding restaurant-cover-photo"></section>');
        var $section2 = $('<section class="col-xs-5 restaurant-info"></section>');
        var $section3 = $('<section class="col-xs-3 restaurant-popup"></section>');


        var $h4 = $("<h4 class='head'></h4>");
        $h4.html(this.store_name);

        var $address = $("<address></address>");
        $address.html(this.store_address);

        var $rev_section = $('<section class="reviews"></section>');
        $rev_section.html("123 reviews");

        var $img = $("<img src='"+this.photoUrl+"' class='background' />");

        var $distance = $('<div class="travel-distance"></div>');
        $distance.text("123 miles");

        var $popup_btn = $('<div class="popup">PopUp</div>');

        $section1.append($img);
        $section2.append($h4, $address, $rev_section);
        $section3.append($distance, $popup_btn);

        $article.addClass(this.class_name);
        $article.attr("id", this.store_id);

        $article.append($section1, $section2, $section3);
        this.$holder.append($article);
    }



}


Restaurant.fetch_data = function(){
    //var url = "http://104.131.48.187/popup/get_stores.php";
    var url = "/restaurants.json";
    $.getJSON(url)
    .done(function(data){
        $.each(data, function(i, item){
            restaurant = new Restaurant();
            restaurant = $.extend(restaurant, item);
            restaurant.render();
        });
    });
}

$(document).ready(function() {
    setTimeout(function(){
        Restaurant.fetch_data();
    }, 5000);
});

