[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedMerchantEventDataObjectLineItemsItemCustomVariableResolvedPriceRange

Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold.

The lowest and highest unit prices across a product's variants.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_unit_price_money` | Required | [PaymentLinkCreatedMerchantEventDataObjectLineItemsItemCustomVariableResolvedPriceRangeMaxUnitPriceMoney](../models/PaymentLinkCreatedMerchantEventDataObjectLineItemsItemCustomVariableResolvedPriceRangeMaxUnitPriceMoney.md#paymentlinkcreatedmerchanteventdataobjectlineitemsitemcustomvariableresolvedpricerangemaxunitpricemoney) | Highest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_unit_price_money` | Required | [PaymentLinkCreatedMerchantEventDataObjectLineItemsItemCustomVariableResolvedPriceRangeMinUnitPriceMoney](../models/PaymentLinkCreatedMerchantEventDataObjectLineItemsItemCustomVariableResolvedPriceRangeMinUnitPriceMoney.md#paymentlinkcreatedmerchanteventdataobjectlineitemsitemcustomvariableresolvedpricerangeminunitpricemoney) | Lowest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

