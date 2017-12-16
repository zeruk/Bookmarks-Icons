
$(function() {
    var bookmTr = browser.bookmarks.getTree(function(tree){
        var bookm = tree[0].children[1].children;
        console.log(bookm[0]);
        for(var i = 0; i<bookm.length; i++){
            var item = bookm[i];
            //console.log(item);
            s = '<a to="';
            s+=item.url;
            s+='"><img src="http://www.google.com/s2/favicons?domain=';
            var slidx=item.url.indexOf("//")
            s+=item.url.slice(slidx+2,item.url.length);
            console.log(s);
            s+='"><div class="description">';
            s+=item.title.length> 15 ? item.title.slice(0,15)+'...': item.title;
            s+='</div></a>';
            $(".wrapper").append(s);
        }
    })

    
});


$("a").on( "click", function() {
    console.log("hello");
    var creating = browser.tabs.create(
        { url: $(this).attr("to")
    });
    //console.log($(this).attr("to"))
});
   