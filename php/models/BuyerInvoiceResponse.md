[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceResponse

A response containing `BuyerInvoice` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice) | Resource, collection, or operation result returned by this request. A bill issued to a customer. `data`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerInvoiceResponse.data

Resource, collection, or operation result returned by this request. A bill issued to a customer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | The payment attempt in progress for this invoice, such as a bank debit still processing. Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for an invoice. `active_payment_attempt`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedataactive_payment_attempt). |
| `balance_rows` | Optional | Array of [InvoiceDocumentRow](../models/InvoiceDocumentRow.md#invoicedocumentrow) | What changed after the invoice was issued, in display order, such as late fees, payments, credit notes, and write-offs. When present, rows where `is_informational` is `false` sum to `outstanding_money`. The opening `total` row contributes to the sum; the closing `amount_due` row is informational and states it. `[]` when nothing changed or the invoice is voided. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. `balance_rows[]`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatabalance_rows). |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the invoice: pay. pay is available when a checkout session can take a payment now, and then required. Its due_at deadline is the end of the invoice or installment due_date in the invoice timezone (UTC when absent). `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
| `cc_emails` | Required | Array of string | Additional recipients copied on the invoice email and every reminder. |
| `closed_at` | Optional | string | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `collection_block_status` | Required | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `collection_mode` | Optional | string | How the invoice is collected: buyer_initiated, automatic, or external. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `created_at` | Required | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currently_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything overdue, add the outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_id` | Optional | string | Customer billed by this invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `footer` | Required | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. |
| `invoice_id` | Required | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. |
| `issue_rows` | Optional | Array of [InvoiceDocumentRow](../models/InvoiceDocumentRow.md#invoicedocumentrow) | The rows of the invoice's totals as issued, in display order. Rows where `is_informational` is `false` sum to `snapshot.pricing_amounts.total_money`. A closing `total` row is informational and states that sum. Show the rows in order without merging or summing them. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. `issue_rows[]`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatabalance_rows). |
| `issued_at` | Optional | string | When the invoice was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `late_fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `late_fees` | Required | Array of [BuyerInvoiceLateFee](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefee) | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. `late_fees[]`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatalate_fees). |
| `memo` | Required | string or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its URL, size, and alt text. |
| `merchant_id` | Required | string | Merchant that owns this invoice. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | The merchant's logo. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its URL, size, and alt text. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | How the buyer can reach the merchant: the support email, phone, and URL the merchant set. Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support contact. Each field is omitted when the merchant has not set it. `merchant_support`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatamerchant_support). |
| `order_id` | Required | string | The order this invoice bills. Every invoice has one; quick pay creates it. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed. On an open or partially_paid invoice it is total_money + late_fee_money - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices. Refunds and dispute losses don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_option_cost_comparison` | Optional | [InvoicePaymentOptionCostComparison](../models/InvoicePaymentOptionCostComparison.md#invoicepaymentoptioncostcomparison) | A payment option that costs the merchant less to accept for this invoice, with the estimated savings. Present when the invoice's payment policy turns on `show_cost_comparison` and Flint can compare the options. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Compares two payment options on an invoice and shows the estimated savings from the lower-cost option. |
| `payment_options` | Optional | Array of string | Ways the buyer can pay this invoice online, leaving out any option whose limit the amount exceeds. `[]` when it can't be paid online. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshot](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshot) | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy. `payment_terms_snapshot`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot). |
| `po_number` | Required | string or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `recipient_email` | Required | string or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. |
| `reference` | Required | string or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. |
| `refund_status` | Required | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `remit_to_address`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address). |
| `schedule_entries` | Required | Array of [InvoiceScheduleEntry](../models/InvoiceScheduleEntry.md#invoicescheduleentry) | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. `schedule_entries[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries). |
| `scheduled_issue_at` | Required | string or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_date` | Required | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. Example: `"2026-08-02"`. |
| `show_flint_mark` | Optional | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. |
| `snapshot` | Optional | [BuyerInvoiceSnapshot](../models/BuyerInvoiceSnapshot.md#buyerinvoicesnapshot) | The billing content of the invoice: line items, discounts, charges, tip, tax, and totals, frozen at issue. Invoice details captured at issue. Buyer views omit merchant exemption evidence references. `snapshot`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshot). |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `subscription_id` | Required | string or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | The theme Flint's hosted invoice page renders with, from your branding settings. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `timezone` | Optional | string | IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the invoice bills, equal to snapshot.pricing_amounts.total_money and fixed at issue. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current invoice version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `viewed_at` | Optional | string | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `voided_at` | Optional | string | When the invoice was voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerInvoiceResponse.data.active_payment_attempt

The payment attempt in progress for this invoice, such as a bank debit still processing. Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for an invoice.

Field definitions: [shared fields](InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedata).

### BuyerInvoiceResponse.data.active_payment_attempt.last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

### BuyerInvoiceResponse.data.balance_rows[]

One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with its amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | The row's signed amount. Informational rows do not contribute to the sum. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_note_number` | Optional | string | Number of the credit note a credit note row names. |
| `is_informational` | Required | boolean | Whether the row is shown for information and left out of the sum, such as tax already included in prices, tax not applied, or money refunded to the buyer. A closing `total` or `amount_due` row is informational and states the sum. An opening or sole `total` row contributes to the sum. |
| `kind` | Required | string | What the row shows. Values: [14 declared values](#buyerinvoiceresponsedatabalance_rows-kind-values). |
| `name` | Optional | string | Discount, charge, or tax jurisdiction name. |
| `occurred_at` | Optional | string | When the late fee was assessed or waived, or the credit note issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `percent` | Optional | number | Rate of a percent-based charge or a tax row, in percent units. multipleOf: `0.0001`. |
| `promotion_code` | Optional | string | Promotion code of a discount row. |
| `tax_type` | Optional | string | The kind of tax on a tax row. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Why a tax row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. |
| `taxable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Taxable amount of a tax row. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### BuyerInvoiceResponse.data.balance_rows[] kind values

- `"subtotal"`
- `"discount"`
- `"charge"`
- `"tax"`
- `"tip"`
- `"total"`
- `"late_fee"`
- `"late_fee_waived"`
- `"payments"`
- `"credit_note"`
- `"credits"`
- `"written_off"`
- `"amount_due"`
- `"refunded"`

### BuyerInvoiceResponse.data.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerInvoiceResponse.data.issue_rows[]

Field definitions: [BuyerInvoiceResponse.data.balance_rows[]](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatabalance_rows).

### BuyerInvoiceResponse.data.late_fees[]

A charge assessed because an invoice payment is overdue.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_at` | Required | string | When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `base_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_id` | Required | string | Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_late_fee_id` | Required | string | Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `late_fee_policy` | Required | object and Alternative shapes (see declared variants) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. `late_fee_policy`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_feeslate_fee_policy). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `waived_at` | Optional | string | When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `waived_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerInvoiceResponse.data.late_fees[].late_fee_policy

Declared alternatives: [CollectInvoiceResponse.data.invoice.late_fees[].late_fee_policy](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_feeslate_fee_policy).

### BuyerInvoiceResponse.data.merchant_support

How the buyer can reach the merchant: the support email, phone, and URL the merchant set. Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support contact. Each field is omitted when the merchant has not set it.

Field definitions: [shared fields](CheckoutMerchantSupportInput.md#checkoutmerchantsupportinput).

### BuyerInvoiceResponse.data.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### BuyerInvoiceResponse.data.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### BuyerInvoiceResponse.data.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### BuyerInvoiceResponse.data.snapshot

The billing content of the invoice: line items, discounts, charges, tip, tax, and totals, frozen at issue. Invoice details captured at issue. Buyer views omit merchant exemption evidence references.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `billing_address`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address). |
| `buyer_note` | Optional | string | The backing order's buyer note, captured on the invoice. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Buyer tax identity captured on the invoice. Null when none was recorded. `buyer_tax_identity`: [declared alternatives](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshotbuyer_tax_identity). |
| `charges` | Optional | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) | The backing order's service charges, frozen at issue. `charges[]`: [field definitions](../models/OrderResponse.md#orderresponsedatacharges). |
| `customer_display_name` | Optional | string | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `customer_email` | Optional | string | Buyer email captured on the invoice. |
| `discounts` | Optional | Array of [InvoiceDiscount](../models/InvoiceDiscount.md#invoicediscount) | The discounts applied to the backing order, frozen at issue. `discounts[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts). |
| `internal_note` | Optional | string | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. |
| `line_items` | Optional | Array of [InvoiceLineItem](../models/InvoiceLineItem.md#invoicelineitem) | The billed line items, frozen at issue. A draft previews the backing order's lines. `line_items[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items). |
| `merchant_display_name` | Optional | string | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice's pricing totals. Its total_money is the invoice total that the top-level total_money reports. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `requested_tip` | Optional | [InvoiceTip](../models/InvoiceTip.md#invoicetip) | The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Seller tax identity captured on the invoice. Null when none was recorded. `seller_tax_identity`: [declared alternatives](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshotseller_tax_identity). |
| `tax_breakdowns` | Required | Array of (object and Alternative shapes (see declared variants)) | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns). |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |
| `tax_exemption` | Optional | [BuyerOrderTaxExemption](../models/BuyerOrderTaxExemption.md#buyerordertaxexemption) | Exemption assessment captured on this invoice, without the merchant's evidence reference. Omitted when no assessment was recorded, including on older invoices. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. The recorded exemption assessment, without merchant evidence references. `tax_exemption`: [field definitions](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshottax_exemption). |
| `tax_reverse_charge` | Optional | [TaxReverseCharge](../models/TaxReverseCharge.md#taxreversecharge) or null | The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. `tax_reverse_charge`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_reverse_charge). |

### BuyerInvoiceResponse.data.snapshot.billing_address

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.billing_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address).

### BuyerInvoiceResponse.data.snapshot.buyer_tax_identity

Buyer tax identity captured on the invoice. Null when none was recorded.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity).

### BuyerInvoiceResponse.data.snapshot.buyer_tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### BuyerInvoiceResponse.data.snapshot.buyer_tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Buyer tax identity captured on the invoice. Null when none was recorded. 

### BuyerInvoiceResponse.data.snapshot.buyer_tax_identity variant 1.registered_address

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address).

