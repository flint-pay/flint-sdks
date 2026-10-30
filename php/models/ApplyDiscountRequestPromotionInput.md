[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyDiscountRequestPromotionInput

The `Promotion` variant of `ApplyDiscountRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `manual` | Optional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Required | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Identifies the promotion to apply, by promotion code or by promotion ID. |

