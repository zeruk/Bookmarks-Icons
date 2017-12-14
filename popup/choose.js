$("a").bind( "click", function() {
    var creating = browser.tabs.create(
        { url: $(this).attr("to")
    });
    //console.log($(this).attr("to"))
});

$(function() {
    var bookm = browser.bookmarks.getChildren(5);
    
    bookm.foreach(function(item){
        s = '<a to="';
        s+=;
        s+='"><img src="';
        s+=;
        s+='"><div class="description">';
        s+=;
        s+='</div></a>';
        $(".wrapper").append(s);
    })
    
});

   