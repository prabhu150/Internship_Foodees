var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "contactusfoodees@gmail.com",
       pass: "lovefood"
   }
});

smtpTransport.sendMail({  //email options
   from: "Sender Name <contactusfoodees@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "Receiver Name <receiver@contactusfoodees.com>", // receiver
   subject: "Emailing with nodemailer", // subject
   text: "Email Example with nodemailer" // body
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});