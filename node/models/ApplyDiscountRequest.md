[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyDiscountRequest

The request body for: Apply discount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `manual` | Conditional | [ManualDiscountRequest](../models/ManualDiscountRequest.md#manualdiscountrequest) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Conditional | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | Identifies the promotion to apply, by promotion code or by promotion ID. |

### ApplyDiscountRequest variant 1

oneOf variant 1: The `Promotion` variant of `ApplyDiscountRequest`..

- Condition: not (at least one(present(`manual`))).
- Required: `promotion`.
- Optional: `manual`.

### ApplyDiscountRequest variant 2

oneOf variant 2: The `Manual` variant of `ApplyDiscountRequest`..

- Condition: not (at least one(present(`promotion`))).
- Required: `manual`.
- Optional: `promotion`.

