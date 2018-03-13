
$(document).ready(function() {
  gohome();
});

function gohome(){
  $("div[data-role='content']").hide();
  $("#content_home").show();
}

function showmodlist(){
  $("div[data-role='content']").hide();
  $("#content_modlist").show();
}

function showsteam(){
  $("#content_load").load("html/content.html");
  $("#content_load").show();
}

function showinfo(){
  $("#div_info").show();
  $("#div_input").hide();
  $("#div_rlt").hide();
}

function showinput(){
  $("#div_info").hide();
  $("#div_input").show();
  $("#div_rlt").hide();
}

function showrlt(){
  $("#div_info").hide();
  $("#div_input").hide();
  $("#div_rlt").show();
}


// $(function() {
//   $("#test").on('click', function(event) {
//       var $this = $(this);
//       event.preventDefault();
//       $("#content_home").load($this.attr('href'));
//   });
// });
