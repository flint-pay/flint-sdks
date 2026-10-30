[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionLineItemRequestInput

The request body for: Update subscription line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

