  var $inputtime = $( '.timepicker' ).pickatime({

      container: '#time',  //displaying in that div
      interval: 60,        //intervals 
      disable: [3, 5, 7],  //disable times 
      closeOnSelect: true, //close after selection
      closeOnClear: true,  // close on clearing selection
      min: new Date(2015,1,20,9), //minimum time selected
      max: new Date(2015,12,14,21), //maximum time selected
      hiddenName:false,
            
 formatLabel: function(time) {
    var hours = ( time.pick - this.get('now').pick ) / 60,
    label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
    return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>'
  }
   

   })

var x=new Date();
var day= x.getDate()+1;  // tommorrow's date
var month= x.getMonth(); // current month 
var year= x.getFullYear(); //current year
var tommorow= day + "/" +month+"/"+year ;



var $inputdate = $( '.datepicker' ).pickadate({
          
          formatSubmit: 'yyyy/mm/dd', //display in this format
          min:new Date(year,month,day) ,
          max:new Date(year,month+1,day),
          hiddenName: false,
          container: '#date',
          editable: false,
          closeOnSelect: true,
          closeOnClear: true,
          disable:[7],
          
          
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

$(".price").each(function() {
    var val = $.trim( $(this).text() ); //to remove spaces
        if (val){
        val = parseFloat( val.replace( /^\$/, "" ) ); // to avoid symbols 
        sum += !isNaN( val ) ? val : 0; //adding all values
    }


});

console.log( sum );
$('#pay').text(parseInt(sum));

});



$('#orderconfirm').click(function()
  {
	$('#ordermsg').text("Done!");
	$('#deliver').removeClass("disabled"); // once order confirmed, proceed to delivery
  	$(".deletebutton").addClass("sr-only"); //once order confirmed, no deletion
  	$('#addmore').addClass("disabled"); //once order confirmed, no more orders
  });

