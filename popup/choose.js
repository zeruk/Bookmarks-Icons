$("a").bind( "click", function() {
    var creating = browser.tabs.create(
        { url: $(this).attr("to")
    });
    //console.log($(this).attr("to"))
   });
   