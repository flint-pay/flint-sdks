<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass $active_payment_attempt
 * @property-read list<InvoiceDocumentRowInput|array<array-key, mixed>|\stdClass> $balance_rows
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read list<string> $cc_emails
 * @property-read string|\DateTimeInterface $closed_at
 * @property-read string $collection_block_status
 * @property-read string $collection_mode
 * @property-read string|\DateTimeInterface $created_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $currently_due_money
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string|null $footer
 * @property-read string $invoice_id
 * @property-read string $invoice_number
 * @property-read bool $is_overdue
 * @property-read list<InvoiceDocumentRowInput|array<array-key, mixed>|\stdClass> $issue_rows
 * @property-read string|\DateTimeInterface $issued_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $late_fee_money
 * @property-read list<BuyerInvoiceLateFeeInput|array<array-key, mixed>|\stdClass> $late_fees
 * @property-read string|null $memo
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_icon
 * @property-read string $merchant_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_logo
 * @property-read CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass $merchant_support
 * @property-read array{'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read string|\DateTimeInterface $paid_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read InvoicePaymentOptionCostComparisonInput|array<array-key, mixed>|\stdClass $payment_option_cost_comparison
 * @property-read list<string> $payment_options
 * @property-read InvoicePaymentTermsSnapshotInput|array<array-key, mixed>|\stdClass $payment_terms_snapshot
 * @property-read string|null $po_number
 * @property-read string|null $recipient_email
 * @property-read string|null $reference
 * @property-read string $refund_status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $remit_to_address
 * @property-read list<InvoiceScheduleEntryInput|array<array-key, mixed>|\stdClass> $schedule_entries
 * @property-read string|\DateTimeInterface|null $scheduled_issue_at
 * @property-read string|null $service_date
 * @property-read bool $show_flint_mark
 * @property-read InvoiceSnapshotInput|array<array-key, mixed>|\stdClass $snapshot
 * @property-read string $status
 * @property-read string|null $subscription_id
 * @property-read CheckoutThemeInput|array<array-key, mixed>|\stdClass $theme
 * @property-read string $timezone
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read string|\DateTimeInterface $viewed_at
 * @property-read string|\DateTimeInterface $voided_at
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerInvoiceInput extends Model {
    /** @param array{'active_payment_attempt'?: InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass, 'balance_rows'?: list<InvoiceDocumentRowInput|array<array-key, mixed>|\stdClass>, 'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'cc_emails': list<string>, 'closed_at'?: string|\DateTimeInterface, 'collection_block_status': string, 'collection_mode'?: string, 'created_at'?: string|\DateTimeInterface, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currently_due_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'due_at'?: string|\DateTimeInterface, 'footer': string|null, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'issue_rows'?: list<InvoiceDocumentRowInput|array<array-key, mixed>|\stdClass>, 'issued_at'?: string|\DateTimeInterface, 'late_fee_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'late_fees': list<BuyerInvoiceLateFeeInput|array<array-key, mixed>|\stdClass>, 'memo': string|null, 'merchant_icon'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'merchant_logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_support'?: CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass, 'order'?: array{'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_at'?: string|\DateTimeInterface, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_option_cost_comparison'?: InvoicePaymentOptionCostComparisonInput|array<array-key, mixed>|\stdClass, 'payment_options'?: list<string>, 'payment_terms_snapshot'?: InvoicePaymentTermsSnapshotInput|array<array-key, mixed>|\stdClass, 'po_number': string|null, 'recipient_email': string|null, 'reference': string|null, 'refund_status': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remit_to_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'schedule_entries': list<InvoiceScheduleEntryInput|array<array-key, mixed>|\stdClass>, 'scheduled_issue_at': string|\DateTimeInterface|null, 'service_date': string|null, 'show_flint_mark'?: bool, 'snapshot'?: InvoiceSnapshotInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_id': string|null, 'theme'?: CheckoutThemeInput|array<array-key, mixed>|\stdClass, 'timezone'?: string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'viewed_at'?: string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoiceInput')); }
    /** Shape $ (Value): {@see InvoicePaymentAttemptInput}. The payment attempt in progress for this invoice, such as a bank debit still processing. Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When active_payment_attempt is omitted; use hasActivePaymentAttempt() or valueOrDefault().
     */
    public function getActivePaymentAttempt(): mixed { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Shape $ (Value): Array of {@see InvoiceDocumentRowInput}. What changed after the invoice was issued, in display order, such as late fees, payments, credit notes, and write-offs. When present, rows where `is_informational` is `false` sum to `outstanding_money`. The opening `total` row contributes to the sum; the closing `amount_due` row is informational and states it. `[]` when nothing changed or the invoice is void. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Shape $[] (Value): {@see InvoiceDocumentRowInput}. One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with its amount.
     * @return list<InvoiceDocumentRowInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When balance_rows is omitted; use hasBalanceRows() or valueOrDefault().
     */
    public function getBalanceRows(): array { return $this->get('balance_rows'); }
    public function hasBalanceRows(): bool { return $this->has('balance_rows'); }
    /** Shape $ (Value): Array of {@see BuyerActionInput}. What the buyer can do with the invoice: pay. pay is available when a checkout session can take a payment now, and then required, due by due_at or by the due date of the installment it collects. Shape $[] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** Shape $ (Value): Array of string. Additional recipients copied on the invoice email and every reminder. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** Shape $ (Value): string. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|\DateTimeInterface { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked, collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none", "inventory_blocked", "resolved".
     * @return string
     * @throws SdkError When collection_block_status is omitted; use hasCollectionBlockStatus() or valueOrDefault().
     */
    public function getCollectionBlockStatus(): string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** Shape $ (Value): string. How the invoice is collected: buyer_initiated, automatic, or external. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Value enum: "buyer_initiated", "automatic", "external".
     * @return string
     * @throws SdkError When collection_mode is omitted; use hasCollectionMode() or valueOrDefault().
     */
    public function getCollectionMode(): string { return $this->get('collection_mode'); }
    public function hasCollectionMode(): bool { return $this->has('collection_mode'); }
    /** Shape $ (Value): string. When the invoice was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due time has arrived and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything past due, add the outstanding_money of the entries whose status is due or overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When currently_due_money is omitted; use hasCurrentlyDueMoney() or valueOrDefault().
     */
    public function getCurrentlyDueMoney(): mixed { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummaryInput} or null. Summary of the billed customer. Returned only with expand=customer. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string. Customer billed by this invoice. Absent when the invoice has no customer.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. When payment is due. With payment terms, issue sets it from issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string|null { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** Shape $ (Value): string. Flint invoice ID.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently.
     * @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * @return bool
     * @throws SdkError When is_overdue is omitted; use hasIsOverdue() or valueOrDefault().
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** Shape $ (Value): Array of {@see InvoiceDocumentRowInput}. The rows of the invoice's totals as issued, in display order. Rows where `is_informational` is `false` sum to `snapshot.pricing_amounts.total_money`. A closing `total` row is informational and states that sum. Show the rows in order without merging or summing them. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Shape $[] (Value): {@see InvoiceDocumentRowInput}. One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with its amount.
     * @return list<InvoiceDocumentRowInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When issue_rows is omitted; use hasIssueRows() or valueOrDefault().
     */
    public function getIssueRows(): array { return $this->get('issue_rows'); }
    public function hasIssueRows(): bool { return $this->has('issue_rows'); }
    /** Shape $ (Value): string. When the invoice was issued. Absent on a draft. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string|\DateTimeInterface { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_money is omitted; use hasLateFeeMoney() or valueOrDefault().
     */
    public function getLateFeeMoney(): mixed { return $this->get('late_fee_money'); }
    public function hasLateFeeMoney(): bool { return $this->has('late_fee_money'); }
    /** Shape $ (Value): Array of {@see BuyerInvoiceLateFeeInput}. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. Shape $[] (Value): {@see BuyerInvoiceLateFeeInput}. A charge assessed because an invoice payment is overdue.
     * @return list<BuyerInvoiceLateFeeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When late_fees is omitted; use hasLateFees() or valueOrDefault().
     */
    public function getLateFees(): array { return $this->get('late_fees'); }
    public function hasLateFees(): bool { return $this->has('late_fees'); }
    /** Shape $ (Value): string or null. Message to the customer, printed on the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Shape $ (Value): {@see ImageInput}. The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): mixed { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** Shape $ (Value): string. Merchant that owns this invoice.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see ImageInput}. The merchant's logo. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_logo is omitted; use hasMerchantLogo() or valueOrDefault().
     */
    public function getMerchantLogo(): mixed { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** Shape $ (Value): {@see CheckoutMerchantSupportInput}. How the buyer can reach the merchant: the support email, phone, and URL the merchant set. Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_support is omitted; use hasMerchantSupport() or valueOrDefault().
     */
    public function getMerchantSupport(): mixed { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** Shape $ (Value): {@see BuyerExpandedOrderSummaryInput} or null. Summary of the backing order. Returned only with expand=order. Shape $.anyOf[1] (Value): {@see BuyerExpandedOrderSummaryInput}. An order summary in a buyer response, with order status and totals. Recorded buyer contact is omitted. Shape $.anyOf[2] (Value): null.
     * @return array{'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. The order this invoice bills. Every invoice has one; quick pay creates it.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What is still owed. On an open or partially_paid invoice it is total_money + late_fee_money - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and void invoices. Refunds don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): string. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When paid_at is omitted; use hasPaidAt() or valueOrDefault().
     */
    public function getPaidAt(): string|\DateTimeInterface { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): {@see InvoicePaymentOptionCostComparisonInput}. A payment option that costs the merchant less to accept for this invoice, with the estimated savings. Present when the invoice's payment policy turns on `show_cost_comparison` and Flint can compare the options. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Compares two payment options on an invoice and shows the estimated savings from the lower-cost option.
     * @return InvoicePaymentOptionCostComparisonInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_option_cost_comparison is omitted; use hasPaymentOptionCostComparison() or valueOrDefault().
     */
    public function getPaymentOptionCostComparison(): mixed { return $this->get('payment_option_cost_comparison'); }
    public function hasPaymentOptionCostComparison(): bool { return $this->has('payment_option_cost_comparison'); }
    /** Shape $ (Value): Array of string. Ways the buyer can pay this invoice online, leaving out any option whose limit the amount exceeds. `[]` when it can't be paid online. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     * @throws SdkError When payment_options is omitted; use hasPaymentOptions() or valueOrDefault().
     */
    public function getPaymentOptions(): array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Shape $ (Value): {@see InvoicePaymentTermsSnapshotInput}. The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.
     * @return InvoicePaymentTermsSnapshotInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_terms_snapshot is omitted; use hasPaymentTermsSnapshot() or valueOrDefault().
     */
    public function getPaymentTermsSnapshot(): mixed { return $this->get('payment_terms_snapshot'); }
    public function hasPaymentTermsSnapshot(): bool { return $this->has('payment_terms_snapshot'); }
    /** Shape $ (Value): string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When po_number is omitted; use hasPoNumber() or valueOrDefault().
     */
    public function getPoNumber(): string|null { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** Shape $ (Value): string or null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. null when unset.
     * @return string|null
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string|null { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Shape $ (Value): string or null. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string|null { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** Shape $ (Value): string. How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see AddressInput}. Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Shape $ (Value): Array of {@see InvoiceScheduleEntryInput}. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. Shape $[] (Value): {@see InvoiceScheduleEntryInput}. One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.
     * @return list<InvoiceScheduleEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When schedule_entries is omitted; use hasScheduleEntries() or valueOrDefault().
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** Shape $ (Value): string or null. When Flint will issue and deliver this draft. null when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_issue_at is omitted; use hasScheduledIssueAt() or valueOrDefault().
     */
    public function getScheduledIssueAt(): string|\DateTimeInterface|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** Shape $ (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. null when unset. Format: date.
     * @return string|null
     * @throws SdkError When service_date is omitted; use hasServiceDate() or valueOrDefault().
     */
    public function getServiceDate(): string|null { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
    /** Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it.
     * @return bool
     * @throws SdkError When show_flint_mark is omitted; use hasShowFlintMark() or valueOrDefault().
     */
    public function getShowFlintMark(): bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
    /** Shape $ (Value): {@see InvoiceSnapshotInput}. The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.
     * @return InvoiceSnapshotInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When snapshot is omitted; use hasSnapshot() or valueOrDefault().
     */
    public function getSnapshot(): mixed { return $this->get('snapshot'); }
    public function hasSnapshot(): bool { return $this->has('snapshot'); }
    /** Shape $ (Value): string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. void and uncollectible are final. Refunds change refund_status without reopening the balance. Value enum: "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. The subscription the backing order belongs to, copied when the draft is created and never changed. null when the order isn't part of a subscription.
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): {@see CheckoutThemeInput}. The theme Flint's hosted invoice page renders with, from your branding settings. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET /v1/me/invoices` omits it. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return CheckoutThemeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Shape $ (Value): string. IANA time zone for the invoice's calendar dates, such as due dates from payment terms and reminder and late fee day counts. At issue, an invoice without one takes the invoice settings timezone.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What the invoice bills, equal to snapshot.pricing_amounts.total_money and fixed at issue. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Current invoice version. Send this as expected_version when updating the draft. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When viewed_at is omitted; use hasViewedAt() or valueOrDefault().
     */
    public function getViewedAt(): string|\DateTimeInterface { return $this->get('viewed_at'); }
    public function hasViewedAt(): bool { return $this->has('viewed_at'); }
    /** Shape $ (Value): string. When the invoice was voided. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
