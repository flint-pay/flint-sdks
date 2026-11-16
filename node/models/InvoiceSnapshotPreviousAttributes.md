[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSnapshotPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `buyer_note` | Optional | string or null | The backing order's buyer note, captured on the invoice. `buyer_note`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesbuyer_note). |
| `buyer_tax_identity` | Optional | [TaxIdentityPreviousAttributes](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributes) or null | Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. |
| `charges` | Optional | Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes) or null | The backing order's service charges, frozen at issue. `charges`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescharges). |
| `customer_display_name` | Optional | string or null | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. `customer_display_name`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescustomer_display_name). |
| `customer_email` | Optional | string or null | Buyer email captured on the invoice. `customer_email`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescustomer_email). |
| `discounts` | Optional | Array of [InvoiceDiscountPreviousAttributes](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributes) or null | The discounts applied to the backing order, frozen at issue. `discounts`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesdiscounts). |
| `internal_note` | Optional | string or null | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. `internal_note`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesinternal_note). |
| `line_items` | Optional | Array of [InvoiceLineItemPreviousAttributes](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributes) or null | The billed line items, frozen at issue. A draft previews the backing order's lines. `line_items`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items). |
| `merchant_display_name` | Optional | string or null | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. `merchant_display_name`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesmerchant_display_name). |
| `requested_tip` | Optional | [InvoiceTipPreviousAttributes](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributes) or null | The tip requested on the backing order, frozen at issue. Absent when none was requested. |
| `seller_tax_identity` | Optional | [TaxIdentityPreviousAttributes](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributes) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. |
| `tax_breakdowns` | Optional | Array of [TaxBreakdownPreviousAttributes](../models/TaxBreakdownPreviousAttributes.md#taxbreakdownpreviousattributes) or null | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns). |
| `tax_currency_conversions` | Optional | Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes) or null | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_currency_conversions). |
| `tax_exemption` | Optional | [OrderTaxExemptionPreviousAttributes](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributes) or null | Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. |
| `tax_reverse_charge` | Optional | [TaxReverseChargePreviousAttributes](../models/TaxReverseChargePreviousAttributes.md#taxreversechargepreviousattributes) or null | The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. |

### InvoiceSnapshotPreviousAttributes.buyer_note

### InvoiceSnapshotPreviousAttributes.buyer_note variant 1

anyOf variant 1: The backing order's buyer note, captured on the invoice..

- Value shape: string. The backing order's buyer note, captured on the invoice. 

### InvoiceSnapshotPreviousAttributes.buyer_note variant 2

anyOf variant 2.

- Value shape: null. The backing order's buyer note, captured on the invoice. 

### InvoiceSnapshotPreviousAttributes.charges

### InvoiceSnapshotPreviousAttributes.charges variant 1

anyOf variant 1: The backing order's service charges, frozen at issue..

- Value shape: Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes). The backing order's service charges, frozen at issue. 

### InvoiceSnapshotPreviousAttributes.charges variant 2

anyOf variant 2.

- Value shape: null. The backing order's service charges, frozen at issue. 

### InvoiceSnapshotPreviousAttributes.customer_display_name

### InvoiceSnapshotPreviousAttributes.customer_display_name variant 1

anyOf variant 1: Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it..

- Value shape: string. Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. 

### InvoiceSnapshotPreviousAttributes.customer_display_name variant 2

anyOf variant 2.

- Value shape: null. Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. 

### InvoiceSnapshotPreviousAttributes.customer_email

### InvoiceSnapshotPreviousAttributes.customer_email variant 1

anyOf variant 1: Buyer email captured on the invoice..

- Value shape: string. Buyer email captured on the invoice. 

### InvoiceSnapshotPreviousAttributes.customer_email variant 2

anyOf variant 2.

- Value shape: null. Buyer email captured on the invoice. 

### InvoiceSnapshotPreviousAttributes.discounts

### InvoiceSnapshotPreviousAttributes.discounts variant 1

anyOf variant 1: The discounts applied to the backing order, frozen at issue..

- Value shape: Array of [InvoiceDiscountPreviousAttributes](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributes). The discounts applied to the backing order, frozen at issue. 

### InvoiceSnapshotPreviousAttributes.discounts variant 2

anyOf variant 2.

- Value shape: null. The discounts applied to the backing order, frozen at issue. 

### InvoiceSnapshotPreviousAttributes.internal_note

### InvoiceSnapshotPreviousAttributes.internal_note variant 1

anyOf variant 1: The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out..

- Value shape: string. The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. 

### InvoiceSnapshotPreviousAttributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. 

### InvoiceSnapshotPreviousAttributes.line_items

### InvoiceSnapshotPreviousAttributes.line_items variant 1

anyOf variant 1: The billed line items, frozen at issue. A draft previews the backing order's lines..

- Value shape: Array of [InvoiceLineItemPreviousAttributes](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributes). The billed line items, frozen at issue. A draft previews the backing order's lines. 

### InvoiceSnapshotPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The billed line items, frozen at issue. A draft previews the backing order's lines. 

### InvoiceSnapshotPreviousAttributes.merchant_display_name

### InvoiceSnapshotPreviousAttributes.merchant_display_name variant 1

anyOf variant 1: Your business name as shown on the invoice. A draft shows your current name; issue freezes it..

- Value shape: string. Your business name as shown on the invoice. A draft shows your current name; issue freezes it. 

### InvoiceSnapshotPreviousAttributes.merchant_display_name variant 2

anyOf variant 2.

- Value shape: null. Your business name as shown on the invoice. A draft shows your current name; issue freezes it. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1

anyOf variant 1: Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows..

- Value shape: (Array of ([TaxBreakdownPreviousAttributes](../models/TaxBreakdownPreviousAttributes.md#taxbreakdownpreviousattributes) and ([TaxBreakdownPercentagePreviousAttributes](../models/TaxBreakdownPercentagePreviousAttributes.md#taxbreakdownpercentagepreviousattributes) or [TaxBreakdownFlatAmountPreviousAttributes](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributes)))). Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. 

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions variant 1

anyOf variant 1: VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures..

- Value shape: Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes). VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. 

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions variant 2

anyOf variant 2.

- Value shape: null. VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. 

