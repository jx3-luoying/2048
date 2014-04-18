var text=new Array(18);
  text[0] = " ";
  text[1] = "依萍";
  text[2] = "二勾";
  text[3] = "光叽叽";
  text[4] = "天坑";
  text[5] = "二夫人";
  text[6] = "女神豆";
  text[7] = "贱贱";
  text[8] = "田鸡";
  text[9] = "发发";
  text[10] = "波波";
  text[11] = "神凉";
  text[12] = "令小狐";
  text[13] = "折颜";
  text[14] = "阿槑";
  text[15] = "白白";
  text[16] = "提子";
  text[17] = "山山";
  
var mytxt=new Array(14);
  mytxt[0]="我要做只攻罒ω罒！汪~";
  mytxt[1]="春泥一朵护菊花 万花谷配方山泽的选择╮(╯_╰)╭";
  mytxt[2]="我抽死你!╰(｀□′)╯（ ┴┴ ";
  mytxt[3]="我可是在马嵬驿有粉丝的女神！ \(╯-╰)/ ";
  mytxt[4]="追我的女生再多,人家也只爱基友的捡肥皂！@^_^@";
  mytxt[5]="我是正♂直♂的大师!>.<";
  mytxt[6]="啊!双开和尚棍子! ε(┬┬＿┬┬)3";
  mytxt[7]="我可是披着萝莉皮的御姐!∩__∩y";
  mytxt[8]="最近亮晶晶太多,土豪的烦恼谁能懂!";
  mytxt[9]="嗷呜!我再回去睡一会!\(～__～)/";
  mytxt[10]="作为一只攻我肿么能迷路!//(ㄒoㄒ)// ";
  mytxt[11]="人家不呆啊喂!不要悬赏人家啊喂!黄鸡别跑啊喂! <( ｀□′)";
  mytxt[12]="每天都被自己帅醒(*ˉ﹃ˉ) ";
  mytxt[13]="火车~快去练只秀太来！然后扛着我的五毒向总攻进发！\(≥▽≤)/";
  
window.max = Math.pow(2,17);
             
$(function() {
  var name = $( "#name" ),
      level=$("#levelnum"),
      allFields = $( [] );
      tips = $( ".validateTips" );
      
  function updateTips( t ) {
    tips.text( t ).addClass( "ui-state-highlight" );
    setTimeout(function() {
     tips.removeClass( "ui-state-highlight", 1500 );
     }, 500 );
   }

  function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( "ui-state-error" );
      updateTips( "Length of " + n + " must be between " + min + " and " + max + "." );
      return false;
    } else {
      return true;
    }
  }
   
  function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
      o.addClass( "ui-state-error" );
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }
   
  $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 'auto',
    width: 'auto',
    modal: true,
    show : "blind", 
    hide : "blind",
    buttons: {
      "确定": function() {
        var bValid = true;
        allFields.removeClass( "ui-state-error" );
        $( "#appendItem" ).each(function() {
          bValid = bValid && checkLength( $(this).find("input#name"), "tile name", 2, 4 );
        });
        
        if ( bValid ) {
          $( "#appendItem" ).each(function(i) {
            $("#users").add($(this).find("input#name").val());
            text[i+1]=$(this).find("input#name").val();
            if(i>1) mytxt[i-2]=$(this).find("input#message").val();
          });
          window.max = Math.pow(2,level.val());
          $( this ).dialog( "close" );
          $("#levelSetting").slideUp("slow");
        }

      },
      "取消": function() {
        $( this ).dialog( "close" );
      }
    },
    close: function() {
      name.val("").removeClass( "ui-state-error" );
      $( "div" ).remove("#appendItem");
      $( ".dialog-field" ).removeClass( "dialog-open" );
    }
  });
  
  $(document).ready(function(){
    $( "#submit" ).button().click(function() {
      for (var i=0;i<level.val();i++){ 
        var oClone = $("#template").clone();
        oClone.attr('id',"appendItem");
        oClone.find("input#name").val( text[i+1] );
        if( i>1 ) 
          oClone.find("input#message").val(mytxt[i-2]);
        else
          oClone.find("#message").remove();
        allFields.add(oClone);
        oClone.appendTo( $("#inputList") );
      }
      $( ".dialog-field" ).addClass( "dialog-open" );
      $( "#dialog-form" ).dialog( "open" );
    });
  });
  
  $(document).ready(function(){
    $("#setting").click(function(){
      $("#levelSetting").slideToggle("slow");
    });
  });
});
