const isValidPAN     = require('./validators/pan');
const isValidGST     = require('./validators/gst');
const isValidEmail   = require('./validators/email');
const isValidMobile  = require('./validators/mobile');
const isValidPincode = require('./validators/pincode');
const isValidIFSC    = require('./validators/ifsc');

module.exports = {
  isValidPAN,
  isValidGST,
  isValidEmail,
  isValidMobile,
  isValidPincode,
  isValidIFSC,
};