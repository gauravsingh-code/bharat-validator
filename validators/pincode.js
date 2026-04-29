const PINCODE_REGEX = /^[1-9][0-9]{5}$/;

function isValidPincode(pin) {
  if (typeof pin !== 'string' && typeof pin !== 'number') return false;
  return PINCODE_REGEX.test(String(pin).trim());
}

module.exports = isValidPincode;