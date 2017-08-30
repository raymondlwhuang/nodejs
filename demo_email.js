var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'raymondlwhuang@gmail.com',
        pass: 'I344g081p96'
    }
});

var mailOptions = {
    from: 'raymondlwhuang@gmail.com',
    to: 'raymondlwhuang@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response());
    }

});