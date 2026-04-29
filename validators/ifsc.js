const IFSC_REGEX = /^[A-Z]{4}0[A-Z0-9]{6}$/;

function isValidIFSC(ifsc) {
  if (typeof ifsc !== 'string') return false;
  return IFSC_REGEX.test(ifsc.trim().toUpperCase());
}

module.exports = isValidIFSC;
