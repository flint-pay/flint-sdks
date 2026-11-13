[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceSnapshot

Invoice details captured at issue. Buyer views omit merchant exemption evidence references.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `billing_address`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address). |
| `buyer_note` | Optional | string | The backing order's buyer note, captured on the invoice. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Buyer tax identity captured on the invoice. Null when none was recorded. |
| `charges` | Optional | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) | The backing order's service charges, frozen at issue. `charges[]`: [field definitions](../models/OrderResponse.md#orderresponsedatacharges). |
| `customer_display_name` | Optional | string | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `customer_email` | Optional | string | Buyer email captured on the invoice. |
| `discounts` | Optional | Array of [InvoiceDiscount](../models/InvoiceDiscount.md#invoicediscount) | The discounts applied to the backing order, frozen at issue. `discounts[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts). |
| `internal_note` | Optional | string | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. |
| `line_items` | Optional | Array of [InvoiceLineItem](../models/InvoiceLineItem.md#invoicelineitem) | The billed line items, frozen at issue. A draft previews the backing order's lines. `line_items[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items). |
| `merchant_display_name` | Optional | string | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice's pricing totals. Its total_money is the invoice total that the top-level total_money reports. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `requested_tip` | Optional | [InvoiceTip](../models/InvoiceTip.md#invoicetip) | The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Seller tax identity captured on the invoice. Null when none was recorded. |
| `tax_breakdowns` | Required | Array of (object and Alternative shapes (see declared variants)) | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns). |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |
| `tax_exemption` | Optional | [BuyerOrderTaxExemption](../models/BuyerOrderTaxExemption.md#buyerordertaxexemption) | Exemption assessment captured on this invoice, without the merchant's evidence reference. Omitted when no assessment was recorded, including on older invoices. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. The recorded exemption assessment, without merchant evidence references. `tax_exemption`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshottax_exemption). |
| `tax_reverse_charge` | Optional | [TaxReverseCharge](../models/TaxReverseCharge.md#taxreversecharge) or null | The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. |

### BuyerInvoiceSnapshot.billing_address

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.billing_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address).

### BuyerInvoiceSnapshot.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### BuyerInvoiceSnapshot.discounts[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.discounts[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts).

### BuyerInvoiceSnapshot.line_items[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.line_items[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items).

### BuyerInvoiceSnapshot.tax_breakdowns[]

Declared alternatives: [OrderResponse.data.tax.tax_breakdowns[]](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns).

### BuyerInvoiceSnapshot.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### BuyerInvoiceSnapshot.tax_exemption

Field definitions: [BuyerInvoiceResponse.data.snapshot.tax_exemption](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshottax_exemption).

