[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSnapshot

A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `billing_address`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address). |
| `buyer_note` | Optional | string | The backing order's buyer note, captured on the invoice. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. |
| `charges` | Optional | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) | The backing order's service charges, frozen at issue. `charges[]`: [field definitions](../models/OrderResponse.md#orderresponsedatacharges). |
| `customer_display_name` | Optional | string | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `customer_email` | Optional | string | Buyer email captured on the invoice. |
| `discounts` | Optional | Array of [InvoiceDiscount](../models/InvoiceDiscount.md#invoicediscount) | The discounts applied to the backing order, frozen at issue. `discounts[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts). |
| `internal_note` | Optional | string | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. |
| `line_items` | Optional | Array of [InvoiceLineItem](../models/InvoiceLineItem.md#invoicelineitem) | The billed line items, frozen at issue. A draft previews the backing order's lines. `line_items[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items). |
| `merchant_display_name` | Optional | string | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice's pricing totals. Its total_money is the invoice total that the top-level total_money reports. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `requested_tip` | Optional | [InvoiceTip](../models/InvoiceTip.md#invoicetip) | The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. |
| `tax_breakdowns` | Required | Array of (object and Alternative shapes (see declared variants)) | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns[]`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_breakdowns). |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |

### InvoiceSnapshot.billing_address

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.billing_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address).

### InvoiceSnapshot.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### InvoiceSnapshot.discounts[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.discounts[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts).

### InvoiceSnapshot.line_items[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.line_items[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items).

### InvoiceSnapshot.tax_breakdowns[]

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.tax_breakdowns[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_breakdowns).

### InvoiceSnapshot.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

