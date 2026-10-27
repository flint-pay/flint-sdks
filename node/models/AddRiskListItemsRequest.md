[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddRiskListItemsRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Required | Array of string |  |

### AddRiskListItemsRequest variant 1

anyOf variant 1: Declared schema AddRiskListItemsRequest. Values to add to the risk list. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID..

- Constraints for `values`: Values to add to the risk list, in request order. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. minItems: `1`. maxItems: `500`. Items: Limited to 512 characters (Unicode code points) before normalization and after normalization. minLength: `1`. maxLength: `512`.

### AddRiskListItemsRequest variant 2

anyOf variant 2: Declared schema DeliveryCustomerSegmentCondition. A delivery eligibility condition that matches customers in one of the listed segments (`values`)..

- Constraints for `values`: Items: minLength: `1`.

