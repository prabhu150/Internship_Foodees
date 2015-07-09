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


var $inputdate = $( '.datepicker' ).pickadate({
            formatSubmit: 'yyyy/mm/dd',
             min: 'Today',
            
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



 

<<<<<<< HEAD




=======
>>>>>>> cbffb876e08230e8e9f181b5d03753f1662229de
