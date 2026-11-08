[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListResourceResponse

A response containing `RiskList` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskList](../models/RiskList.md#risklist) | Resource, collection, or operation result returned by this request. A collection of values used in payment risk rules. `data`: [field definitions](../models/RiskListResourceResponse.md#risklistresourceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskListResourceResponse.data

Resource, collection, or operation result returned by this request. A collection of values used in payment risk rules.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alias` | Required | string | Name rules use to refer to this list, such as flagged_emails: a lowercase letter, then up to 127 lowercase letters, digits, or underscores. Set at creation and never changed. |
| `archived_at` | Required | string or null | RFC3339 timestamp. `null` when the resource isn't archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this list. Null when Flint created it, as for Flint's default lists. The reference may name an API key in the other mode. `created_by`: [declared alternatives](../models/RiskListResourceResponse.md#risklistresourceresponsedatacreated_by). |
| `item_count` | Required | integer | Number of values on the list now. Format: `int64`. |
| `item_type` | Required | string | Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. Values: `"card_fingerprint"`, `"card_bin"`, `"email"`, `"email_domain"`, `"ip_address"`, `"country"`, `"customer_id"`, `"string"`, `"case_sensitive_string"`. |
| `name` | Required | string | Display name of the list. |
| `origin` | Required | string | Whether Flint manages the list or the merchant created it. Values: `"system_default"`, `"merchant"`. |
| `risk_list_id` | Required | string | Unique identifier for this risk list, prefixed `rl_`. Example: `"rl_01KEZF7C00VYSERA4QCTJP147A"`. |
| `status` | Required | string | Whether the list can still be used. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Version of persisted list configuration and item-count changes. External observations do not advance this counter. Format: `uint64`. minimum: `1`. |

### RiskListResourceResponse.data.created_by

The credential that created this list. Null when Flint created it, as for Flint's default lists. The reference may name an API key in the other mode.

Field definitions: [shared fields](PaymentReviewResponse.md#paymentreviewresponsedataclosed_by).

### RiskListResourceResponse.data.created_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### RiskListResourceResponse.data.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that created this list. Null when Flint created it, as for Flint's default lists. The reference may name an API key in the other mode. 

### RiskListResourceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

