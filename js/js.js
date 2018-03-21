$(function () {
	//购物车切换图片
	var isHover=false;
	var timer1=null;
	$(".buy_car_img").hover(function () {
		isHover=true;
		$(".buy_car_img").attr("src","images/shopcarhover.png");
		$(".buy_car_spec").animate({height:100},200,function () {
			$(".buy_car p").html("不买东西就想结账啊？")
        });
    },function () {
		isHover=false;
		timer1=setTimeout(function () {
			if(!isHover){
				$(".buy_car_spec").animate({height:0},200,function () {
					$(".buy_car p").html("");
                });
				$(".buy_car_img").attr("src","images/shopcar.png");
			}
        },200);
        $(this).stop(timer1);
        }
    );
	$(".buy_car_spec").hover(function () {
		isHover=true;
		$(".buy_car_img").attr("src","images/shopcarhover.png");
		$(".buy_car_spec").animate({height:100},200,function () {
			$(".buy_car p").html("真想结？");
        })
    },function () {
		isHover=false;
		$(this).stop(timer1);
		timer1=setTimeout(function () {
			if(!isHover){
				$(".buy_car_spec").animate({height:0},200,function () {
					$(".buy_car p").html("");
                });
				$(".buy_car_img").attr("src","images/shopcar.png");
			}
        },200)
    });

	//搜索框
	$(document).click(function () {
		$(".search_extra").hide();//隐藏窗口
		$(".search_txt,.search_btn").css("border","1px solid #e0e0e0");
		// $(".search_btn").css("border","1px solid #e0e0e0");
        $(".search_btn").css("border-left","none");

        $(".hot_word1,.hot_word2").show();//显示被隐藏的
        $(".hot_word1,.hot_word2").animate({opacity:100},300);
    });
	$(".search_box").click(function () {
		$(".search_extra").show();
		$(".search_txt").css("border","1px solid #ff6700");
		$(".search_txt").css("border-bottom","none");
		$(".search_btn").css("border","1px solid #ff6700");
		$(".search_btn").css("border-left","none");
		$(".hot_word2,.hot_word1").animate({opacity:0},300);
		return false;
    });


	//隐藏的div显示
   var isHoverNav=false;
   var timer2=null;
   function changeSateDown(index) {
	   switch (index){
		   case 0:
		   	$(".nav_menu_show1").slideDown(600);
		   	break;
           case 1:
               $(".nav_menu_show2").slideDown(600);
               break;
           case 2:
               $(".nav_menu_show3").slideDown(600);
               break;
           case 3:
               $(".nav_menu_show4").slideDown(600);
               break;
           case 4:
               $(".nav_menu_show5").slideDown(600);
               break;
           case 5:
               $(".nav_menu_show6").slideDown(600);
               break;
	   }
   }
   function changeStateUp(index) {
	   switch (index){
           case 0:
               $(".nav_menu_show1").slideUp(600);
               break;
           case 1:
               $(".nav_menu_show2").slideUp(600);
               break;
           case 2:
               $(".nav_menu_show3").slideUp(600);
               break;
           case 3:
               $(".nav_menu_show4").slideUp(600);
               break;
           case 4:
               $(".nav_menu_show5").slideUp(600);
               break;
           case 5:
               $(".nav_menu_show6").slideUp(600);
               break;
	   }
   }
   var preIndex=-1;
   var curIndex=-1;
   $(".nav .nav_list li").mousemove(function () {
	   curIndex=$(this).index();
	   isHoverNav=true;
	   changeSateDown(curIndex);
	   if(preIndex !=-1 && preIndex != curIndex){
	   	changeStateUp(preIndex)
	   }
	   preIndex=curIndex;
	   return false;
   });
   $(".nav .nav_list li").mouseout(function () {
	   isHoverNav=false;
	   timer2=setTimeout(function () {
		   if(!isHoverNav){
		   	changeStateUp(preIndex)
		   }
       },100);
	   return false;
   })
	$(".navMenu").mousemove(function () {
		isHoverNav=true;
		changeSateDown(curIndex);
		return false;
    })
	$(".navMenu").mouseout(function () {
		isHoverNav=false;
		timer2=setTimeout(function () {
			if(!isHoverNav){
				changeStateUp(preIndex);
			}
        },100)
        return false;
    });


   //隐藏的box
   $(".category_item").hover(function () {
   	var index=$(this).index();
   	$(".category_item_box:eq("+index+")").css("display","block");
   	var category_item_list = $(this).find(".category_item_box").children(".category_item_list");
   	var width=$(this).index()===0?270:220;
       console.log($(".category_item_list:eq("+width+")"));

       var len = category_item_list.length;
       console.log(len);
       category_item_list.width(width);
       width=len==1?len*width:len*width+70;
       console.log(width);

       $(".category_list .category_item_box").width(width);
   },function () {
	   var index=$(this).index();
	   $(".category_item_box:eq("+index+")").css("display","none")
   })

	//首页大图切换
	$(".category_move span").click(function () {
		$(".category_move span").removeClass("cur_move");
		$(this).addClass("cur_move");
		var index =$(this).parent().index();
		$(".category_hot_list>li").css("display","none");
		$(".category_hot_list>li:eq("+index+")").css("display","block")
    })

//明星单品切换
	var dir=0;
   $(".left_img").click(function () {
	   if(dir){
	   	$(".left_img>img").attr("src","images/icon/left2.png");
	   	$(".right_img>img").attr("src","images/icon/right1.png");
	   	$(".star_spec .spec_item_list").animate({left:"0"},200);
	   	dir=0;
	   }
   });
   $(".right_img").click(function () {
	   if(dir==0){
	   	$(".left_img>img").attr("src","images/icon/left1.png");
	   	$(".right_img>img").attr("src","images/icon/right2.png");
	   	$(".star_spec .spec_item_list").animate({left:-1234},200);
	   	dir=1;
	   }
   })

  //为你推荐切换
	var dir_recommend=0;

   function changeDir(dir) {
	   if(dir==0){
	   	$(".img1>img").attr("src","images/icon/left_b_2.png");
	   	$(".img2>img").attr("src","images/icon/right_b_1.png");
	   }else if(dir==1){
	   	$(".img1>img").attr("src","images/icon/left_b_1.png");
	   	$(".img2>img").attr("src","images/icon/right_b_1.png")
	   }else {
	   	$(".img1>img").attr("src","images/icon/left_b_1.png");
	   	$(".img2>img").attr("src","images/icon/right_b_2.png")
	   }
   }
   $(".img1").click(function () {
	   if(dir>0){
	   	dir--;
	   	changeDir(dir);
	   	$(".recommend .recommend_spec_list").animate({left:"+=1234px"},200);
	   }
   });
   $(".img2").click(function () {
	   if(dir<2){
	   	dir++;
	   	dir=dir%3;
           console.log(dir);
		changeDir(dir);
		$(".recommend .recommend_spec_list").animate({left:"-=1234px"},200);
       }
   });



   //内容块点击圆圈切换
	$(".content_page>li>span").hover(function () {
		$(this).click(function () {
			var root=$(this).parent().parent().parent();
			var that=$(this);
			var index=$(this).parent().index();
			var Left=-index*296;
			if(!root.find(".content_spec_list").is(":animated")){
				root.find(".content_page>li>span").removeClass("active");
				that.addClass("active");
				root.find(".content_spec_list").animate({left:""+Left+"px"})
			}
        })
    })

	//热门导航栏切换
	$(".match .spec_type_nav>li>a").hover(function () {
		var index=$(this).index();
        	$(".match .cur").removeClass("cur");
        	$(this).addClass("cur");
        });
        $(".around .spec_type_nav > li > a").hover(function() {
        	var index = $(this).index();
        	$(".around .cur").removeClass("cur");
        	$(this).addClass("cur");
        });
        $(".accessories .spec_type_nav > li > a").hover(function() {
        	var index = $(this).index();
        	$(".accessories .cur").removeClass("cur");
        	$(this).addClass("cur");
    })

	//箭头出现隐藏
	$(".content_spec>li").mousemove(function () {
		$(this).find(".content_left,.content_right").css("display","block")
        // console.log(this);
        $(this).find(".content_spec_list").addClass("LUN");
        $(this).find(".content_page").addClass("DIAN")
		if(dir==0){
            $(".content_right").css("cursor", "pointer");
            $(".content_left").css("cursor","default")
		}else if(dir>0&&dir<3){
            $(".content_right,.content_left").css("cursor", "pointer");
		}else if(dir==3) {
            $(".content_left").css("cursor", "pointer");
            $(".content_right").css("cursor","default")
		}
    })
    // var left=$(".content_spec>li").find(".content_spec_list").position().left;

    $(".content_spec>li").mouseout(function () {
        $(this).find(".content_left,.content_right").css("display","none")
        $(this).find(".content_spec_list").removeClass("LUN")
		$(this).find(".content_page").removeClass("DIAN");
    });

    // $(".content_left").mousemove(function () {
    //     $(".content_left").attr("src","images/icon/content_left_hover.png");
    // });
    //
    //
    // $(".content_left").mouseout(function () {
    //     $(".content_left").attr("src","images/icon/content_left.png");
    // });


    // var left=$(".content_spec>li").find(".content_spec_list").position().left;
    // if((left/-296)>=0){
    //     console.log(5);
    //     $(".content_left").css("cursor","pointer");
    //     // console.log(this);
    //
    // }else {
		// $(".content_left").css("cursor","default")
    // }
    // $(".content_left").click(function () {
    //     console.log(3);
		// if(!$(".LUN").find(".content_spec_list").is(":animated")&&left<=	0){
    //         console.log(1);
    //         $(".LUN").find(".content_spec_list").animate({left:"+=296px"});
    //
    //         $(".content_spec>li").find(".content_page > li > span").removeClass("active");
    //         $(".content_spec>li").find(".content_page > li:eq(" + (left / -296 - 1) + ") > span").addClass("active");
    //
		// }
		// if(left===0){
    //         console.log(11);
    //         $(this).unbind()
		// }
    //
    //
    // })
    //
    // //右边
    //
    // $(".content_right").mousemove(function () {
    //     $(".content_right").attr("src","images/icon/content_right_hover.png")
    // });
    //
    // $(".content_right").mouseout(function () {
    //     $(".content_right").attr("src","images/icon/content_right.png");
    // });
    //
    // if (left / -296 < 3||left / -296 >0) {
    //     $(".content_right,.content_left").css("cursor", "pointer");
    //     // console.log(this);
    // } else {
    //     $(".content_right,.content_left").css("cursor", "default");
    // }
    //
    // $(".content_right").click(function() {
    //
    //     if (!$(".LUN").find(".content_spec_list").is(":animated") && left > -888) {
    //         console.log(2);
    //         $(".LUN").find(".content_spec_list").animate({
    //             left: "-=296px"
    //         });
    //         $(".content_spec>li").find(".content_page > li > span").removeClass("active");
    //         $(".content_spec>li").find(".content_page > li:eq(" + (left / -296 + 1) + ") > span").addClass("active");
    //     }
    // });

 var dir_recommend1 = 0;
    function changeDir1(dir) {
    	if (dir == 0) {
    		$(".content_left").attr("src", "images/icon/content_left.png");
    		$(".content_right").attr("src", "images/icon/content_right_hover.png");
    	} else if (dir == 1) {
    		$(".content_left").attr("src", "images/icon/content_left_hover.png");
            $(".content_right").attr("src","images/icon/content_right_hover.png")
    	} else if(dir==2){
    		$(".content_left").attr("src", "images/icon/content_left_hover.png");
            $(".content_right").attr("src","images/icon/content_right_hover.png")
    	} else {
    		$(".content_left").attr("src","images/icon/content_left_hover.png");
    		$(".content_right").attr("src","images/icon/content_right.png")
		}
		var Span=$(".DIAN").children("li");
    	Span.each(function (index,item) {
			dir==index?$(item).children("span").addClass("active"):$(item).children("span").removeClass("active")
        })
    }
    $(".content_left").click(function() {
    	if (dir > 0) {
    		dir--;
    		changeDir1(dir);
    		$(".LUN").animate({
    			left: "+=296px"
    		}, 200);

    	}
    });
    $(".content_right").click(function() {
    	if (dir < 3) {
    		dir++;
    		dir = dir % 4;
           changeDir1(dir);
    		$(".LUN").animate({
    			left: "-=296px"
    		}, 200);
    	}
    });
    // var Tip=dir==$(".LUN>li").length-1?0:dir;
    // for(var i=0;i<$(".DIAN>li").length;i++){
     //    console.log(123);
     //    i==dir?$(".DIAN>li>span").addClass("active"):$(".DIAN>li>span").removeClass("active")
	// }



        })