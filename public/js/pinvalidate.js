
function pinvalidate()
{
	var pincode = document.forms["form1"]["line7"].value;
	var flatno = document.forms["form1"]["line1"].value;
	var bldgname = document.forms["form1"]["line2"].value;
	var roadname = document.forms["form1"]["line3"].value;
	var landmark = document.forms["form1"]["line4"].value;
	var area = document.forms["form1"]["line5"].value;
	var city = document.forms["form1"]["line6"].value;
	var msg="";
	var arr=['400101','400001','400102'];

$('#flatmsg').text('');
$('#bdgmsg').text('');
$('#roadmsg').text('');
$('#landmsg').text('');
$('#areamsg').text('');
$('#citymsg').text('');


if(!flatno)
	$('#flatmsg').text('Please Enter Flat No');
if(!bldgname)
	$('#bdgmsg').text('Please Enter bldgname');
if(!roadname)
	$('#roadmsg').text('Please Enter roadname');
if(!landmark)
	$('#landmsg').text('Please Enter landmark');
if(!area)
	$('#areamsg').text('Please Enter area');
if(!city)
	$('#citymsg').text('Please Enter city');


if(!pincode)
msg+="Please Enter Correct PinCode!";
else if(arr.contains(pincode))
	{
		msg=msg+"1 hour delivery available in your area";

     $("#onehour").removeClass("disabled");
	 $("#senddabba").removeClass("disabled");
	}
else
	{
		msg=msg+"1 hour delivery not available in your area";
$("#senddabba").removeClass("disabled");
}

$('#msg').text(msg) ;



$("#onehour").click(function(){
$("#time").removeClass("sr-only");
     $("#timemsg").text("Select Time");

 });




}


Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}