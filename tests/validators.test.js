const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const {
  isValidEmail,
  isValidPAN,
  isValidGST,
  isValidIFSC,
  isValidMobile,
  isValidPincode,
} = require('../index');

// ---------------------------------------------------------------------------
// Email
// ---------------------------------------------------------------------------
describe('isValidEmail', () => {
  it('accepts a standard email', () => {
    assert.equal(isValidEmail('user@example.com'), true);
  });
  it('accepts email with plus alias', () => {
    assert.equal(isValidEmail('user+tag@example.co.in'), true);
  });
  it('accepts email with dots in local part', () => {
    assert.equal(isValidEmail('first.last@domain.org'), true);
  });
  it('trims surrounding whitespace', () => {
    assert.equal(isValidEmail('  user@example.com  '), true);
  });
  it('is case-insensitive', () => {
    assert.equal(isValidEmail('User@EXAMPLE.COM'), true);
  });
  it('rejects email without @', () => {
    assert.equal(isValidEmail('userexample.com'), false);
  });
  it('rejects email without domain', () => {
    assert.equal(isValidEmail('user@'), false);
  });
  it('rejects email with single-char TLD', () => {
    assert.equal(isValidEmail('user@example.c'), false);
  });
  it('rejects non-string input', () => {
    assert.equal(isValidEmail(null), false);
    assert.equal(isValidEmail(undefined), false);
    assert.equal(isValidEmail(123), false);
  });
});

// ---------------------------------------------------------------------------
// PAN
// ---------------------------------------------------------------------------
describe('isValidPAN', () => {
  it('accepts a valid PAN', () => {
    assert.equal(isValidPAN('ABCDE1234F'), true);
  });
  it('accepts lowercase input (normalizes to upper)', () => {
    assert.equal(isValidPAN('abcde1234f'), true);
  });
  it('trims surrounding whitespace', () => {
    assert.equal(isValidPAN(' ABCDE1234F '), true);
  });
  it('rejects PAN with wrong length', () => {
    assert.equal(isValidPAN('ABCDE123F'), false);
  });
  it('rejects PAN starting with digits', () => {
    assert.equal(isValidPAN('12345ABCDE'), false);
  });
  it('rejects PAN ending with digit', () => {
    assert.equal(isValidPAN('ABCDE12341'), false);
  });
  it('rejects non-string input', () => {
    assert.equal(isValidPAN(null), false);
    assert.equal(isValidPAN(undefined), false);
  });
});

// ---------------------------------------------------------------------------
// GST
// ---------------------------------------------------------------------------
describe('isValidGST', () => {
  it('accepts a valid GST number', () => {
    assert.equal(isValidGST('27ABCDE1234F1Z5'), true);
  });
  it('accepts lowercase input (normalizes to upper)', () => {
    assert.equal(isValidGST('27abcde1234f1z5'), true);
  });
  it('trims surrounding whitespace', () => {
    assert.equal(isValidGST(' 27ABCDE1234F1Z5 '), true);
  });
  it('rejects GST with wrong state code (00)', () => {
    assert.equal(isValidGST('00ABCDE1234F1Z5'), false);
  });
  it('rejects GST missing Z at position 13', () => {
    assert.equal(isValidGST('27ABCDE1234F1A5'), false);
  });
  it('rejects GST with wrong length', () => {
    assert.equal(isValidGST('27ABCDE1234F1Z'), false);
  });
  it('rejects non-string input', () => {
    assert.equal(isValidGST(null), false);
    assert.equal(isValidGST(undefined), false);
  });
});

// ---------------------------------------------------------------------------
// IFSC
// ---------------------------------------------------------------------------
describe('isValidIFSC', () => {
  it('accepts a valid IFSC code', () => {
    assert.equal(isValidIFSC('SBIN0005943'), true);
  });
  it('accepts lowercase input (normalizes to upper)', () => {
    assert.equal(isValidIFSC('sbin0005943'), true);
  });
  it('trims surrounding whitespace', () => {
    assert.equal(isValidIFSC(' SBIN0005943 '), true);
  });
  it('rejects IFSC where 5th character is not 0', () => {
    assert.equal(isValidIFSC('SBIN1005943'), false);
  });
  it('rejects IFSC with wrong length', () => {
    assert.equal(isValidIFSC('SBIN000594'), false);
  });
  it('rejects IFSC with digits in bank code', () => {
    assert.equal(isValidIFSC('SB1N0005943'), false);
  });
  it('rejects non-string input', () => {
    assert.equal(isValidIFSC(null), false);
    assert.equal(isValidIFSC(undefined), false);
  });
});

// ---------------------------------------------------------------------------
// Mobile
// ---------------------------------------------------------------------------
describe('isValidMobile', () => {
  it('accepts a valid 10-digit mobile number (string)', () => {
    assert.equal(isValidMobile('9876543210'), true);
  });
  it('accepts a valid mobile number as a number type', () => {
    assert.equal(isValidMobile(9876543210), true);
  });
  it('accepts numbers starting with 6, 7, 8, 9', () => {
    assert.equal(isValidMobile('6000000000'), true);
    assert.equal(isValidMobile('7000000000'), true);
    assert.equal(isValidMobile('8000000000'), true);
  });
  it('trims surrounding whitespace', () => {
    assert.equal(isValidMobile(' 9876543210 '), true);
  });
  it('accepts number with +91 prefix', () => {
    assert.equal(isValidMobile('+919876543210'), true);
  });
  it('accepts number with 91 prefix', () => {
    assert.equal(isValidMobile('919876543210'), true);
  });
  it('rejects numbers starting with 5 or below', () => {
    assert.equal(isValidMobile('5876543210'), false);
  });
  it('rejects numbers with fewer than 10 digits', () => {
    assert.equal(isValidMobile('987654321'), false);
  });
  it('rejects numbers with more than 10 digits', () => {
    assert.equal(isValidMobile('98765432100'), false);
  });
  it('rejects non-numeric strings', () => {
    assert.equal(isValidMobile('phone-number'), false);
  });
  it('rejects null / undefined', () => {
    assert.equal(isValidMobile(null), false);
    assert.equal(isValidMobile(undefined), false);
  });
});

// ---------------------------------------------------------------------------
// Pincode
// ---------------------------------------------------------------------------
describe('isValidPincode', () => {
  it('accepts a valid 6-digit pincode (string)', () => {
    assert.equal(isValidPincode('400001'), true);
  });
  it('accepts a valid pincode as a number type', () => {
    assert.equal(isValidPincode(400001), true);
  });
  it('trims surrounding whitespace', () => {
    assert.equal(isValidPincode(' 400001 '), true);
  });
  it('rejects pincode starting with 0', () => {
    assert.equal(isValidPincode('012345'), false);
  });
  it('rejects pincode with fewer than 6 digits', () => {
    assert.equal(isValidPincode('40000'), false);
  });
  it('rejects pincode with more than 6 digits', () => {
    assert.equal(isValidPincode('4000011'), false);
  });
  it('rejects non-numeric strings', () => {
    assert.equal(isValidPincode('ABCDEF'), false);
  });
  it('rejects null / undefined', () => {
    assert.equal(isValidPincode(null), false);
    assert.equal(isValidPincode(undefined), false);
  });
});
