[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItemFlatMoney](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletaxcalculationcomponentsitemflatmoney) | Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItemJurisdiction](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItemJurisdiction.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletaxcalculationcomponentsitemjurisdiction) | The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletaxcalculationcomponentsitemjurisdiction-fields-1). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem.jurisdiction fields 1

The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput).

