var ans="";
var cal="";
$("button").click(function(){
    var text=$(this).attr("value");
    if(!Number.isNaN(parseInt(text)) || text=="%" || text=="/" || text=="*"||
text=="-" || text=="+"||text==".") {
        cal+=text;
        $(".display").val(cal);
        
    }
    if(text=="AC"){
        cal="";
        $(".display").val(cal);
    }
    if(text=="CE"){
        cal=cal.slice(0,-1);
        $(".display").val(cal);

    }
    if(text=="="){
        try {
            ans=eval(cal);
        } catch (e) {
            ans = "Error!"
        }
        $(".display").val(ans);
    }
});
