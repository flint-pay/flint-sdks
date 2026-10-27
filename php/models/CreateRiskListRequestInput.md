[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskListRequestInput

The request body for: Create a risk list.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alias` | Required | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |
| `item_type` | Required | string | Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. Values: `"card_fingerprint"`, `"card_bin"`, `"email"`, `"email_domain"`, `"ip_address"`, `"country"`, `"customer_id"`, `"string"`, `"case_sensitive_string"`. |
| `name` | Required | string | minLength: `1`. |

