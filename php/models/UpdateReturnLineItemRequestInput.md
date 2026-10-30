[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnLineItemRequestInput

The request body for: Update return line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string or null | Send null to clear it. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `null`. |
| `return_reason_id` | Optional | string | minLength: `1`. |

