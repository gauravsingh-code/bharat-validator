const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

function isValidPAN(pan) {
  if (typeof pan !== 'string') return false;
  return PAN_REGEX.test(pan.trim().toUpperCase());
}

module.exports = isValidPAN;