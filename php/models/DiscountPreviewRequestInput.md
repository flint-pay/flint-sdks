[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreviewRequestInput

The request body for: Create discount preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount` | Optional | object | Promotion to preview. Manual discounts are not supported. `discount`: [field definitions](../models/DiscountPreviewRequestInput.md#discountpreviewrequestinputdiscount). |
| `order_id` | Required | string | The order to evaluate. Checkout session credentials can use only their own order. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |

### DiscountPreviewRequestInput.discount

Promotion to preview. Manual discounts are not supported.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion` | Required | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | The promotion to evaluate for the order. Identifies the promotion to apply, by promotion code or by promotion ID. |

