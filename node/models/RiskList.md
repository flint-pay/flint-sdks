[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskList

A collection of values used in payment risk rules.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alias` | Required | string | Name rules use to refer to this list, such as flagged_emails: a lowercase letter, then up to 127 lowercase letters, digits, or underscores. Set at creation and never changed. |
| `archived_at` | Required | string or null | RFC3339 timestamp. `null` when the resource isn't archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this list. Null when Flint created it, as for Flint's default lists. The reference may name an API key in the other mode. |
| `item_count` | Required | integer | Number of values on the list now. Format: `int64`. |
| `item_type` | Required | string | Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. Values: `"card_fingerprint"`, `"card_bin"`, `"email"`, `"email_domain"`, `"ip_address"`, `"country"`, `"customer_id"`, `"string"`, `"case_sensitive_string"`. |
| `name` | Required | string | Display name of the list. |
| `origin` | Required | string | Whether Flint manages the list or the merchant created it. Values: `"system_default"`, `"merchant"`. |
| `risk_list_id` | Required | string | Unique identifier for this risk list, prefixed `rl_`. Example: `"rl_01KEZF7C00VYSERA4QCTJP147A"`. |
| `status` | Required | string | Whether the list can still be used. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Version of persisted list configuration and item-count changes. External observations do not advance this counter. Format: `uint64`. minimum: `1`. |

