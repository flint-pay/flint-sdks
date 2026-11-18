[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreviewRequest

The request body for: Create discount preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount` | Optional | object | Promotion to preview. Manual discounts are not supported. `discount`: [field definitions](../models/DiscountPreviewRequest.md#discountpreviewrequestdiscount). |
| `order_id` | Required | string | The order to evaluate. Checkout session credentials can use only their own order. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |

### DiscountPreviewRequest.discount

Promotion to preview. Manual discounts are not supported.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion` | Required | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | The promotion to evaluate for the order. Identifies the promotion to apply, by promotion code or by promotion ID. |

