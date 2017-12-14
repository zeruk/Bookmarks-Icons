$("a").bind( "click", function() {
    var creating = browser.tabs.create(
        { url: $(this).attr("to")
    });
    //console.log($(this).attr("to"))
});

$(function() {
    var bookm = [];
    var bookmTr = browser.bookmarks.getTree(function(tree){
        bookm = tree[0].children[1].children;
    })
    console.log(bookm);
    for(var i = 0; i<bookm.length; i++){
        item = bookm[i];
        console.log(item);
        s = '<a to="';
        s+=item.url;
        s+='"><img src="';
        s+="https://otvet.imgsmail.ru/download/u_d517c822f47a21c3bac79ab27552a9fb_800.jpg";
        s+='"><div class="description">';
        s+=item.title;
        s+='</div></a>';
        $(".wrapper").append(s);
    }
    
});

   