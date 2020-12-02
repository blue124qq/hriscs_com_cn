// JavaScript Document
$(function() {
    $(".nav li").click(function() {
        if ($(window).width() > 999) {
            if ($(this).hasClass("ecatalog")) {

            } else if ($(this).hasClass("li-search")) {
                $()
                $(".search-open", this).stop(true,false).slideToggle(300);
                $(this).toggleClass("open");
                $("li.li-search.open > i.search").click(function() {
                    $(".search-open", this).fadeOut(300);
                    $(this).removeClass("open");
                })

            } else {
                window.location = $(this).find("a").attr("href");
                return false;
            }
        }
    })

    $(".main-pro-item").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    })

    // $(".main-pro-item").hover(function() {
    //     $("img", this).css({
    //         "opacity": "0.8",
    //         "filer": "alpha(opacity=80)"
    //     });
    //     $("h2", this).css({
    //         "color": "#3398cc"
    //     });
    //     $("p", this).css({
    //         "color": "#999"
    //     });
    //     $(".btn-primary", this).css({
    //         "background": "#99cccc",
    //         "border-color": "#99cccc"
    //     });
    // }, function() {
    //     $("img", this).css({
    //         "opacity": "1",
    //         "filer": "alpha(opacity=100)"
    //     });
    //     $("h2", this).css({
    //         "color": "#093e59"
    //     });
    //     $("p", this).css({
    //         "color": "#555"
    //     });
    //     $(".btn-primary", this).css({
    //         "background": "#3398cc"
    //     });
    // })

    $(".pro-class-item").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    })

    /* footer */
    // $(".footer-logo").hover(function() {
    //     $(" > h2 > a", this).css({
    //         "color": "#3398cc"
    //     });
    // }, function() {
    //     $(" > h2 > a", this).css({
    //         "color": "#fff"
    //     });
    // })


    // product - tab
    $(function() {
        var _showTab = 0;
        var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();
        $('ul.tabs li').click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        }).find('a').focus(function() {
            this.blur();
        });
    });

    // mobile
    if (navigator.userAgent.match(/Android|iPhone|iPad/i)) {

        // product specification
        if ($(window).width() < 750) {
            $(".pro-spec-text").css({
                "overflow-x": "auto"
            });
            $(".table-spec").css("min-width", "480px");
            $(".table-scroll").show();
        } else {

            $(".pro-spec-text").css({
                "overflow": "hidden"
            });
            $(".table-spec").css("width", "100%");
            $(".table-scroll").hide();
        }
    } else {
        $(".table-scroll").hide();
    }
    // End mobile

    // mobile tap/taphold/swipe
    $(".pro-spec-text").on("tap", function(e) {
        $(".table-scroll").hide();
    })
    $(".pro-spec-text").on("taphold", function(e) {
        $(".table-scroll").hide();
    })
    $(".pro-spec-text").on("swipe", function(e) {
        $(".table-scroll").hide();
    });
    inq_table_psec(".inq_table_psec thead tr",1,0,'');
    inq_table_psec(".inq_table_psec1 thead tr",0,1,'');
    inq_table_psec(".inq_table_psec2 thead tr",1,2,'');
    inq_table_psec(".inq_table_psec3 tr.title-tb",0,1,'');
    inq_table_psec(".inq_table_psec4 thead tr",0,2,$('.product_title').text().trim()+'_');
    //add nav inquiry
    $(".header .nav > li:last-child").before('<li><a class="inquiry_icon" href="contact.html">Inquiry</a></li>');
    window.inquiry_obj = new cla_inquiry('.inquiry_icon',"film_inquiry",".inq_btn",1000*60*60*24);
});
function cla_inquiry(top_inq,ls,inq_btn,life_time){
    "use strict";
    let _this = this;
    _this.top_inq = $(top_inq);//顯示數量icon
    _this.ls = ls; //localstorage item名稱
    _this.inq_btn = $(inq_btn);//加入按鈕
    _this.life_time = life_time;//存活時間
    _this.inq_btn_arr = new Array();
    localStorage[_this.ls]?_this.top_inq.attr('data-quan',1):_this.top_inq.attr('data-quan',0);
    if(localStorage[_this.ls]){
        _this.inquiry = JSON.parse(localStorage[_this.ls]);
        if(_this.inquiry.life_time < Date.now()){
            localStorage.removeItem(_this.ls);
            _this.inquiry = {};
        }else{
            _this.top_inq.attr('data-quan',_this.inquiry.item_list.length);            
        }
    }else{
        _this.top_inq.attr('data-quan',0);
    }
    if(_this.inq_btn.length){
        _this.inq_btn.each(function(idx,item){
            var is_set = false;
            if(item.tagName === "A"){
                var event = 'click';
            }else if(item.tagName==="INPUT"){
                var event = "change";
            }
            _this.inquiry&&_this.inquiry.item_list.forEach(function(elem){($(item).attr("data-name")===elem.name)&&(is_set=true);});
            _this.inq_btn_arr.push(new cla_inq_btn_item(this,is_set,event));
        });
    }
    _this.inq_btn_arr.forEach(function(item,idx){
        item.o.on(item.event,function(e){
            e.preventDefault();
            item.is_set?_this.delete_inq(item):_this.add_inq(item);
        });
    });
}
cla_inquiry.prototype.add_inq = function(o){
    //新增項目
    this.inquiry = (localStorage[this.ls])?JSON.parse(localStorage[this.ls]):{life_time: 0,item_list:new Array()};
    this.inquiry.item_list.push({
        series: o.series,
        name: o.name,
        src: o.src
    });
    this.inquiry.life_time=(Date.now()+this.life_time);
    localStorage[this.ls] = JSON.stringify(this.inquiry);
    this.top_inq.attr('data-quan',this.inquiry.item_list.length);
    o.btn_type(true,true);
}
cla_inquiry.prototype.delete_inq = function(o,is_inq_page,inq_wrap){
    "use strict";
    //刪除項目
    let _this = this;
    _this.inquiry = (localStorage[_this.ls])?JSON.parse(localStorage[_this.ls]):new Object();
    _this.inquiry.item_list.forEach(function(item,i){
        item.name===o.name && _this.inquiry.item_list.splice(i, 1);
    });
    (_this.inquiry.item_list.length<1)?localStorage.removeItem(_this.ls):localStorage.setItem(_this.ls, JSON.stringify(_this.inquiry));
    _this.top_inq.attr('data-quan',_this.inquiry.item_list.length);
    if(is_inq_page){
        //INQUIRY頁面
        _this.inq_model="";
        _this.show_list_arr.length = 0;
        $(inq_wrap).html("");
        _this.draw(inq_wrap);
        o.delete_item(_this.form_div,_this.inq_model);
    }else{
        o.btn_type(false,true);
    }
}
cla_inquiry.prototype.show_list = function(o){
    //產生inquiry頁面清單
    "use strict";
    let _this = this;
    _this.inq_model = "";
    _this.show_list_arr = new Array();
    if(_this.inquiry){
        _this.draw(o);
    }
    //加入詢問函
    _this.form_div = $("#i_sj_form_id");
    let int = setInterval(function(){
        if($("form",_this.form_div).length>0){
            clearInterval(int);
            setTimeout(function(){
                $('.SJ_textarea',$('.SJ_feild',_this.form_div).eq(0)).val( _this.inq_model);
            },1000);
        }
    },16);
    $("#i_sj_form_id").on('submit','form',function(e){
        localStorage.removeItem(_this.ls);
    });
}
cla_inquiry.prototype.draw = function(o){
    "use strict";
    let _this = this;
    for(let i in _this.inquiry.item_list){
        let div_item = $('<div class="item"></div>');
        let div_img = $('<div class="img"><img src="'+_this.inquiry.item_list[i].src+'" alt="" /></div>');
        let div_txt = $('<div class="txt"><div class="name">'+_this.inquiry.item_list[i].name+'</div><div class="series">'+_this.inquiry.item_list[i].series+'</div></div>');
        let btn = $('<a href="javascript:void(0)" title="" class="btn">CANCEL</a>');
        div_txt.append(btn);
        div_item.append(div_img).append(div_txt);
        $(o).append(div_item);
        _this.show_list_arr.push(new cla_inq_list_item(btn,_this.inquiry.item_list[i].name,_this.inquiry.item_list[i].series,div_item));
        _this.inq_model += _this.inquiry.item_list[i].name+(i<(_this.inquiry.item_list.length-1)?"\n":"");
        _this.show_list_arr[i].o.one('click',function(){
            _this.delete_inq(_this.show_list_arr[i],true,o);
        });
    }
}
function cla_inq_btn_item(o,is_set,event){
    //頁面裡的inquiry按鈕
    this.o = $(o);
    this.series = $('.breadcrumb > li').eq(-1).text().trim();
    this.name = this.o.attr("data-name");
    this.src = $("img",$(".pro-img")).attr("src");
    this.event = event;
    this.btn_type(is_set);
}
cla_inq_btn_item.prototype.btn_type = function(x,is_event){
    if(this.event=="change"){
        this.o.prop("checked",x);
    }else{
        if(this.o.hasClass('type_checkbox')){
            x?this.o.addClass('added'):this.o.removeClass('added');
        }else{
            x?this.o.addClass('added').text('Added To Cart'):this.o.removeClass('added').text('Enquire Now');
        }
    }
    is_event&&alert(x?"Added To Cart":"Opps!! You have canceled the product");
    this.is_set = x;
    return this;
}
function cla_inq_list_item(o,name,series,item){
    //inquiry頁面的item
    this.o = $(o);
    this.name = name;
    this.series = series;
    this.item = item;
}
cla_inq_list_item.prototype.delete_item = function(form_div,inq_model){
    this.item.remove();
    $('.SJ_textarea',$('.SJ_feild',form_div).eq(0)).val(inq_model);
}
function inq_table_psec(a,b,c,d){
    //product_view_d20.html手動修改
    $("th",$(a).eq(b)).each(function(idx){
        if(idx>=c) {
            var $this = $(this);
            var txt = d+$this.text();
            // $this.wrapInner('<label for="inq'+idx+'"></label>');
            // $this.prepend('<input id="inq'+idx+'" class="inq_btn" data-name="'+txt+'" type="checkbox">');
            $this.addClass('thp0');
            $this.wrapInner('<div class="model_name"></div>');
            $this.append('<div class="inq_check_box"><a href="javascript:void(0);" class="inq_btn type_checkbox" data-name="'+txt+'">Inquiry</a></div>')

        }
    });
}