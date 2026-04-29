const GST_REGEX = /^(0[1-9]|[1-2][0-9]|3[0-7])[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;

function isValidGST(gst) {
  if (typeof gst !== 'string') return false;
  return GST_REGEX.test(gst.trim().toUpperCase());
}

module.exports = isValidGST;