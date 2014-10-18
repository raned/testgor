function Article(){
    this.news_id = 1;
    this.news_content = "";
    this.news_title = "";
    this.$holder = $("#home .news-feeds");
    this.class_name = "";
    this.photo_url = "";
    this.news_url = "";
    this.created_at = "";
    this.updated_at = "";
    this.url_fetches;

    this.set_post_time = function(){
        this.post_time = new Date(parseInt(this.updated_at));
    }

    this.render = function(){
        var $article = $("<article class='news-item card'></article>");

        // Sections of the article.
        $holder = $("<div class='row'></div>");
        var $section1 = $('<section class="col-33 no-padding"></section>');
        var $section2 = $('<section class="col-67 news-item-data"></section>');
        this.set_post_time();
        var $time = $("<section class='post_time'></section>");
        $time.html(this.post_time.toDateString());
        var $h4 = $("<h4 class='head'></h4>");
        if(this.news_title.length > 80)
            $h4.html(this.news_title.substr(0, 80)+" ...");
        else
            $h4.html(this.news_title);
        var $img = $("<img src='"+this.photo_url+"' class='background' />");

        $article.addClass(this.class_name);
        $article.attr("id", this.news_id);

        $section1.append($img);
        $section2.append($h4, $time);
        $holder.append($section1, $section2);
        $article.append($holder);
        this.$holder.append($article);
    }
}

Article.fetch_data = function(){
    var url = "http://"+server+"/popup/rest/data_news.php";
    $.getJSON(url)
    .done(function(data){
        $.each(data.news, function(i, news_item){
            article = new Article();
            article = $.extend(article, news_item);
            article.class_name = "foodie-news";
            article.render();
        });
    });
}
