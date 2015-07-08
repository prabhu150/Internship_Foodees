
function validate()
{

var fname=document.forms["form"]["name"].value;
var patf=/^[a-z A-Z]{6,20}$/;
var email=document.forms["form"]["email"].value;
var emf=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var msg="";
var pass=document.forms["form"]["password"].value;
var pass1=document.forms["form"]["password1"].value;
var pasp =/^(?=.*[0-9])(?=.*[A-Z])[a-z A-Z 0-9]{6,12}$/;
var pata=/^[0-9]{2,3}$/;
var gender = document.forms["form"]["sex"].value;

var r=patf.test(fname);
var r3=pasp.test(pass);
var r4=emf.test(email);
if(fname=="")
msg=msg+"Please enter First Name \n";
else if(r==false)
msg=msg+"First Name must lie between 6 and 20 characters\n";
if(pass=="")
msg=msg+"Please Enter A Password\n";
else if (r3==false)
msg=msg+"Password has at least One Capital and one Numeric value, length at least 6 char\n";
if(pass!=pass1)
msg=msg+"Passwords Dont Match!\n";
if(!gender)
	msg=msg+"Please Enter Gender\n";
if(msg!="")
	alert(msg);

}




