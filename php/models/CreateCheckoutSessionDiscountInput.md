[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionDiscountInput

A promotion to apply to the order Flint creates for a checkout session.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion` | Required | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | The promotion selected by ID or code, subject to your account promotion settings. Identifies the promotion to apply, by promotion code or by promotion ID. |

