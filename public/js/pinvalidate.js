
function pinvalidate()
{
	var pincode = document.forms["form1"]["line7"].value;
	var msg="";
	var arr=['400101','400001','400102'];



if(pincode in arr)
	msg=msg+"1 hour delivery available in your area";
else
	msg=msg+"1 hour delivery not available in your area";
if(msg!="")
	alert(msg);
}


