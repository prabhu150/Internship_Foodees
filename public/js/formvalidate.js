
function validate()
{
// alert("reached jq");
var fname=document.forms["form"]["name"].value;
var patf=/^[a-z A-Z]{6,20}$/;
var email=document.forms["form"]["email"].value;
var emf=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var msg="";
var pass=document.forms["form"]["password"].value;
var pass1=document.forms["form"]["password1"].value;
var term=document.forms["form"]["agree"].value;
var pasp =/^(?=.*[0-9])(?=.*[A-Z])[a-z A-Z 0-9]{6,12}$/;
var pata=/^[0-9]{2,3}$/;
var gender = document.forms["form"]["sex"].value;

var r=patf.test(fname);
var r3=pasp.test(pass); 
var r4=emf.test(email);

$("#namemsg").text("");
$("#pwdmsg1").text("");
$("#pwdmsg2").text("");
$("#sexmsg").text("");
$("#termmsg").text("");
$('#enteredname').removeClass('wronginput');
$('#enteredemail').removeClass('wronginput');
$('#enteredpwd').removeClass('wronginput');
$('#enteredpwd1').removeClass('wronginput');


if(fname=="")
{
	msg=msg+"Please enter First Name \n";
$("#namemsg").text("Please enter First Name\n");
$('#enteredname').addClass('wronginput');
$('#namewrong').removeClass('sr-only');

}
else if(r==false)
{
	msg=msg+"First Name must lie between 6 and 20 characters\n";
$("#namemsg").text("First Name must lie between 6 and 20 characters\n");
$('#enteredname').addClass('wronginput');
$('#namewrong').removeClass('sr-only');

}
else
{
	$('#nameright').removeClass('sr-only');

$('#namewrong').addClass('sr-only');

}


if(email=="")
{
	msg=msg+"Please enter Email \n";
$("#emailmsg").text("Please enter Email\n");
$('#enteredemail').addClass('wronginput');
$('#emailwrong').removeClass('sr-only');

}
else
{
	$('#emailright').removeClass('sr-only');
$('#emailwrong').addClass('sr-only');

}



if(pass=="")
{
msg=msg+"Please Enter A Password\n";
$("#pwdmsg1").text("Please Enter A Password\n");
$('#enteredpwd').addClass('wronginput');
$('#passwordwrong').removeClass('sr-only');

}
else if (r3==false)
{
	msg=msg+"Password has at least One Capital and one Numeric value, length at least 6 char\n";
$("#pwdmsg1").text("Password has at least One Capital and one Numeric value, length at least 6 char\n");
$('#enteredpwd').addClass('wronginput');
$('#passwordwrong').removeClass('sr-only');

}
else
{
	$('#passwordright').removeClass('sr-only');
$('#passwordwrong').addClass('sr-only');

}

if(pass!=pass1)
{
	msg=msg+"Passwords Dont Match!\n";
$("#pwdmsg2").text("Passwords Dont Match!\n");
$('#passwordwrong1').removeClass('sr-only');

$('#enteredpwd1').addClass('wronginput');
}
else if (pass == pass1 && pass!='')
{
	$('#passwordright1').removeClass('sr-only');
$('#passwordwrong1').addClass('sr-only');

}

if(!gender)
	{
		msg=msg+"Please Enter Gender\n";
$("#sexmsg").text("Please Enter Gender\n");
$('#sexwrong').removeClass('sr-only');

}
else
{
	$('#sexright').removeClass('sr-only');
$('#sexwrong').addClass('sr-only');

}

if(msg=='')
	$("#onsubmit").removeClass("disabled");
}



