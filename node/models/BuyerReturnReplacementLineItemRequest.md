[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnReplacementLineItemRequest

A catalog variant or bundle and quantity the buyer requests as a replacement in a Return resolution preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `variant_id` | Conditional | string | minLength: `1`. |

### BuyerReturnReplacementLineItemRequest variant 1

oneOf variant 1.

- Condition: not (present(`bundle_id`)).
- Required: `variant_id`.
- Optional: `bundle_id`.

### BuyerReturnReplacementLineItemRequest variant 2

oneOf variant 2.

- Condition: not (present(`variant_id`)).
- Required: `bundle_id`.
- Optional: `variant_id`.

