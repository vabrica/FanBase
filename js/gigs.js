function LoadPrice(price) {
  $("#total").html(price);
  $("input[name=price-rules]").val(price);
  $(".qty").val("1");
}


$(document).ready(function(){

  $('.qty').on("change", function() {
    var price2 = $("input[name=price-rules]").val();
    var quantity2 = $(".qty").val();
    $("#total").html(quantity2 * price2);
  });
 
});


  



