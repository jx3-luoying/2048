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
      "Create an account": function() {
        var bValid = true;
        allFields.removeClass( "ui-state-error" );
        $( ".text" ).each(function() {
          bValid = bValid && checkLength( $( this ), "tile name", 1, 5 );
        });
        
        if ( bValid ) {
          $( ".text" ).each(function(i) {
            text[i+1]=$( this ).val();
          });
          $( this ).dialog( "close" );
          $("#levelSetting").slideUp("slow");
        }

      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
    close: function() {
      name.val("").removeClass( "ui-state-error" );
      $( "div" ).remove("#appendItem").removeClass( "ui-state-error" );
    }
  });
  
  $(document).ready(function(){
    $( "#submit" ).button().click(function() {
      for (var i=1;i<level.val();i++){ 
        var oClone = document.getElementById("template").cloneNode(true);
        oClone.setAttribute('id',"appendItem");
        allFields.add(oClone);
        document.getElementById("inputList").appendChild(oClone);
      }
      $( "#dialog-form" ).dialog( "open" );
    });
  });
  
  $(document).ready(function(){
    $("#setting").click(function(){
      $("#levelSetting").slideToggle("slow");
    });
  });
});
