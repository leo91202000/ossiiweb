var block = function(){return false; }

document.ondragstart = block;
 
$(document).ready(function(){ 
    
    function noDragstart(){
        return false; 
    }
    noDragstart();
    function getHtml(file_loc){
         var  Options= {
            type : "GET",
            url : file_loc,
            dataType : "text",
            async: false, //設定為同步  改true可以變非同步
            success: function( MyData )  {
                output  = MyData;
            },
            error:function(){
                console.log("File Load Error");
            }
        }
        $.ajax(Options);     
    }
    
    function clean(){
         $('.row').empty();
    }
    
    var file_loc = "pages/homepages.html"
    getHtml(file_loc);
    $('.row').append("<div class='span12'></div>")
    $('.span12').append(output.toString())

    $('.carousel').carousel({
        interval: 5000
    });
    
    $('.homepage').bind("click",function(){
        clean()
        $('.row').append("<div class='span12'></div>")
        var file_loc = "pages/homepages.html"
        getHtml(file_loc);
        $('.span12').append(output.toString())
    });
    
    $('.about_ossii').bind("click",function(){
        clean() ; 
        $('.row').append("<div class='span2'></div><div class='span6'></div><div class='span3'></div>")
        var file_loc = "pages/aboutossii.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        $('.span2').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a class= 'company_info' data-toggle='tab'>公司簡介</a></li><li><a class= 'company_log' data-toggle='tab'>大事紀</a></li></ul>")
        var file_loc = "pages/officeimg.html"
        getHtml(file_loc);
        $('.span3').append(output.toString())
        
        $('.company_info').bind("click",function(){
            $('.span3').empty();
            $('.span6').empty();
            var file_loc = "pages/aboutossii.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
            
            var file_loc = "pages/officeimg.html"
            getHtml(file_loc);
            $('.span3').append(output.toString())
        })
        
        $('.company_log').bind("click",function(){
            $('.span3').empty();
            $('.span6').empty();
            var file_loc = "pages/record.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
    });
    
    $('.news').bind("click",function(){
        clean() ;  
        var file_loc = "pages/news.html"
        getHtml(file_loc);
        $('.row').append("<div class='span12'></div>")
        $('.span12').append(output.toString())
    });
    
    $('.content_us').bind("click",function(){
        clean() ;  
        var file_loc = "pages/content_us.html"
        getHtml(file_loc);
        $('.row').append("<div class='span12'></div>")
        $('.span12').append(output.toString())
    });
    
    $('.human_resources').bind("click",function(){
        clean() ;  
        $('.row').append("<div class='span2'></div><div class='span6'></div><div class='span3'></div>")
        $('.span2').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a class= 'work' data-toggle='tab'>產品服務專員</a></li><li><a class= 'work2' data-toggle='tab'>Linux網路系統工程師</a></li><li ><a class = 'work3' data-toggle='tab'>網路程式設計師</a></li><li ><a class = 'work4' data-toggle='tab'>應用程式設計師</a></li><li ><a class = 'work5' data-toggle='tab'>Linux系統工程師</a></li></ul>")
        var file_loc = "pages/works/work.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        
        var file_loc = "pages/works/welfare.html"
        getHtml(file_loc);
        $('.span3').append(output.toString())
        
        $('.work').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/works/work.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
        
        $('.work2').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/works/work2.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
        
        $('.work3').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/works/work3.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
        
        $('.work4').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/works/work4.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
        
        $('.work5').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/works/work5.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
    });
});

