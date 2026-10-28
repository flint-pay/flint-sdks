[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemJurisdiction](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemJurisdiction.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemjurisdiction) | The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemjurisdiction-fields-1). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem.jurisdiction fields 1

The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput).

