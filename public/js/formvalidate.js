
function validate()
{
alert("reached jq");
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
$("#pwdmsg").text("");
$("#pwd1msg").text("");
$("#sexmsg").text("");
$("#termmsg").text("");

if(fname=="")
{
	msg=msg+"Please enter First Name \n";
$("#namemsg").text("Please enter First Name\n");
}
else if(r==false)
{
	msg=msg+"First Name must lie between 6 and 20 characters\n";
$("#namemsg").text("First Name must lie between 6 and 20 characters\n");
}
if(email=="")
{
	msg=msg+"Please enter Email \n";
$("#emailmsg").text("Please enter Email\n");

}



if(pass=="")
{
msg=msg+"Please Enter A Password\n";
//$("#pwdmsg").text("Please Enter A Password\n");
alert("Please Enter A Password");
}
else if (r3==false)
{
	msg=msg+"Password has at least One Capital and one Numeric value, length at least 6 char\n";
//$("#pwdmsg").text("Password has at least One Capital and one Numeric value, length at least 6 char\n");
alert("Password has at least One Capital and one Numeric value, length at least 6 char");
}
if(pass!=pass1)
{
	msg=msg+"Passwords Dont Match!\n";
//$("#pwd1msg").text("Passwords Dont Match!\n");
alert("Passwords Dont Match!");
}
if(!gender)
	{
		msg=msg+"Please Enter Gender\n";
$("#sexmsg").text("Please Enter Gender\n");
}
if(!term)
{
		msg=msg+"You Have to Agree\n";
$("#termmsg").text("You have to agree!\n");
}
if(msg=='')
	$("#onsubmit").removeClass("disabled");
}



