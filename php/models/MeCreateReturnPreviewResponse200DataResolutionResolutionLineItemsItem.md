[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem

A return line included in a resolution, with its quantity and returned total.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `release_timing` | Optional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `return_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `return_resolution_line_item_id` | Required | string |  |
| `returned_total_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItemReturnedTotalMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItemReturnedTotalMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionlineitemsitemreturnedtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

