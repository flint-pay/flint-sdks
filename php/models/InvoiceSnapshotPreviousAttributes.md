[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSnapshotPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. `billing_address`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesbilling_address). |
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
| `tax_breakdowns` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns). |
| `tax_currency_conversions` | Optional | Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes) or null | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_currency_conversions). |
| `tax_exemption` | Optional | [OrderTaxExemptionPreviousAttributes](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributes) or null | Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. `tax_exemption`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption). |
| `tax_reverse_charge` | Optional | [TaxReverseChargePreviousAttributes](../models/TaxReverseChargePreviousAttributes.md#taxreversechargepreviousattributes) or null | The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. |

### InvoiceSnapshotPreviousAttributes.billing_address

Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### InvoiceSnapshotPreviousAttributes.billing_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### InvoiceSnapshotPreviousAttributes.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. 

### InvoiceSnapshotPreviousAttributes.billing_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### InvoiceSnapshotPreviousAttributes.billing_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### InvoiceSnapshotPreviousAttributes.billing_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### InvoiceSnapshotPreviousAttributes.billing_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### InvoiceSnapshotPreviousAttributes.billing_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### InvoiceSnapshotPreviousAttributes.billing_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

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

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Resolved charge amount after charge discounts and before additive tax. |
| `calculation_basis` | Optional | string or null | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. `calculation_basis`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributescalculation_basis). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `description` | Optional | string or null | Optional description of the charge. `description`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesdescription). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. `fulfillment_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescharges-variant-1-fields-1fulfillment_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | What the buyer sees for this charge at checkout and on receipts. `name`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesname). |
| `order_charge_id` | Optional | string or null | Unique identifier for this order charge, prefixed `och_`. `order_charge_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescharges-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | Order that owns this charge, including the source order of an invoice snapshot. `order_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescharges-variant-1-fields-1order_id). |
| `percent` | Optional | number or null | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. `percent`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributespercent). |
| `refundable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining amount for an ID-only charge refund target. Accounts for original-tender capacity, reversals, accepted refunds, and whole-value edit reservations, including credit transferred to added lines and pending or retryable failed edit refunds. Zero when exhausted. Refund eligibility is checked again on submission. |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount already refunded. |
| `tax` | Optional | [OrderCalculatedChargeTaxPreviousAttributes](../models/OrderCalculatedChargeTaxPreviousAttributes.md#ordercalculatedchargetaxpreviousattributes) or null | How tax applies to this charge. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for the charge, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Applied charge amount plus tax that is not already included in the price. |
| `type` | Optional | string or null | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). `type`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.calculation_basis

Declared alternatives: [OrderChargePreviousAttributes.calculation_basis](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributescalculation_basis).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.description

Declared alternatives: [OrderChargePreviousAttributes.description](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesdescription).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.fulfillment_id

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment..

- Value shape: string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. 

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.name

Declared alternatives: [OrderChargePreviousAttributes.name](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesname).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.order_charge_id

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: Unique identifier for this order charge, prefixed `och_`..

- Value shape: string. Unique identifier for this order charge, prefixed `och_`. Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order charge, prefixed `och_`. 

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.order_id

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns this charge, including the source order of an invoice snapshot..

- Value shape: string. Order that owns this charge, including the source order of an invoice snapshot. Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this charge, including the source order of an invoice snapshot. 

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.percent

Declared alternatives: [OrderChargePreviousAttributes.percent](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributespercent).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.type

Declared alternatives: [OrderChargePreviousAttributes.type](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributestype).

### InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

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

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. `discount_class`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesdiscount_class). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. `promotion_code`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion that supplied this discount. Absent for a manual discount. `promotion_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesdiscounts-variant-1-fields-1promotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource). |

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.customer_facing_name

Declared alternatives: [InvoiceDiscountPreviousAttributes.customer_facing_name](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name).

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.discount_class

Declared alternatives: [InvoiceDiscountPreviousAttributes.discount_class](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesdiscount_class).

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.promotion_code

Declared alternatives: [InvoiceDiscountPreviousAttributes.promotion_code](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributespromotion_code).

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.promotion_id

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.promotion_id variant 1

anyOf variant 1: ID of the promotion that supplied this discount. Absent for a manual discount..

- Value shape: string. ID of the promotion that supplied this discount. Absent for a manual discount. ID of the promotion that supplied this discount. Absent for a manual discount. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion that supplied this discount. Absent for a manual discount. 

### InvoiceSnapshotPreviousAttributes.discounts variant 1.[] fields 1.source

Declared alternatives: [InvoiceDiscountPreviousAttributes.source](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource).

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

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | unit_price_money × quantity. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | The items inside a bundle line, as billed. `bundle_components`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | The catalog bundle the line was sold from. Absent unless type is bundle. `bundle_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | The catalog categories of the line's item when it was billed. `categories`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributescategories). |
| `description` | Optional | string or null | Line item description as billed. `description`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | This line's share of order and line-item discounts. |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Line item image. |
| `invoice_line_item_id` | Optional | string or null | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. `invoice_line_item_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items-variant-1-fields-1invoice_line_item_id). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the line's modifiers. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | The line's modifiers, as billed. `modifiers`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Line item name as billed. `name`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns the backing order_line_item_id. `order_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. `order_line_item_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `product_id` | Optional | string or null | Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items-variant-1-fields-1product_id). |
| `product_type` | Optional | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | The product options chosen for the line, as billed. `selected_options`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit as billed. `sku`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit, before modifiers and discounts. |
| `variant_id` | Optional | string or null | The catalog variant the line was sold from. Absent unless type is variant. `variant_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributesline_items-variant-1-fields-1variant_id). |

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.bundle_components

Declared alternatives: [InvoiceLineItemPreviousAttributes.bundle_components](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesbundle_components).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: The catalog bundle the line was sold from. Absent unless type is bundle..

- Value shape: string. The catalog bundle the line was sold from. Absent unless type is bundle. The catalog bundle the line was sold from. Absent unless type is bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle the line was sold from. Absent unless type is bundle. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.categories

Declared alternatives: [InvoiceLineItemPreviousAttributes.categories](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributescategories).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.description

Declared alternatives: [InvoiceLineItemPreviousAttributes.description](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesdescription).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.invoice_line_item_id

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.invoice_line_item_id variant 1

anyOf variant 1: Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID..

- Value shape: string. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [InvoiceLineItemPreviousAttributes.modifiers](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesmodifiers).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [InvoiceLineItemPreviousAttributes.name](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesname).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.order_id

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns the backing order_line_item_id..

- Value shape: string. Order that owns the backing order_line_item_id. Order that owns the backing order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the backing order_line_item_id. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID..

- Value shape: string. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.product_id

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.product_type

Declared alternatives: [InvoiceLineItemPreviousAttributes.product_type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.selected_options

Declared alternatives: [InvoiceLineItemPreviousAttributes.selected_options](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesselected_options).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.sku

Declared alternatives: [InvoiceLineItemPreviousAttributes.sku](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributessku).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.type

Declared alternatives: [InvoiceLineItemPreviousAttributes.type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype).

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.variant_id

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: The catalog variant the line was sold from. Absent unless type is variant..

- Value shape: string. The catalog variant the line was sold from. Absent unless type is variant. The catalog variant the line was sold from. Absent unless type is variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### InvoiceSnapshotPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant the line was sold from. Absent unless type is variant. 

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

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | (string or null) | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`. `calculation_type`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1-variant-1calculation_type), [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1-variant-2calculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed tax amount. Present on `flat_amount` rows. |
| `fulfillment_choice_group_id` | Optional | string or null | ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. `fulfillment_choice_group_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1fulfillment_choice_group_id). |
| `jurisdiction` | Optional | [TaxJurisdictionPreviousAttributes](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributes) or null | The taxing authority this row's tax is owed to. |
| `location_id` | Optional | string or null | ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. `location_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1location_id). |
| `order_charge_id` | Optional | string or null | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. `order_charge_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. `order_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. `order_line_item_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1order_line_item_id). |
| `percent` | Optional | number or null | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. `percent`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1percent). |
| `price_mode` | Optional | string or null | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1price_mode). |
| `tax_breakdown_id` | Optional | string or null | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. `tax_breakdown_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1tax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. |
| `tax_type` | Optional | string or null | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. `tax_type`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1tax_type). |
| `taxability_reason` | Optional | string or null | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. `taxability_reason`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1taxability_reason). |
| `taxable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. |

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 1: `calculation_type` = `"percentage"`

anyOf TaxBreakdownPercentagePreviousAttributes.

- Constraints for `calculation_type`: Values: `"percentage"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 2: `calculation_type` = `"flat_amount"`

anyOf TaxBreakdownFlatAmountPreviousAttributes.

- Constraints for `calculation_type`: Values: `"flat_amount"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type variant 1

anyOf group 1 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type variant 3

anyOf group 2 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.fulfillment_choice_group_id

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.fulfillment_choice_group_id variant 1

