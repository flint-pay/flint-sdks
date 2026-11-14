[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem

A return line included in a resolution, with its quantity and returned total.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `release_timing` | Optional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `return_id` | Required | string | Return that owns return_line_item_id. |
| `return_line_item_id` | Required | string | ID of the Return line the resolution covers. |
| `return_resolution_id` | Required | string | ID of the resolution the line belongs to. |
| `return_resolution_line_item_id` | Required | string | ID of an existing resolution line to keep. Leave out to add a new line. |
| `returned_total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItemReturnedTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItemReturnedTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionlineitemsitemreturnedtotalmoney) | Value of the returned units this line covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

