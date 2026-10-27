[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnReplacementLineItemInputBundleInput

The `bundle` variant of `BuyerReturnReplacementLineItemInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `type` | Required | string | The catalog source of the replacement merchandise. Values: `"bundle"`. |
| `variant_id` | Optional | string | minLength: `1`. |

