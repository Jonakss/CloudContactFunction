const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var email = "contacto@constructoralar.uy",
    email_to = "ventas@constructoralar.uy"
    subject = "Contacto - Presupuesto";
/*
    body {
        replay_to
        message
    }
*/

exports.contactFunction = (req, res) => {
    const msg = {
      to: email_to, // Change to your recipient
      replay_to: {
            email: replay_to,
            name: name
      },
      from: email, // Change to your verified sender
      subject: subject,
      text: message,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        res.send(200);
      })
      .catch((error) => {
        console.error(error)
        res.send(500);
      });
};