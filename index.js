    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    var email = process.env.EMAIL,
        email_to = process.env.EMAIL_TO,
        subject = process.env.SUBJECT;
    /*
        body {
            replay_to
            message
        }
    */

    exports.contactFunction = (req, res) => {
        ({name, replay_to, message} = req.body);
        console.log(req.body.toString());
        var msg = {
            "personalizations": [{
                "to": [{
                    "email": email_to
                }]
            }],
            "from": {
                "email": email
            },
            "replay_to" : {
                "email" : replay_to
            },
            "subject": subject,
            "content": [{
                "type": "text/plain",
                "value": message
            }]
        
        };
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(error.toString())
            res.sendStatus(500);
        });
    };
