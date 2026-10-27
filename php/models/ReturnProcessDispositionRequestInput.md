[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessDispositionRequestInput

What was done with a returned item, such as restocked as sellable or sent for repair, supplied when processing an existing return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Map values: minLength: `1`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

