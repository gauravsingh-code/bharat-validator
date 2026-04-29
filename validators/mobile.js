const MOBILE_REGEX = /^[6-9]\d{9}$/;

function isValidMobile(number) {
  if (typeof number !== 'string' && typeof number !== 'number') return false;
  const normalized = String(number).trim().replace(/^\+?91/, '');
  return MOBILE_REGEX.test(normalized);
}

module.exports = isValidMobile;