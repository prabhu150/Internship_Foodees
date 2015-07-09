  var $inputtime = $( '.timepicker' ).pickatime({
            container: '#time',
            interval: 60,
          disable: [3, 5, 7],  
            closeOnSelect: true,
            closeOnClear: true,
min: new Date(2015,1,20,9),
  max: new Date(2015,12,14,21),
            
 formatLabel: function(time) {
    var hours = ( time.pick - this.get('now').pick ) / 60,
      label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
    return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>'
  }
   })

var x=new Date();
var day= x.getDate()+1;
var month= x.getMonth();
var year= x.getFullYear();
var tommorow= day + "/" +month+"/"+year ;

var $inputdate = $( '.datepicker' ).pickadate({
            formatSubmit: 'yyyy/mm/dd',
             min:new Date(year,month,day) ,
           max:new Date(year,month+1,day),
            hiddenName: true,
            container: '#date',
            // editable: true,
            closeOnSelect: true,
            closeOnClear: true,
             firstDay: 1,
            disable:[7],
             from: 'Today', to: 1,
        })

$('#setdate').click(function(){
var pickerdate = $inputdate.pickadate('picker')


});

$('#settime').click(function(){


     var pickertime = $inputtime.pickatime('picker')
        pickertime.open()



});
        

   
$('#billcalc').click(function(){
var sum = 0;
$('.price').each(function(){
    sum += parseInt($(this).text);
});
var sum = 0;

$(".price").each(function() {
    var val = $.trim( $(this).text() );
        if (val){
        val = parseFloat( val.replace( /^\$/, "" ) );
        sum += !isNaN( val ) ? val : 0;
    }
});
console.log( sum );
$('#pay').text(parseInt(sum));
});



$('#orderconfirm').click(function()
  {
$('#ordermsg').text("Done!");
$('#deliver').removeClass("disabled");
  $(".deletebutton").addClass("sr-only");
  $('#addmore').addClass("disabled");
  });

// $('#orderconfirm').hover(function()  
//   {
    
//     var d=$("#data-value").text;
// var date = toString(d);
//     alert(date);
//     //var time =$("#timed").value;
    
//     var msg = "";
// $("#datemsg").text("");
// $("#timemsg").text("");

// if(!date)
//   {msg+="date not set";
// $('#ordermsg').text("Try Again!");
// $("#datemsg").text("Please Enter Proper Date");}

// if(!time)
//   {msg+="time not set";
// $('#ordermsg').text("Try Again!");

// $("#timemsg").text("Please Enter Proper Time");}


// });