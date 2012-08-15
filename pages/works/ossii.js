$(document).ready(function(){
    $('body').load(function(){
        clean() ;  
        var file_loc = "pages/homepages.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
    });
    
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
    
    var file_loc = "pages/homepages.html"
    getHtml(file_loc);
    $('.big_home').append(output.toString())
    //~ $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a class= 'company_info' data-toggle='tab'>首頁</a></li></ul>")
    
    function clean(){
        $('.big_home').empty();
         $('.span1').empty();
         $('.span6').empty();
         $('.span2').empty();
    }
    
    $('.carousel').carousel({
        interval: 5000
    });
    
    $('.homepage').bind("click",function(){
        clean() ;  
        var file_loc = "pages/homepages.html"
        getHtml(file_loc);
        $('.big_home').append(output.toString())
             //~ $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a class= 'company_info' data-toggle='tab'>首頁</a></li></ul>")
    });
    
    $('.about_ossii').bind("click",function(){
       clean() ; 
       var file_loc = "pages/aboutossii.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a class= 'company_info' data-toggle='tab'>公司簡介</a></li><li><a class= 'company_log' data-toggle='tab'>大事紀</a></li><li ><a class = 'company_loc' data-toggle='tab'>公司地圖</a></li></ul>")
        
        $('.company_info').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/aboutossii.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
        
        $('.company_log').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/record.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
            
        $('.company_loc').bind("click",function(){
            $('.span6').empty();
            var file_loc = "pages/test.html"
            getHtml(file_loc);
            $('.span6').append(output.toString())
        })
    });
    
    $('.news').bind("click",function(){
        clean() ;  
        var file_loc = "pages/news.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a data-toggle='tab'>最新消息</a></li></ul>")
    });
    
    $('.publish_book').bind("click",function(){
        clean() ;  
        var file_loc = "pages/publish_book.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a data-toggle='tab'>出版物</a></li></ul>")
    });
    
    $('.content_us').bind("click",function(){
        clean() ;  
        var file_loc = "pages/content_us.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a data-toggle='tab'>聯絡我們</a></li></ul>")
    });
    
    $('.human_resources').bind("click",function(){
        clean() ;  
        var file_loc = "pages/work_new.html"
        getHtml(file_loc);
        $('.span6').append(output.toString())
        $('.span3').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a class= 'company_info' data-toggle='tab'>產品服務專員</a></li><li><a class= 'company_log' data-toggle='tab'>Linux網路系統工程師</a></li><li ><a class = 'company_loc' data-toggle='tab'>網路程式設計師</a></li><li ><a class = 'company_loc' data-toggle='tab'>應用程式設計師</a></li><li ><a class = 'company_loc' data-toggle='tab'>Linux系統工程師</a></li></ul>")
        var file_loc = "pages/welfare.html"
        getHtml(file_loc);
        $('.span3').append(output.toString())
    });
    
    $('.links').bind("click",function(){
        clean() ;  
        var file_loc = "pages/links_new.html"
        getHtml(file_loc);        
        $('.span6').append(output.toString())
        $('.span1').append("<ul class='nav nav-pills nav-stacked'><li class='active'><a data-toggle='tab'>友站連結</a></li></ul>")
    });
    
});

