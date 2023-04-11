const sendMail = require('../../helpers/sendMail');

const subscribe = async (req, res) => {
  const { email } = req.body;

  const mail = {
    to: email,
    subject: 'TRPPD_ subscription',
    text: `Thank you for subscribing to our newsletter!`,
  };

  await sendMail(mail);
  res.send('Mail sent successfully');
};

module.exports = subscribe;
