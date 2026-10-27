<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?InvoicePaymentAttempt $active_payment_attempt
 * @property-read ?list<InvoiceDocumentRow> $balance_rows
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read list<string> $cc_emails
 * @property-read ?string $closed_at
 * @property-read string $collection_block_status
 * @property-read ?string $collection_mode
 * @property-read ?string $created_at
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $currently_due_money
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read ?string $due_at
 * @property-read string|null $footer
 * @property-read string $invoice_id
 * @property-read ?string $invoice_number
 * @property-read bool $is_overdue
 * @property-read ?list<InvoiceDocumentRow> $issue_rows
 * @property-read ?string $issued_at
 * @property-read MoneyValue $late_fee_money
 * @property-read list<BuyerInvoiceLateFee> $late_fees
 * @property-read string|null $memo
 * @property-read ?Image $merchant_icon
 * @property-read string $merchant_id
 * @property-read ?Image $merchant_logo
 * @property-read ?CheckoutMerchantSupport $merchant_support
 * @property-read BuyerExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read MoneyValue $outstanding_money
 * @property-read ?string $paid_at
 * @property-read MoneyValue $paid_money
 * @property-read ?InvoicePaymentOptionCostComparison $payment_option_cost_comparison
 * @property-read ?list<string> $payment_options
 * @property-read ?InvoicePaymentTermsSnapshot $payment_terms_snapshot
 * @property-read string|null $po_number
 * @property-read string|null $recipient_email
 * @property-read string|null $reference
 * @property-read string $refund_status
 * @property-read MoneyValue $refunded_money
 * @property-read ?Address $remit_to_address
 * @property-read list<InvoiceScheduleEntry> $schedule_entries
 * @property-read string|null $scheduled_issue_at
 * @property-read string|null $service_date
 * @property-read ?bool $show_flint_mark
 * @property-read ?InvoiceSnapshot $snapshot
 * @property-read string $status
 * @property-read string|null $subscription_id
 * @property-read ?CheckoutTheme $theme
 * @property-read ?string $timezone
 * @property-read MoneyValue $total_money
 * @property-read ?string $updated_at
 * @property-read string $version
 * @property-read ?string $viewed_at
 * @property-read ?string $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class BuyerInvoice extends Model {
    /** @param array{'active_payment_attempt'?: mixed, 'balance_rows'?: list<mixed>, 'buyer_actions': list<mixed>, 'cc_emails': list<string>, 'closed_at'?: string, 'collection_block_status': string, 'collection_mode'?: string, 'created_at'?: string, 'credit_money': mixed, 'currently_due_money': mixed, 'customer'?: mixed, 'customer_id'?: string, 'due_at'?: string, 'footer': string|null, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'issue_rows'?: list<mixed>, 'issued_at'?: string, 'late_fee_money': mixed, 'late_fees': list<mixed>, 'memo': string|null, 'merchant_icon'?: mixed, 'merchant_id': string, 'merchant_logo'?: mixed, 'merchant_support'?: mixed, 'order'?: mixed, 'order_id': string, 'outstanding_money': mixed, 'paid_at'?: string, 'paid_money': mixed, 'payment_option_cost_comparison'?: mixed, 'payment_options'?: list<string>, 'payment_terms_snapshot'?: mixed, 'po_number': string|null, 'recipient_email': string|null, 'reference': string|null, 'refund_status': string, 'refunded_money': mixed, 'remit_to_address'?: mixed, 'schedule_entries': list<mixed>, 'scheduled_issue_at': string|null, 'service_date': string|null, 'show_flint_mark'?: bool, 'snapshot'?: mixed, 'status': string, 'subscription_id': string|null, 'theme'?: mixed, 'timezone'?: string, 'total_money': mixed, 'updated_at'?: string, 'version': string, 'viewed_at'?: string, 'voided_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoice')); }
    /** Shape $ (Value): {@see InvoicePaymentAttempt}. The payment attempt in progress for this invoice, such as a bank debit still processing. Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for an invoice.
     * @return ?InvoicePaymentAttempt
     */
    public function getActivePaymentAttempt(): ?InvoicePaymentAttempt { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Shape $ (Value): Array of {@see InvoiceDocumentRow}. What changed after the invoice was issued, in display order, such as late fees, payments, credit notes, and write-offs. When present, rows where `is_informational` is `false` sum to `outstanding_money`. The opening `total` row contributes to the sum; the closing `amount_due` row is informational and states it. `[]` when nothing changed or the invoice is void. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Shape $[] (Value): {@see InvoiceDocumentRow}. One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with its amount.
     * @return ?list<InvoiceDocumentRow>
     */
    public function getBalanceRows(): ?array { return $this->get('balance_rows'); }
    public function hasBalanceRows(): bool { return $this->has('balance_rows'); }
    /** Shape $ (Value): Array of {@see BuyerAction}. What the buyer can do with the invoice: pay. pay is available when a checkout session can take a payment now, and then required, due by due_at or by the due date of the installment it collects. Shape $[] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerAction>
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** Shape $ (Value): Array of string. Additional recipients copied on the invoice email and every reminder. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** Shape $ (Value): string. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: date-time.
     * @return ?string
     */
    public function getClosedAt(): ?string { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked, collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none", "inventory_blocked", "resolved".
     * @return string
     */
    public function getCollectionBlockStatus(): string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** Shape $ (Value): string. How the invoice is collected: buyer_initiated, automatic, or external. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Value enum: "buyer_initiated", "automatic", "external".
     * @return ?string
     */
    public function getCollectionMode(): ?string { return $this->get('collection_mode'); }
    public function hasCollectionMode(): bool { return $this->has('collection_mode'); }
    /** Shape $ (Value): string. When the invoice was created. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MoneyValue}. The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due time has arrived and that still has a balance, or 0 when there is none. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCurrentlyDueMoney(): MoneyValue { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with expand=customer. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string. Customer billed by this invoice. Absent when the invoice has no customer.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. When payment is due. With payment terms, issue sets it from issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
     * @return string|null
     */
    public function getFooter(): string|null { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** Shape $ (Value): string. Flint invoice ID.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently.
     * @return ?string
     */
    public function getInvoiceNumber(): ?string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * @return bool
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** Shape $ (Value): Array of {@see InvoiceDocumentRow}. The rows of the invoice's totals as issued, in display order. Rows where `is_informational` is `false` sum to `snapshot.pricing_amounts.total_money`. A closing `total` row is informational and states that sum. Show the rows in order without merging or summing them. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Shape $[] (Value): {@see InvoiceDocumentRow}. One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with its amount.
     * @return ?list<InvoiceDocumentRow>
     */
    public function getIssueRows(): ?array { return $this->get('issue_rows'); }
    public function hasIssueRows(): bool { return $this->has('issue_rows'); }
    /** Shape $ (Value): string. When the invoice was issued. Absent on a draft. Format: date-time.
     * @return ?string
     */
    public function getIssuedAt(): ?string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getLateFeeMoney(): MoneyValue { return $this->get('late_fee_money'); }
    public function hasLateFeeMoney(): bool { return $this->has('late_fee_money'); }
    /** Shape $ (Value): Array of {@see BuyerInvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. Shape $[] (Value): {@see BuyerInvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     * @return list<BuyerInvoiceLateFee>
     */
    public function getLateFees(): array { return $this->get('late_fees'); }
    public function hasLateFees(): bool { return $this->has('late_fees'); }
    /** Shape $ (Value): string or null. Message to the customer, shown on the invoice. It cannot change after issue.
     * @return string|null
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Shape $ (Value): {@see Image}. The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getMerchantIcon(): ?Image { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** Shape $ (Value): string. Merchant that owns this invoice.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see Image}. The merchant's logo. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getMerchantLogo(): ?Image { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** Shape $ (Value): {@see CheckoutMerchantSupport}. How the buyer can reach the merchant: the support email, phone, and URL the merchant set. Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return ?CheckoutMerchantSupport
     */
    public function getMerchantSupport(): ?CheckoutMerchantSupport { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** Shape $ (Value): {@see BuyerExpandedOrderSummary} or null. Summary of the backing order. Returned only with expand=order. Shape $.anyOf[1] (Value): {@see BuyerExpandedOrderSummary}. An order summary in a buyer response, with order status and totals. Recorded buyer contact is omitted. Shape $.anyOf[2] (Value): null.
     * @return BuyerExpandedOrderSummary|null
     */
    public function getOrder(): BuyerExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. The order this invoice bills. Every invoice has one; quick pay creates it.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see MoneyValue}. What is still owed. On an open or partially_paid invoice it is total_money + late_fee_money - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and void invoices. Refunds don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): string. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: date-time.
     * @return ?string
     */
    public function getPaidAt(): ?string { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): {@see InvoicePaymentOptionCostComparison}. A payment option that costs the merchant less to accept for this invoice, with the estimated savings. Present when the invoice's payment policy turns on `show_cost_comparison` and Flint can compare the options. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Compares two payment options on an invoice and shows the estimated savings from the lower-cost option.
     * @return ?InvoicePaymentOptionCostComparison
     */
    public function getPaymentOptionCostComparison(): ?InvoicePaymentOptionCostComparison { return $this->get('payment_option_cost_comparison'); }
    public function hasPaymentOptionCostComparison(): bool { return $this->has('payment_option_cost_comparison'); }
    /** Shape $ (Value): Array of string. Ways the buyer can pay this invoice online, leaving out any option whose limit the amount exceeds. `[]` when it can't be paid online. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return ?list<string>
     */
    public function getPaymentOptions(): ?array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Shape $ (Value): {@see InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.
     * @return ?InvoicePaymentTermsSnapshot
     */
    public function getPaymentTermsSnapshot(): ?InvoicePaymentTermsSnapshot { return $this->get('payment_terms_snapshot'); }
    public function hasPaymentTermsSnapshot(): bool { return $this->has('payment_terms_snapshot'); }
    /** Shape $ (Value): string or null. The buyer's purchase order number.
     * @return string|null
     */
    public function getPoNumber(): string|null { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** Shape $ (Value): string or null. Where invoice email goes. Email delivery requires it at issue.
     * @return string|null
     */
    public function getRecipientEmail(): string|null { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Shape $ (Value): string or null. Customer-facing reference shown on the invoice and PDF. It cannot change after issue.
     * @return string|null
     */
    public function getReference(): string|null { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** Shape $ (Value): string. How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): {@see MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getRemitToAddress(): ?Address { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Shape $ (Value): Array of {@see InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. Shape $[] (Value): {@see InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.
     * @return list<InvoiceScheduleEntry>
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** Shape $ (Value): string or null. When Flint will issue and deliver this draft. Cleared when the draft is issued or voided, or when you send null. Format: date-time.
     * @return string|null
     */
    public function getScheduledIssueAt(): string|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** Shape $ (Value): string or null. The calendar service date shown on the invoice, in YYYY-MM-DD format. Format: date.
     * @return string|null
     */
    public function getServiceDate(): string|null { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
    /** Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it.
     * @return ?bool
     */
    public function getShowFlintMark(): ?bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
    /** Shape $ (Value): {@see InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.
     * @return ?InvoiceSnapshot
     */
    public function getSnapshot(): ?InvoiceSnapshot { return $this->get('snapshot'); }
    public function hasSnapshot(): bool { return $this->has('snapshot'); }
    /** Shape $ (Value): string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. void and uncollectible are final. Refunds change refund_status without reopening the balance. Value enum: "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. Subscription of the backing order, copied when the draft is created. Null for orders without a subscription.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): {@see CheckoutTheme}. The theme Flint's hosted invoice page renders with, from your branding settings. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return ?CheckoutTheme
     */
    public function getTheme(): ?CheckoutTheme { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Shape $ (Value): string. IANA time zone for the invoice's calendar dates, such as due dates from payment terms and reminder and late fee day counts. At issue, an invoice without one takes the invoice settings timezone.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): {@see MoneyValue}. What the invoice bills, equal to snapshot.pricing_amounts.total_money and fixed at issue. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Current invoice version. Send this as expected_version when updating the draft. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: date-time.
     * @return ?string
     */
    public function getViewedAt(): ?string { return $this->get('viewed_at'); }
    public function hasViewedAt(): bool { return $this->has('viewed_at'); }
    /** Shape $ (Value): string. When the invoice was voided. Format: date-time.
     * @return ?string
     */
    public function getVoidedAt(): ?string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
