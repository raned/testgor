function CulinaryTalents(){
    this.store_id = "";
    this.store_name = "";
    this.store_desc = "";
    this.store_address = "";
    this.sms_no = "(876) 807-5349";
    this.phone_no = "(876) 807-5349";
    this.email = "info@popupgourmetjamaica.com";
    this.website = "www.popupgourmetjamaica.com\/chicken-roulade-with-a-jamaican-twist.html";
    this.category_id = 0;
    this.created_at = 0;
    this.updated_at = 0;
    this.featured = 0;
    this.is_deleted = 0;
    this.category = "";
    this.cat_type = 1;
    this.ratings = 0;

    this.$holder = $("#culinarytalents .culinarytalents-feeds");

    this.render_summary = function(){
        var $culinarytalents = $("<article class='recipe card'></article>");

        // Sections of the article.
        var $holder = $("<div class='row'></div>");
        var $section1 = $('<section class="col-33 no-padding recipe-cover-photo"></section>');
        var $section2 = $('<section class="col-50 recipe-info"></section>');
        var $section3 = $('<section class="col-10 recipe-chef-clip"></section>');


        var $h4 = $("<h4 class='head'></h4>");
        $h4.html(this.store_name);

        var $description = $("<p class='recipe-description'></p>");
        $description.html(this.store_address);

        var star_ratings = parseFloat(this.ratings);
        star_ratings = ((Math.ceil(star_ratings) - 0.5) == star_ratings)? Math.floor(star_ratings) + 0.5 : Math.round(star_ratings);
        var $ratings = $('<span class="stars s-'+star_ratings+' recipe-ratings" data-default="'+this.ratings+'"> </span>');
        var $reviews = $("<span><span class='recipe-no-reviews'>123</span> reviews</span>")

        var $rev_section = $('<section class="recipe-rating-review"></section>');
        $rev_section.append($ratings, $reviews);

        var $img = $("<img src='"+this.thumb_url+"' class='recipe-image' />");

        var $distance = $('<div class="travel-distance"></div>');
        $distance.text("123 miles");

        var $chef_img = $('<img class="recipe-chef-img" src="static/img/chef.jpg" />');

        $section1.append($img);
        $section2.append($h4, $description, $rev_section);
        $section3.append($chef_img);

        $culinarytalents.addClass(this.class_name);
        $culinarytalents.attr("id", this.store_id);

        $holder.append($section1, $section2, $section3);
        $culinarytalents.append($holder);
        this.$holder.append($culinarytalents);
    }
}


CulinaryTalents.fetch_data = function(){
    var url = "http://"+server+"/popup/rest/culinarytalents.php";
    $.getJSON(url)
    .done(function(data){
        $.each(data, function(i, item){
            recipe = new CulinaryTalents();
            recipe = $.extend(recipe, item);
            recipe.render_summary();
        });
    });
}