anyOf variant 1: ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row..

- Value shape: string. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.fulfillment_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.location_id

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.location_id variant 1

anyOf variant 1: ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row..

- Value shape: string. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_charge_id

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax..

- Value shape: string. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_id

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference..

- Value shape: string. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_line_item_id

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax..

- Value shape: string. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.percent

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.percent variant 1

anyOf variant 1: Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows..

- Value shape: number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.percent variant 2

anyOf variant 2.

- Value shape: null. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.price_mode

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.price_mode variant 1

anyOf variant 1: Whether the price this row taxes already includes the tax..

- Value shape: string. Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the price this row taxes already includes the tax. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.tax_breakdown_id

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.tax_breakdown_id variant 1

anyOf variant 1: ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax..

- Value shape: string. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.tax_type

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.tax_type variant 1

anyOf variant 1: The kind of tax this row collects..

- Value shape: string. The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.tax_type variant 2

anyOf variant 2.

- Value shape: null. The kind of tax this row collects. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.taxability_reason

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.taxability_reason variant 1

anyOf variant 1: Why the row's tax is what it is..

- Value shape: string. Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1.taxability_reason variant 2

anyOf variant 2.

- Value shape: null. Why the row's tax is what it is. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type variant 1

anyOf group 1 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`.

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type variant 3

anyOf group 2 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"flat_amount"`.

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions variant 1

anyOf variant 1: VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures..

- Value shape: Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes). VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. 

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions variant 2

anyOf variant 2.

- Value shape: null. VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. 

### InvoiceSnapshotPreviousAttributes.tax_currency_conversions variant 1.[] fields 1

Field definitions: [CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions-variant-1-fields-1).

### InvoiceSnapshotPreviousAttributes.tax_exemption

Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Conditional | string or null | Certificate number recorded at assessment. Omitted when none was recorded. `certificate_number`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescertificate_number). |
| `coverage` | Conditional | object and Alternative shapes (see declared variants) or null | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. `coverage`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage). |
| `customer_id` | Conditional | string or null | ID of the customer the exemption was assessed from, when one was linked. `customer_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1customer_id). |
| `customer_tax_exemption_id` | Conditional | string or null | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. `customer_tax_exemption_id`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1customer_tax_exemption_id). |
| `end_date` | Conditional | string or null | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. `end_date`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1end_date). |
| `evidence_reference` | Conditional | string or null | Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. `evidence_reference`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesevidence_reference). |
| `reason` | Conditional | string or null | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). `reason`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesreason). |
| `source` | Conditional | string or null | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. `source`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributessource). |
| `start_date` | Conditional | string or null | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. `start_date`: [declared alternatives](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1start_date). |
| `tax_exempt` | Conditional | boolean or null | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. `tax_exempt`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributestax_exempt). |

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1

anyOf OrderTaxExemptionPreviousAttributes.

- Optional: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 2

anyOf variant 2.

- Undeclared: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.
- Value shape: null. Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.certificate_number

Declared alternatives: [OrderTaxExemptionPreviousAttributes.certificate_number](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescertificate_number).

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.coverage

Declared alternatives: [OrderTaxExemptionPreviousAttributes.coverage](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage).

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_id

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_id variant 1

anyOf variant 1: ID of the customer the exemption was assessed from, when one was linked..

- Value shape: string. ID of the customer the exemption was assessed from, when one was linked. ID of the customer the exemption was assessed from, when one was linked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the exemption was assessed from, when one was linked. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_tax_exemption_id

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_tax_exemption_id variant 1

anyOf variant 1: Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots..

- Value shape: string. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_tax_exemption_id variant 2

anyOf variant 2.

- Value shape: null. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.end_date

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.end_date variant 1

anyOf variant 1: Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded..

- Value shape: string. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.end_date variant 2

anyOf variant 2.

- Value shape: null. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.evidence_reference

Declared alternatives: [OrderTaxExemptionPreviousAttributes.evidence_reference](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesevidence_reference).

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.reason

Declared alternatives: [OrderTaxExemptionPreviousAttributes.reason](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesreason).

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.source

Declared alternatives: [OrderTaxExemptionPreviousAttributes.source](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributessource).

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.start_date

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.start_date variant 1

anyOf variant 1: First day of the selected record's exemption, inclusive. Omitted when no date was recorded..

- Value shape: string. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.start_date variant 2

anyOf variant 2.

- Value shape: null. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. 

### InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.tax_exempt

Declared alternatives: [OrderTaxExemptionPreviousAttributes.tax_exempt](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributestax_exempt).