### BuyerInvoiceResponse.data.snapshot.buyer_tax_identity variant 1.tax_ids[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids).

### BuyerInvoiceResponse.data.snapshot.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### BuyerInvoiceResponse.data.snapshot.discounts[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.discounts[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts).

### BuyerInvoiceResponse.data.snapshot.line_items[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.line_items[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items).

### BuyerInvoiceResponse.data.snapshot.seller_tax_identity

Seller tax identity captured on the invoice. Null when none was recorded.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity).

### BuyerInvoiceResponse.data.snapshot.seller_tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### BuyerInvoiceResponse.data.snapshot.seller_tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Seller tax identity captured on the invoice. Null when none was recorded. 

### BuyerInvoiceResponse.data.snapshot.seller_tax_identity variant 1.registered_address

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address).

### BuyerInvoiceResponse.data.snapshot.seller_tax_identity variant 1.tax_ids[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids).

### BuyerInvoiceResponse.data.snapshot.tax_breakdowns[]

Declared alternatives: [OrderResponse.data.tax.tax_breakdowns[]](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns).

### BuyerInvoiceResponse.data.snapshot.tax_currency_conversions[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions).

### BuyerInvoiceResponse.data.snapshot.tax_exemption

Exemption assessment captured on this invoice, without the merchant's evidence reference. Omitted when no assessment was recorded, including on older invoices. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. The recorded exemption assessment, without merchant evidence references.

Field definitions: [shared fields](BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1taxexemption).

### BuyerInvoiceResponse.data.snapshot.tax_exemption.coverage

Declared alternatives: [OrderResponse.data.tax.exemption.coverage](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage).

### BuyerInvoiceResponse.data.snapshot.tax_reverse_charge

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.tax_reverse_charge](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_reverse_charge).

### BuyerInvoiceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

