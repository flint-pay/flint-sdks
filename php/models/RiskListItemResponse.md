[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemResponse

A response containing `RiskListItem` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskListItem](../models/RiskListItem.md#risklistitem) | Resource, collection, or operation result returned by this request. One value in a payment risk list. `data`: [field definitions](../models/RiskListItemResponse.md#risklistitemresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskListItemResponse.data

Resource, collection, or operation result returned by this request. One value in a payment risk list.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. `created_by`: [declared alternatives](../models/RiskListItemResponse.md#risklistitemresponsedatacreated_by). |
| `risk_list_id` | Required | string | ID of the risk list this value is on. Example: `"rl_01KEZF7C00VYSERA4QCTJP147A"`. |
| `risk_list_item_id` | Required | string | Unique identifier for this risk list item, prefixed `rli_`. Example: `"rli_01KEZF7C006BND1CJYPAJW9JWE"`. |
| `value` | Required | string | The value as stored after item_type normalization, which is what payments are matched against. |

### RiskListItemResponse.data.created_by

The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode.

Field definitions: [shared fields](PaymentReviewResponse.md#paymentreviewresponsedataclosed_by).

### RiskListItemResponse.data.created_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### RiskListItemResponse.data.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. 

### RiskListItemResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

