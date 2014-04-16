world.text=[" ", 
            "依萍",
            "二勾", 
            "光叽叽", 
            "天坑",  
            "二夫人", 
            "女神豆", 
            "贱贱",  
            "田鸡", 
            "发发",
            "阿槑",
            "神凉",
            "令小狐",
            "折颜",
            "波波",
            "白白",
            "提子",
            "山山"];
  
  /*$(function() {
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
        $( ".input" ).each(function() {
          bValid = bValid && checkLength( $( this ), "tile name", 0, 5 );
        });
        
        //var newList = "<p>";
        if ( bValid ) {
          $( ".input" ).each(function(i) {
            world.text[i+1]=$( this ).val();
            //newList = newList + $( this ).val(); + " ";
          });
          //$( "#users" ).append( newList + "</p>" );
          $( this ).dialog( "close" );
        }

      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
    close: function() {
      name.val("").removeClass( "ui-state-error" );
      level.val("");
      $( "div" ).remove("#appendItem").removeClass( "ui-state-error" );
    }
  });
  
$(document).ready(function(){
    $( "#submit" ).click(function() {
      for (var i=1;i<level.val();i++){ 
        var oClone = document.getElementById("template").cloneNode(true);
        oClone.setAttribute('id',"appendItem");
        allFields.add(oClone);
        document.getElementById("inputList").appendChild(oClone);
      }
      $( "#dialog-form" ).dialog( "open" );
    });
  });*/
  
  $(document).ready(function(){
    $("#setting").click(function(){
      $("#levelSetting").slideToggle("slow");
    });
  });
//});
