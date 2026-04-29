# ind-validator

Lightweight, zero-dependency validators for common Indian formats.

## Supported Validators

| Function | Format |
|---|---|
| `isValidPAN` | PAN card (e.g. `ABCDE1234F`) |
| `isValidGST` | GST number (e.g. `27ABCDE1234F1Z5`) |
| `isValidIFSC` | IFSC code (e.g. `SBIN0005943`) |
| `isValidMobile` | Indian mobile number (supports `+91`, `91` prefix) |
| `isValidPincode` | 6-digit Indian pincode |
| `isValidEmail` | Email address |

## Installation

```bash
npm install ind-validator
```

## Usage

```js
const {
  isValidPAN,
  isValidGST,
  isValidIFSC,
  isValidMobile,
  isValidPincode,
  isValidEmail,
} = require('ind-validator');

isValidPAN('ABCDE1234F');          // true
isValidGST('27ABCDE1234F1Z5');    // true
isValidIFSC('SBIN0005943');       // true
isValidMobile('+919876543210');   // true
isValidMobile('9876543210');      // true
isValidPincode('400001');         // true
isValidEmail('user@example.com'); // true
```

## Notes

- All validators return `true` or `false` — never throw.
- String inputs are **trimmed** automatically.
- `isValidPAN`, `isValidGST`, `isValidIFSC` accept lowercase and normalize internally.
- `isValidMobile` and `isValidPincode` accept both `string` and `number` types.
- `isValidMobile` strips `+91` or `91` country code prefix automatically.

## License

MIT