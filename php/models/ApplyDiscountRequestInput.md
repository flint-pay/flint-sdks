[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyDiscountRequestInput

The request body for: Apply discount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `manual` | Conditional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Conditional | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Identifies the promotion to apply, by promotion code or by promotion ID. |

### ApplyDiscountRequestInput variant 1

oneOf variant 1: The `Promotion` variant of `ApplyDiscountRequest`..

- Condition: not (at least one(present(`manual`))).
- Required: `promotion`.
- Optional: `manual`.

### ApplyDiscountRequestInput variant 2

oneOf variant 2: The `Manual` variant of `ApplyDiscountRequest`..

- Condition: not (at least one(present(`promotion`))).
- Required: `manual`.
- Optional: `promotion`.

