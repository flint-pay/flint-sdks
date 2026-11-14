[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoice

A bill issued to a customer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | The payment attempt in progress for this invoice, such as a bank debit still processing. Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for an invoice. |
| `balance_rows` | Optional | Array of [InvoiceDocumentRow](../models/InvoiceDocumentRow.md#invoicedocumentrow) | What changed after the invoice was issued, in display order, such as late fees, payments, credit notes, and write-offs. When present, rows where `is_informational` is `false` sum to `outstanding_money`. The opening `total` row contributes to the sum; the closing `amount_due` row is informational and states it. `[]` when nothing changed or the invoice is voided. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the invoice: pay. pay is available when a checkout session can take a payment now, and then required. Its due_at deadline is the end of the invoice or installment due_date in the invoice timezone (UTC when absent). |
| `cc_emails` | Required | Array of string | Additional recipients copied on the invoice email and every reminder. |
| `closed_at` | Optional | string | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `collection_block_status` | Required | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `collection_mode` | Optional | string | How the invoice is collected: buyer_initiated, automatic, or external. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `created_at` | Required | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicecredit_money). |
| `currently_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything overdue, add the outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `currently_due_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicecurrently_due_money). |
| `customer_id` | Optional | string | Customer billed by this invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `footer` | Required | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. |
| `invoice_id` | Required | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. |
| `issue_rows` | Optional | Array of [InvoiceDocumentRow](../models/InvoiceDocumentRow.md#invoicedocumentrow) | The rows of the invoice's totals as issued, in display order. Rows where `is_informational` is `false` sum to `pricing_amounts.total_money`. A closing `total` row is informational and states that sum. Show the rows in order without merging or summing them. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. |
| `issued_at` | Optional | string | When the invoice was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `late_fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `late_fee_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicelate_fee_money). |
| `late_fees` | Required | Array of [BuyerInvoiceLateFee](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefee) | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. |
| `memo` | Required | string or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its URL, size, and alt text. |
| `merchant_id` | Required | string | Merchant that owns this invoice. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | The merchant's logo. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its URL, size, and alt text. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | How the buyer can reach the merchant: the support email, phone, and URL the merchant set. Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support contact. Each field is omitted when the merchant has not set it. |
| `order_id` | Required | string | The order this invoice bills. Every invoice has one; quick pay creates it. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed. On an open or partially_paid invoice it is pricing_amounts.total_money + late_fee_money - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices. Refunds and dispute losses don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoiceoutstanding_money). |
| `paid_at` | Optional | string | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicepaid_money). |
| `payment_option_cost_comparison` | Optional | [InvoicePaymentOptionCostComparison](../models/InvoicePaymentOptionCostComparison.md#invoicepaymentoptioncostcomparison) | A payment option that costs the merchant less to accept for this invoice, with the estimated savings. Present when the invoice's payment policy turns on `show_cost_comparison` and Flint can compare the options. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Compares two payment options on an invoice and shows the estimated savings from the lower-cost option. |
| `payment_options` | Optional | Array of string | Ways the buyer can pay this invoice online, leaving out any option whose limit the amount exceeds. `[]` when it can't be paid online. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshot](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshot) | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy. |
| `po_number` | Required | string or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in late_fee_money. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `recipient_email` | Required | string or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. |
| `reference` | Required | string or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. |
| `refund_status` | Required | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicerefunded_money). |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `schedule_entries` | Required | Array of [InvoiceScheduleEntry](../models/InvoiceScheduleEntry.md#invoicescheduleentry) | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. |
| `scheduled_issue_at` | Required | string or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_date` | Required | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. Example: `"2026-08-02"`. |
| `show_flint_mark` | Optional | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. |
| `snapshot` | Optional | [BuyerInvoiceSnapshot](../models/BuyerInvoiceSnapshot.md#buyerinvoicesnapshot) | The billing content of the invoice: line items, discounts, charges, tip, and tax, frozen at issue. Invoice details captured at issue. Buyer views omit merchant exemption evidence references. |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `subscription_id` | Required | string or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | The theme Flint's hosted invoice page renders with, from your branding settings. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `timezone` | Optional | string | IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current invoice version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `viewed_at` | Optional | string | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `voided_at` | Optional | string | When the invoice was voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerInvoice.credit_money

Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoice.currently_due_money

The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything overdue, add the outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoice.late_fee_money

Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoice.outstanding_money

What is still owed. On an open or partially_paid invoice it is pricing_amounts.total_money + late_fee_money - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices. Refunds and dispute losses don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoice.paid_money

Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoice.refunded_money

Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

