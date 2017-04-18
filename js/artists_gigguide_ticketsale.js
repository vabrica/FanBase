

$(document).ready(function() {
    var max_fields      = 100; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><div class="form-group col-md-1 col-sm-1"><input type="text" class="form-control input-md" id="numTickets" placeholder="Num"></div><div class="form-group col-md-3 col-sm-3"><input type="text" class="form-control input-md" id="venue" placeholder="Venue"></div><div class="form-group col-md-2 col-sm-2"><input type="text" class="form-control input-md" id=".." placeholder="ID"></div><div class="form-group col-md-2 col-sm-2"><input type="text" class="form-control input-md" id="date" placeholder="Date"></div><div class="form-group col-md-2 col-sm-2"><input type="text" class="form-control input-md" id="time" placeholder="Time"></div><div class="form-group col-md-2 col-sm-2"><input type="text" class="form-control input-md"  id="priceTickets" placeholder="Price"></div></><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
        $(this).parent('div').remove(); 
        x--;
    })
});

