[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemsItemCustomVariableResolvedUnitPriceMoney

Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists.

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Response model.

Fields, types, descriptions and enum values: [PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney).

