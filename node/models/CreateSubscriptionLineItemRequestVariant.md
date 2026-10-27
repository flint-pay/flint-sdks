[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionLineItemRequestVariant

The `variant` variant of `CreateSubscriptionLineItemRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `type` | Required | string | The catalog source of the new line: variant or bundle. Values: `"variant"`. |
| `variant_id` | Required | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

