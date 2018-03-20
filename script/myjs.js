$(document).ready(function(){
  // $(".modbtn").bind('click',test);
  toggle_info();
  $.ajax({
  url: "http://127.0.0.1:5000/mobile/show/steam",
  async:false,
  dataType: "json",
  success: function (data){
            $("#mod_info").html("<p>" + data.modInfo + "</p>");
            $.each(data.modVar, function(i, order){
              $("#field_input").append("<label for="+data.modVar[i].varID+">"+data.modVar[i].varName+"：</label>");
              $("#field_input").append("<input type='text' name="+data.modVar[i].varID+"id="+data.modVar[i].varID+" placeholder="+data.modVar[i].varUnit+"><br>");
            });
          }
    });
});

function toggle_info(){
  $(".switch_div").hide();
  $("#mod_info").show();
}

function toggle_input(){
  $(".switch_div").hide();
  $("#mod_input").show();
}

function toggle_rlt(){
  $(".switch_div").hide();
  $("#mod_rlt").show();
}

function test(){
  console.info($(this).attr('id'));
  var modname=$(this).attr('id');
  $.ajax({
  url: "http://171.18.199.3:5000/mobile/show/" + modname,
  async:false,
  dataType: "json",
  success: function (data){
            $("#mod_info").html(data.modInfo);
            $.each(data.modVar, function(i, order){
              $("#mod_input").append("<hr>");
              $("#mod_input").append("<form methond='post'>");
              $("#mod_input").append("<label for="+data.modVar[i].varID+">"+data.modVar[i].varName+":</label>");
              $("#mod_input").append("<input type='text' name="+data.modVar[i].varID+"id="+data.modVar[i].varID+">");
              $("#mod_input").append("</form>");
            });
          }
    });
  $.mobile.changePage("#page_mod");
}
