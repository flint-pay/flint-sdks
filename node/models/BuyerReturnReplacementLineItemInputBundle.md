[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnReplacementLineItemInputBundle

The `bundle` variant of `BuyerReturnReplacementLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `type` | Required | string | The catalog source of the replacement merchandise. Values: `"bundle"`. |
| `variant_id` | Optional | string | minLength: `1`. |

