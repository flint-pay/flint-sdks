[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSnapshotInput

A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `buyer_note` | Optional | string | The backing order's buyer note, captured on the invoice. |
| `buyer_tax_identity` | Required | [TaxIdentityInput](../models/TaxIdentityInput.md#taxidentityinput) or null | Buyer tax identity captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `charges` | Optional | Array of [OrderChargeInput](../models/OrderChargeInput.md#orderchargeinput) | The backing order's service charges, frozen at issue. |
| `customer_display_name` | Optional | string | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `customer_email` | Optional | string | Buyer email captured on the invoice. |
| `discounts` | Optional | Array of [InvoiceDiscountInput](../models/InvoiceDiscountInput.md#invoicediscountinput) | The discounts applied to the backing order, frozen at issue. |
| `internal_note` | Optional | string | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. |
| `line_items` | Optional | Array of [InvoiceLineItemInput](../models/InvoiceLineItemInput.md#invoicelineiteminput) | The billed line items, frozen at issue. A draft previews the backing order's lines. |
| `merchant_display_name` | Optional | string | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. |
| `pricing_amounts` | Required | [PricingAmountsInput](../models/PricingAmountsInput.md#pricingamountsinput) | The invoice's pricing totals. Its total_money is the invoice total that the top-level total_money reports. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `requested_tip` | Optional | [InvoiceTipInput](../models/InvoiceTipInput.md#invoicetipinput) | The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description. |
| `seller_tax_identity` | Required | [TaxIdentityInput](../models/TaxIdentityInput.md#taxidentityinput) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. |
| `tax_breakdowns` | Required | Array of [TaxBreakdownInput](../models/TaxBreakdownInput.md#taxbreakdowninput) | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. |

