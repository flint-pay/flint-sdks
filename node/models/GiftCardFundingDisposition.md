[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDisposition

A merchant decision to honor gift card value after its funding payment lost a dispute.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `disposition` | Required | string | Values: `"honor_value"`. |
| `dispute_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The whole disputed payment amount, which can include consideration for other purchases. It is separate from the original gift card consideration and honored face value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `dispute_amount_money`: [field definitions](../models/GiftCardFundingDisposition.md#giftcardfundingdispositiondispute_amount_money). |
| `dispute_id` | Required | string |  |
| `gift_card_funding_disposition_id` | Required | string |  |
| `gift_card_ids` | Required | Array of string |  |
| `honored_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `honored_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `idempotency_key` | Required | string |  |
| `original_gift_card_consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `original_gift_card_consideration_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `payment_intent_id` | Required | string |  |
| `preserved_reserved_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `preserved_reserved_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `reason_message` | Required | string |  |

### GiftCardFundingDisposition.dispute_amount_money

The whole disputed payment amount, which can include consideration for other purchases. It is separate from the original gift card consideration and honored face value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardFundingDisposition.honored_value_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardFundingDisposition.original_gift_card_consideration_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardFundingDisposition.preserved_reserved_value_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

