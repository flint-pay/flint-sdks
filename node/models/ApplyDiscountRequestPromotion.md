[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyDiscountRequestPromotion

The `Promotion` variant of `ApplyDiscountRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `manual` | Optional | [ManualDiscountRequest](../models/ManualDiscountRequest.md#manualdiscountrequest) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Required | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | Identifies the promotion to apply, by promotion code or by promotion ID. |

