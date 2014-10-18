
function Recipe(){
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
    this.$holder = $("#recipes .recipes-feeds");

    this.render = function(){
        var $article = $("<article class='recipe row'></article>");

        // Sections of the article.
        var $section1 = $('<section class="col-xs-4 no-padding recipe-cover-photo"></section>');
        var $section2 = $('<section class="col-xs-5 recipe-info"></section>');
        var $section3 = $('<section class="col-xs-3 recipe-popup"></section>');


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


recipe.fetch_data = function(){
    //var url = "http://104.131.48.187/popup/get_stores.php";
    var url = "/recipes.json";
    $.getJSON(url)
    .done(function(data){
        $.each(data, function(i, item){
            recipe = new Recipe();
            recipe = $.extend(recipe, item);
            recipe.render();
        });
    });
}


$(document).ready(function() {
    setTimeout(function(){
        Recipe.fetch_data();
    }, 5000);
});
