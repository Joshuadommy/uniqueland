function appendItem() {
  $("#list_append_item").append('<div class="border_control append_item"><div style="width: 37%" class="group_item"><label class="sub_label">날짜 </label><div class="sub_input"> <input name="test138" type="text" data-date-format="yyyy/mm/dd" value="2016/08/23" class="form-control input-small date-picker"/> </div> </div> <div class="group_item"> <label class="sub_label">시간 </label> <div class="sub_input"> <div class="item_time"> <input type="text" name="from" style="width: 100px;" class="form-control"/> </div> <div class="item_time"> <span class="input-group-addon">~ </span></div> <div class="item_time"> <input type="text" name="from" style="width: 100px;" class="form-control"/> </div> </div> </div>  <div class="trash group_item"> <a href="javascript:;" class="trash_icon detele_item"> <i class="fa fa-remove"></i></a></div> </div>');     // Append new elements
}
$(document).ready(function() {
  // $(this).attr("href");
  
  (function($) {
    function brelink() {
      if ($('.side-menu .current-page').length) {
        var titlefirst = $('.side-menu li.active > a').text();
        var titlelast = $('.side-menu .current-page a').text();
        var titleAddition =  $(".page-breadcrumb").html();
        var pram = window.location.pathname;
        console.log("titlefirst: "+titlefirst);
        console.log("titlelast: "+titlelast);
        console.log("titleAddition: "+titleAddition);
        if (pram =='/auth/user/member/create') {
        	titlelast = "후원회원 등록";
		}
        
        $(".page-breadcrumb").empty();
        $(".page-breadcrumb").append('<li><a href="/auth/campaign" class="home"> <i class="fa fa-home"></i><span>홈</span></a></li>');
        if(titlefirst != ''){
        	$(".page-breadcrumb").append('<li class="menu-lever1"><a>'+(titlefirst)+'</a></li>');
        }
        if(titlelast != ''){
        	$(".page-breadcrumb").append('<li class="menu-lever2"><a>'+(titlelast)+'</a></li>');
        }
        $(".page-breadcrumb").append(titleAddition);
        // $("body").addClass('fix-addtocat');
      }
    }

    $(window).on('load', function() {
      brelink();
    });
  })(jQuery);

  $('.last-checkbox').change(function(){
    if($('.last-checkbox').is(":checked")) {
      $('.list-sub-checkbox').show(300);
    }
    else{
      $('.list-sub-checkbox').hide(300);
    }
  });

  $(document.body).on('click', '.detele_item', function() {
    $(this).closest('.append_item').fadeOut(300, function() {
      $(this).remove();
    });
  });/* --------------------------------------------------------------------- */
  /* Delete item
  /* --------------------------------------------------------------------- */

  $(document.body).on('click', '.btn_delete', function() {
    $(this).closest('.item-comment').fadeOut(300, function() {
      $(this).remove();
    });
  });
  
  /* --------------------------------------------------------------------- */
  /* Metronic
  /* --------------------------------------------------------------------- */
  


  /* --------------------------------------------------------------------- */
  /* data-rw-placeholder
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("[data-rw-placeholder]").length) return;

    $("[data-rw-placeholder]").each(function() {
      var placeholderContent = $(this).attr("data-rw-placeholder");
      $(this).attr("placeholder", placeholderContent);

      $(this).on("focus", function() {
        $(this).attr("placeholder", "");
      });

      $(this).on("blur", function() {
        $(this).attr("placeholder", placeholderContent);
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* .date-picker
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".date-picker").length) return;

    $('.date-picker').datepicker({
      orientation: "left",
      autoclose: true,
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* .ckeditor
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".ckeditor").length) return;

    var idNum = 1;

    $(".ckeditor").each(function() {
      $(this).attr("id", "sb-ckeditor" + idNum);
      var id = $(this).attr("id");

      $("" + id + "").ckeditor({
        language: "ko"
      });

      idNum++;
    });
  })(jQuery);


  /* --------------------------------------------------------------------- */
  /* .check-all-wrapper
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".check-all-wrapper").length) return;

    $(document.body).on("change", ".check-all", function() {
      var checkAll = $(this);
      var wrapper = $(this).closest(".check-all-wrapper");
      var item = wrapper.find(".check-item");

      checkAll.prop('checked') == true ? item.prop('checked', true) : item.prop('checked', false)

      $.uniform.update();
    });

    $(document.body).on("change", ".check-item", function() {
      var item = $(this);
      var wrapper = $(this).closest(".check-all-wrapper");
      var checkAll = wrapper.find(".check-all");
      var countItem = wrapper.find(".check-item:not(':checked')").length;

      countItem === 0 ? checkAll.prop('checked', true) : checkAll.prop('checked', false)

      $.uniform.update();
    });

  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* .check-all-wrapper
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".rw-toggle-checkbox").length) return;

    $(".rw-toggle-checkbox").each(function() {
      var checkbox = $(this).find(".toggle-checkbox");
      var content = $(this).find(".toggle-content");

      checkbox.prop('checked') == true ? content.show() : content.hide()
    });

    $(document.body).on("change", ".toggle-checkbox", function() {
      var checkbox = $(this);
      var wrapper = $(this).closest(".rw-toggle-checkbox");
      var content = wrapper.find(".toggle-content");

      checkbox.prop('checked') == true ? content.show() : content.hide()

      $.uniform.update();
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* .sortable
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".sortable").length) return;

    $(".sortable").each(function() {
      $(this).sortable({
        cursor: "move",
        update: function(event, ui) {
          var changedList = this.id;
          var order = $(this).sortable('toArray');
          var positions = order.join(';');

          alert("PLEASE VIEW CONSOLE.LOG");

          console.log({
            id: changedList,
            positions: positions
          });
        }
      });

      $(this).disableSelection();
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* Create preview image upload
  /* --------------------------------------------------------------------- */
  

  /* --------------------------------------------------------------------- */
  /* Create preview image upload
  /* --------------------------------------------------------------------- */
  

  // all upload file
  

  /* --------------------------------------------------------------------- */
  /* Check valid file upload
  /* --------------------------------------------------------------------- */
  

  /* --------------------------------------------------------------------- */
  /* Create preview image upload
  /* --------------------------------------------------------------------- */
  

  /* --------------------------------------------------------------------- */
  /* Check valid file upload
  /* --------------------------------------------------------------------- */
  

  /* --------------------------------------------------------------------- */
  /* Check valid file upload
  /* --------------------------------------------------------------------- */
  



  /* --------------------------------------------------------------------- */
  /* fullCalendar
  /* --------------------------------------------------------------------- */
  


  /* --------------------------------------------------------------------- */
  /* validation form_sample_3
  /* --------------------------------------------------------------------- */
  


  /* --------------------------------------------------------------------- */
  /* fullCalendar
  /* --------------------------------------------------------------------- */
  


});


