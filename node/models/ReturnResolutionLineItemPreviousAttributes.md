[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the resolution covers. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesreturn_resolution_id). |
| `return_resolution_line_item_id` | Optional | string or null | ID of an existing resolution line to keep. Leave out to add a new line. `return_resolution_line_item_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_resolution_line_item_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of the returned units this line covers. `returned_total_money`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturned_total_money). |

### ReturnResolutionLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnResolutionLineItemPreviousAttributes.release_timing

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing).

### ReturnResolutionLineItemPreviousAttributes.return_id

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1.[] fields 1.return_id](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_id).

### ReturnResolutionLineItemPreviousAttributes.return_line_item_id

### ReturnResolutionLineItemPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the resolution covers..

- Value shape: string. ID of the Return line the resolution covers. ID of the Return line the resolution covers. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionLineItemPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the resolution covers. 

### ReturnResolutionLineItemPreviousAttributes.return_resolution_id

Declared alternatives: [ReturnReplacementLineItemPreviousAttributes.return_resolution_id](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesreturn_resolution_id).

### ReturnResolutionLineItemPreviousAttributes.return_resolution_line_item_id

### ReturnResolutionLineItemPreviousAttributes.return_resolution_line_item_id variant 1

anyOf variant 1: ID of an existing resolution line to keep. Leave out to add a new line..

- Value shape: string. ID of an existing resolution line to keep. Leave out to add a new line. ID of an existing resolution line to keep. Leave out to add a new line. Example: `"retresli_01KEZF7C00CR5NCDXRBP9W14CB"`. 

### ReturnResolutionLineItemPreviousAttributes.return_resolution_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of an existing resolution line to keep. Leave out to add a new line. 

### ReturnResolutionLineItemPreviousAttributes.returned_total_money

Value of the returned units this line covers.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionLineItemPreviousAttributes.returned_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionLineItemPreviousAttributes.returned_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value of the returned units this line covers. 

### ReturnResolutionLineItemPreviousAttributes.returned_total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnResolutionLineItemPreviousAttributes.returned_total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

