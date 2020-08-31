$(document).ready(function() {
    var today = new Date();
    $("#currentDay").text(today);
   
    var currentHour = moment().hour();
    
    $(".time-block").each(function(){
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
       
        if (timeBlockHour < currentHour){
            $(this).children('textarea').addClass("past")

        }else if (timeBlockHour == currentHour){
            $(this).removeClass("past")
            $(this).children('textarea').addClass("present")

        } else if (timeBlockHour > currentHour){ 
            $(this).removeClass("present")
            $(this).children('textarea').addClass("future")

        }
    });
    $(".saveBtn").click(function(e){
        e.preventDefault()
        // console.log("clicked")
        value = $(this).siblings("textarea").val()
        textAreaId = $(this).siblings("textarea")[0].id
        console.log(textAreaId)
        localStorage.setItem(textAreaId, value)
    }
    )
    $(".notes").each(function(){
        // console.log($(this)[0].id)
        value = localStorage.getItem($(this)[0].id)
        console.log(value)
        $(this)[0].innerHTML = value
    })

 
});

   

