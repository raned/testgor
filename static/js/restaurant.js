function Restaurant(){
    this.store_name = "";
    this.store_address = "";
    this.store_id = "";
    this.view_url = "";
    this.thumb_url = "";
    this.photo_url = "";
    this.review_url = "";
    this.delete_url = "";
    this.update_url = "";
    this.ratings = "";
    this.no_of_photos = 0;
    this.featured = "1";
    this.$holder = $("#restaurants .restaurants-feeds");

    this.render = function(){
        var $article = $("<article class='restaurant card'></article>");

        // Sections of the article.
        var $holder = $("<div class='row'></div>");
        var $section1 = $('<section class="col-25 no-padding restaurant-cover-photo"></section>');
        var $section2 = $('<section class="col-50 restaurant-info"></section>');
        var $section3 = $('<section class="col-25 restaurant-popup"></section>');


        var $h4 = $("<h4 class='head'></h4>");
        $h4.html(this.store_name);

        var $address = $("<address></address>");
        $address.html(this.store_address);

        var star_ratings = parseFloat(this.ratings);
        star_ratings = ((Math.ceil(star_ratings) - 0.5) == star_ratings)? Math.floor(star_ratings) + 0.5 : Math.round(star_ratings);
        var $ratings = $('<span class="stars s-'+star_ratings+' restaurant-ratings" data-default="'+this.ratings+'"> </span>');
        var $reviews = $("<span><span class='restaurant-no-reviews'>123</span> reviews</span>")

        var $rev_section = $('<section class="restaurant-rating-review"></section>');
        $rev_section.append($ratings, $reviews);

        var $img = $("<img src='"+this.thumb_url+"' class='background' />");

        var $distance = $('<div class="travel-distance"></div>');
        $distance.text("123 miles");

        var $popup_btn = $('<div class="popup">PopUp</div>');

        $section1.append($img);
        $section2.append($h4, $address, $rev_section);
        $section3.append($distance, $popup_btn);

        $article.addClass(this.class_name);
        $article.attr("id", this.store_id);

        $holder.append($section1, $section2, $section3);
        $article.append($holder);
        this.$holder.append($article);
    }
}


Restaurant.fetch_data = function(){
    var url = "http://"+server+"/popup/get_stores.php";
    $.getJSON(url)
    .done(function(data){
        $.each(data, function(i, item){
            restaurant = new Restaurant();
            restaurant = $.extend(restaurant, item);
            restaurant.render();
        });
    });
}
