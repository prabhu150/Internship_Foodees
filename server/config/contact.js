var nodemailer = require('nodemailer');

exports.getContactUs = function(req, res){
    res.render('contact-us', { title: 'Contact Us', page: 'contact' })
};

exports.postContactUs = function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: "contactusfoodees@gmail.com",
          pass: "ojxxyupcfdwhtndd" 
      }
  });

  //Mail options
  mailOpts = {
      from: req.body.name+' &lt;'+req.body.email+'&gt;', //grab form data from the request body object
      to: 'contactusfoodees@gmail.com',
      subject: 'Website contact form',
      text: req.body.name+' <'+req.body.email+'>\r\n\r\n'+req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.render('contact-us', { title: 'Contact Us', msg: 'Error occured, letter not sent.', err: true, page: 'contact' });
          console.log(error);
      }
      //Yay!! Email sent
      else {
          res.render('contact-us', { title: 'Contact Us', msg: 'Letter sent! Thank you.', err: false, page: 'contact' });
          console.log('sent');
      }
  });
}