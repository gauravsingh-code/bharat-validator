const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  return EMAIL_REGEX.test(email.trim().toLowerCase());
}

module.exports = isValidEmail;
