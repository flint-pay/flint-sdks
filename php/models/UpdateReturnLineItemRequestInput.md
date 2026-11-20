[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnLineItemRequestInput

The request body for: Update return line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Send null to clear it. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string or null | Send null to clear it. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `null`. |
| `requested_variant` | Optional | string or null | ID of one variant of the same product for an exchange. Omit to preserve it or send null to clear it. Clear the variant when changing the requested outcome away from exchange. minLength: `1`. |
| `return_reason_id` | Optional | string | ID of the return reason for this line. The reason must be active. minLength: `1`. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. |

