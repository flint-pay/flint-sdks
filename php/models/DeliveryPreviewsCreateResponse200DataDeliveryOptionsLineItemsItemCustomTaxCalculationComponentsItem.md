[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemFlatMoney](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemFlatMoney.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtaxcalculationcomponentsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemJurisdiction](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemJurisdiction.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtaxcalculationcomponentsitemjurisdiction) | The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtaxcalculationcomponentsitemjurisdiction-fields-1). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem.jurisdiction fields 1

The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput).

