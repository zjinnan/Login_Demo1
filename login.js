window.onload = function(){
    $("#slideUp").hide();
    $("#slideDown").show();
    $("#userTypes").hide();
    $(".login-body-bg").animate({
       opacity:'0.9'
    },'slow');
    $(".login-body-pane").animate({
       opacity:'0.9',
       top:'53%'
    },'slow');
    $("#slideDown").click(function(){
       $("#userTypes").show();
       $("#slideUp").show();
       $("#slideDown").hide();
    });
    $("#slideUp").click(function(){
       $("#userTypes").hide();
       $("#slideUp").hide();
       $("#slideDown").show();
    });
    $("#userTypes").children('li').click(function(){
       $("#userType").val($(this).text());
       $("#slideUp").hide();
       $("#slideDown").show();
       $("#userTypes").hide();
    });
    $("input:eq(0)").focus(function(){
       $(this).val("");
     });
    $("input:eq(1)").focus(function(){
       $(this).val("");
     });
    $("input:eq(0)").blur(function(){
       if($(this).val()==''){
            $(this).val("请输入用户名");
       };
       check_name();
     });
    $("input:eq(1)").blur(function(){
       if($(this).val()==''){
            $(this).val("请输入密码");
       };
       check_pwd();
     });
     //校验账号的格式
   function check_name() {
       //校验其格式(\w字母或数字或下划线)
       var reg = /^\w{6,10}$/;
       if($('#username').val()=='请输入用户名'){
           $('#username').addClass('ok').removeClass('error');
       }else if(reg.test($('#username').val())) {
           //通过，增加ok样式
           $('#username').addClass('ok').removeClass('error');
       }else {
           //不通过，增加error样式
           $('#username').addClass('error').removeClass('ok');
       }
        
   }
   function check_pwd(){
       var reg2 = /^\w{6,10}$/;
       if($("#pwd").val() == '请输入密码'){
            $("#pwd").addClass('ok').removeClass('error');
       }else if(reg2.test($("#pwd").val())) {
           $("#pwd").addClass('ok').removeClass('error');
       }else {
           $("#pwd").addClass('error').removeClass('ok');
       }
        
   }


   /**/
   /*$(".login-main-dd").animate({marginTop:'10px',opacity:'0.2'},"slow");
   $(".login-main-dd").animate({marginBottom:'10px',opacity:'0.9'},"slow");*/
   
}