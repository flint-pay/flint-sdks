<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $credit_note_id
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read string $external_reference_id
 * @property-read string $failure_reason
 * @property-read list<array{'code': string, 'gift_card_id': string, ...}|object> $gift_card_codes
 * @property-read string $idempotency_key
 * @property-read string $invoice_id
 * @property-read list<array{'adjustment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object>, 'adjustments'?: list<array{'adjustment_type': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'applies_to': string, 'reason': array{'code': string, 'description'?: string, ...}|object, 'refund_line_item_adjustment_id': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'remaining_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'automatic_refund': array{'discount_money': array{'amount': string, 'currency': string}|object, 'subtotal_money': array{'amount': string, 'currency': string}|object, 'tax_money': array{'amount': string, 'currency': string}|object, 'total_money': array{'amount': string, 'currency': string}|object, ...}|object, 'bundle_id'?: string, 'categories'?: list<array{'category_id': string, 'handle': string, 'name': string, ...}|object>, 'modifiers'?: list<array{'allocation_basis': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': string, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object>, 'order_line_item_id': string, 'product_id'?: string, 'quantity': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'selected_options'?: list<array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object> $line_item_allocations
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'payment_intent_id'?: string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, ...}|object> $payment_refunds
 * @property-read string $payment_review_id
 * @property-read string|null $reason
 * @property-read string $reason_message
 * @property-read string $refund_id
 * @property-read array{'amount': string, 'currency': string}|object $refunded_tip_money
 * @property-read string $return_id
 * @property-read string $return_resolution_id
 * @property-read string $status
 * @property-read list<array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object> $tax_breakdown_refunds
 * @property-read list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'destination_cards'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string, ...}|object>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, 'tender_type': string, ...}|object> $tender_allocations
 * @property-read list<array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': array{'amount': string, 'currency': string}|object, 'settlement_allocation_id': string, 'source_pending_amount_money': array{'amount': string, 'currency': string}|object, 'source_remaining_amount_money': array{'amount': string, 'currency': string}|object, ...}|object> $unissued_gift_card_recoveries
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRefundResultInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'created_at'?: string|\DateTimeInterface, 'credit_note_id'?: string, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'gift_card_codes'?: list<array{'code': string, 'gift_card_id': string, ...}|object>, 'idempotency_key'?: string, 'invoice_id'?: string, 'line_item_allocations'?: list<array{'adjustment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object>, 'adjustments'?: list<array{'adjustment_type': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'applies_to': string, 'reason': array{'code': string, 'description'?: string, ...}|object, 'refund_line_item_adjustment_id': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'remaining_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'automatic_refund': array{'discount_money': array{'amount': string, 'currency': string}|object, 'subtotal_money': array{'amount': string, 'currency': string}|object, 'tax_money': array{'amount': string, 'currency': string}|object, 'total_money': array{'amount': string, 'currency': string}|object, ...}|object, 'bundle_id'?: string, 'categories'?: list<array{'category_id': string, 'handle': string, 'name': string, ...}|object>, 'modifiers'?: list<array{'allocation_basis': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': string, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object>, 'order_line_item_id': string, 'product_id'?: string, 'quantity': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'selected_options'?: list<array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object>, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'payment_intent_id'?: string, 'payment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'payment_intent_id'?: string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, ...}|object>, 'payment_review_id'?: string, 'reason': string|null, 'reason_message'?: string, 'refund_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'return_id'?: string, 'return_resolution_id'?: string, 'status': string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tender_allocations'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'destination_cards'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string, ...}|object>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, 'tender_type': string, ...}|object>, 'unissued_gift_card_recoveries'?: list<array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': array{'amount': string, 'currency': string}|object, 'settlement_allocation_id': string, 'source_pending_amount_money': array{'amount': string, 'currency': string}|object, 'source_remaining_amount_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Shape $ (Value): Array of {@see RefundGiftCardCodeInput}. New gift card codes recovered only within 24 hours of the original command and only while each code remains current. Omitted after the recovery window and never returned by ordinary refund reads or events. Shape $[] (Value): {@see RefundGiftCardCodeInput}. The code of a gift card issued by a refund, returned once in the refund result with its `gift_card_id`.
     * @return list<array{'code': string, 'gift_card_id': string, ...}|object>
     * @throws SdkError When gift_card_codes is omitted; use hasGiftCardCodes() or valueOrDefault().
     */
    public function getGiftCardCodes(): array { return $this->get('gift_card_codes'); }
    public function hasGiftCardCodes(): bool { return $this->has('gift_card_codes'); }
    /** Shape $ (Value): string. Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create response was lost.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): Array of {@see RefundLineItemAllocationInput}. Shape $[] (Value): {@see RefundLineItemAllocationInput}. How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.
     * @return list<array{'adjustment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object>, 'adjustments'?: list<array{'adjustment_type': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'applies_to': string, 'reason': array{'code': string, 'description'?: string, ...}|object, 'refund_line_item_adjustment_id': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'remaining_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'automatic_refund': array{'discount_money': array{'amount': string, 'currency': string}|object, 'subtotal_money': array{'amount': string, 'currency': string}|object, 'tax_money': array{'amount': string, 'currency': string}|object, 'total_money': array{'amount': string, 'currency': string}|object, ...}|object, 'bundle_id'?: string, 'categories'?: list<array{'category_id': string, 'handle': string, 'name': string, ...}|object>, 'modifiers'?: list<array{'allocation_basis': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': string, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object>, 'order_line_item_id': string, 'product_id'?: string, 'quantity': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'selected_options'?: list<array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object>
     * @throws SdkError When line_item_allocations is omitted; use hasLineItemAllocations() or valueOrDefault().
     */
    public function getLineItemAllocations(): array { return $this->get('line_item_allocations'); }
    public function hasLineItemAllocations(): bool { return $this->has('line_item_allocations'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see ExpandedPaymentIntentSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): Array of {@see PaymentRefundInput}. Shape $[] (Value): {@see PaymentRefundInput}. The part of a refund returned through one payment, with the amount, tip, status, and any failure reason.
     * @return list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'payment_intent_id'?: string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, ...}|object>
     * @throws SdkError When payment_refunds is omitted; use hasPaymentRefunds() or valueOrDefault().
     */
    public function getPaymentRefunds(): array { return $this->get('payment_refunds'); }
    public function hasPaymentRefunds(): bool { return $this->has('payment_refunds'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Shape $ (Value): string or null.  Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): mixed { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. Follow refund.updated. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of {@see RefundTaxBreakdownRefundInput}. Shape $[] (Value): {@see RefundTaxBreakdownRefundInput}. The tax refunded for one tax breakdown on an order.
     * @return list<array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Shape $ (Value): Array of {@see RefundTenderAllocationInput}. Shape $[] (Value): {@see RefundTenderAllocationInput}. One tender's share of a refund, listed in the refund's tender allocations.
     * @return list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'destination_cards'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string, ...}|object>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, 'tender_type': string, ...}|object>
     * @throws SdkError When tender_allocations is omitted; use hasTenderAllocations() or valueOrDefault().
     */
    public function getTenderAllocations(): array { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
    /** Shape $ (Value): Array of {@see RefundUnissuedGiftCardRecoveryInput}. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. Shape $[] (Value): {@see RefundUnissuedGiftCardRecoveryInput}. Details of a gift card purchase refunded before the card was issued, including the amounts recovered.
     * @return list<array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': array{'amount': string, 'currency': string}|object, 'settlement_allocation_id': string, 'source_pending_amount_money': array{'amount': string, 'currency': string}|object, 'source_remaining_amount_money': array{'amount': string, 'currency': string}|object, ...}|object>
     * @throws SdkError When unissued_gift_card_recoveries is omitted; use hasUnissuedGiftCardRecoveries() or valueOrDefault().
     */
    public function getUnissuedGiftCardRecoveries(): array { return $this->get('unissued_gift_card_recoveries'); }
    public function hasUnissuedGiftCardRecoveries(): bool { return $this->has('unissued_gift_card_recoveries'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
