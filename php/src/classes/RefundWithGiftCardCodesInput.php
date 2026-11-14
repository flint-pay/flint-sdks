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
 * @property-read string $initiated_by
 * @property-read string $invoice_id
 * @property-read list<array{'adjustment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object>, 'adjustments'?: list<array{'adjustment_type': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'applies_to': string, 'reason': array{'code': string, 'description'?: string, ...}|object, 'refund_line_item_adjustment_id': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'remaining_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'automatic_refund': array{'discount_money': array{'amount': string, 'currency': string}|object, 'subtotal_money': array{'amount': string, 'currency': string}|object, 'tax_money': array{'amount': string, 'currency': string}|object, 'total_money': array{'amount': string, 'currency': string}|object, ...}|object, 'bundle_id'?: string, 'categories'?: list<array{'category_id': string, 'handle': string, ...}|object>, 'modifiers'?: list<array{'allocation_basis': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': int, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object>, 'order_id': string, 'order_line_item_id': string, 'product_id'?: string, 'quantity': int, 'refunded_money': array{'amount': string, 'currency': string}|object, 'selected_options'?: list<array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'order_id': string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object> $line_item_allocations
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_edit_id
 * @property-read string $order_id
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'dispute_status': string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'dispute_status': string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id'?: string, 'refunded_platform_fee_money'?: array{'amount': string, 'currency': string}|object, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'split_reversals'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'payment_split_id': string, 'payment_split_reversal_id': string, ...}|object>, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, ...}|object> $payment_refunds
 * @property-read string $payment_review_id
 * @property-read string|null $pending_reason
 * @property-read string $processed_by
 * @property-read string|null $reason
 * @property-read string $reason_message
 * @property-read string $refund_id
 * @property-read bool $refund_platform_fee
 * @property-read string $refund_reference
 * @property-read string|\DateTimeInterface $refunded_at
 * @property-read array{'amount': string, 'currency': string}|object $refunded_tip_money
 * @property-read string $return_id
 * @property-read string $return_resolution_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $succeeded_at
 * @property-read list<array{'order_charge_id'?: string, 'order_id': string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object> $tax_breakdown_refunds
 * @property-read list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'destination_cards'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string, ...}|object>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'tender_type': string, ...}|object> $tender_allocations
 * @property-read list<array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': array{'amount': string, 'currency': string}|object, 'settlement_allocation_id': string, 'source_pending_amount_money': array{'amount': string, 'currency': string}|object, 'source_remaining_amount_money': array{'amount': string, 'currency': string}|object, ...}|object> $unissued_gift_card_recoveries
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundWithGiftCardCodesInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'created_at': string|\DateTimeInterface, 'credit_note_id'?: string, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'gift_card_codes'?: list<array{'code': string, 'gift_card_id': string, ...}|object>, 'idempotency_key'?: string, 'initiated_by': string, 'invoice_id'?: string, 'line_item_allocations'?: list<array{'adjustment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object>, 'adjustments'?: list<array{'adjustment_type': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'applies_to': string, 'reason': array{'code': string, 'description'?: string, ...}|object, 'refund_line_item_adjustment_id': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'remaining_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'automatic_refund': array{'discount_money': array{'amount': string, 'currency': string}|object, 'subtotal_money': array{'amount': string, 'currency': string}|object, 'tax_money': array{'amount': string, 'currency': string}|object, 'total_money': array{'amount': string, 'currency': string}|object, ...}|object, 'bundle_id'?: string, 'categories'?: list<array{'category_id': string, 'handle': string, ...}|object>, 'modifiers'?: list<array{'allocation_basis': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': int, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object>, 'order_id': string, 'order_line_item_id': string, 'product_id'?: string, 'quantity': int, 'refunded_money': array{'amount': string, 'currency': string}|object, 'selected_options'?: list<array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'order_id': string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object>, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_edit_id'?: string, 'order_id'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'dispute_status': string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id'?: string, 'payment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'dispute_status': string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id'?: string, 'refunded_platform_fee_money'?: array{'amount': string, 'currency': string}|object, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'split_reversals'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'payment_split_id': string, 'payment_split_reversal_id': string, ...}|object>, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, ...}|object>, 'payment_review_id'?: string, 'pending_reason': string|null, 'processed_by': string, 'reason': string|null, 'reason_message'?: string, 'refund_id': string, 'refund_platform_fee': bool, 'refund_reference'?: string, 'refunded_at'?: string|\DateTimeInterface, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'return_id'?: string, 'return_resolution_id'?: string, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'order_id': string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tender_allocations'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'destination_cards'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string, ...}|object>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'tender_type': string, ...}|object>, 'unissued_gift_card_recoveries'?: list<array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': array{'amount': string, 'currency': string}|object, 'settlement_allocation_id': string, 'source_pending_amount_money': array{'amount': string, 'currency': string}|object, 'source_remaining_amount_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundWithGiftCardCodesInput')); }
    /** Total refunded across all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer on the refunded order or payment. Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned cannot be retried through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** New gift card codes recovered only within 24 hours of the original command and only while each code remains current. Omitted after the recovery window and never returned by ordinary refund reads or events. [] (Value): {@see RefundGiftCardCodeInput}. The code of a gift card issued by a refund, returned once in the refund result with its `gift_card_id`.
     * @return list<array{'code': string, 'gift_card_id': string, ...}|object>
     * @throws SdkError When gift_card_codes is omitted; use hasGiftCardCodes() or valueOrDefault().
     */
    public function getGiftCardCodes(): array { return $this->get('gift_card_codes'); }
    public function hasGiftCardCodes(): bool { return $this->has('gift_card_codes'); }
    /** The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value enum: "merchant", "flint".
     * @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** How the refund applied to each order line item it covered, with quantity, tax, and adjustments. [] (Value): {@see RefundLineItemAllocationInput}. How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.
     * @return list<array{'adjustment_refunds'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object>, 'adjustments'?: list<array{'adjustment_type': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'applies_to': string, 'reason': array{'code': string, 'description'?: string, ...}|object, 'refund_line_item_adjustment_id': string, 'refunded_money': array{'amount': string, 'currency': string}|object, 'remaining_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'automatic_refund': array{'discount_money': array{'amount': string, 'currency': string}|object, 'subtotal_money': array{'amount': string, 'currency': string}|object, 'tax_money': array{'amount': string, 'currency': string}|object, 'total_money': array{'amount': string, 'currency': string}|object, ...}|object, 'bundle_id'?: string, 'categories'?: list<array{'category_id': string, 'handle': string, ...}|object>, 'modifiers'?: list<array{'allocation_basis': string, 'amount_money': array{'amount': string, 'currency': string}|object, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': int, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object>, 'order_id': string, 'order_line_item_id': string, 'product_id'?: string, 'quantity': int, 'refunded_money': array{'amount': string, 'currency': string}|object, 'selected_options'?: list<array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<array{'order_charge_id'?: string, 'order_id': string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object>
     * @throws SdkError When line_item_allocations is omitted; use hasLineItemAllocations() or valueOrDefault().
     */
    public function getLineItemAllocations(): array { return $this->get('line_item_allocations'); }
    public function hasLineItemAllocations(): bool { return $this->has('line_item_allocations'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * @return string
     * @throws SdkError When order_edit_id is omitted; use hasOrderEditId() or valueOrDefault().
     */
    public function getOrderEditId(): string { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'dispute_status': string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. [] (Value): {@see PaymentRefundInput}. The part of a refund returned through one payment, with the amount, tip, status, and any failure reason.
     * @return list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'dispute_status': string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id'?: string, 'refunded_platform_fee_money'?: array{'amount': string, 'currency': string}|object, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'split_reversals'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'payment_split_id': string, 'payment_split_reversal_id': string, ...}|object>, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, ...}|object>
     * @throws SdkError When payment_refunds is omitted; use hasPaymentRefunds() or valueOrDefault().
     */
    public function getPaymentRefunds(): array { return $this->get('payment_refunds'); }
    public function hasPaymentRefunds(): bool { return $this->has('payment_refunds'); }
    /** ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Value enum: "manual_review", null.
     * @return string|null
     * @throws SdkError When pending_reason is omitted; use hasPendingReason() or valueOrDefault().
     */
    public function getPendingReason(): string|null { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     * @return string
     * @throws SdkError When processed_by is omitted; use hasProcessedBy() or valueOrDefault().
     */
    public function getProcessedBy(): string { return $this->get('processed_by'); }
    public function hasProcessedBy(): bool { return $this->has('processed_by'); }
    /** Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock", "payment_returned", null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Note explaining the refund, up to 1,024 characters.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". Unique identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * @return bool
     * @throws SdkError When refund_platform_fee is omitted; use hasRefundPlatformFee() or valueOrDefault().
     */
    public function getRefundPlatformFee(): bool { return $this->get('refund_platform_fee'); }
    public function hasRefundPlatformFee(): bool { return $this->has('refund_platform_fee'); }
    /** The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When refund_reference is omitted; use hasRefundReference() or valueOrDefault().
     */
    public function getRefundReference(): string { return $this->get('refund_reference'); }
    public function hasRefundReference(): bool { return $this->has('refund_reference'); }
    /** When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When refunded_at is omitted; use hasRefundedAt() or valueOrDefault().
     */
    public function getRefundedAt(): string|\DateTimeInterface { return $this->get('refunded_at'); }
    public function hasRefundedAt(): bool { return $this->has('refunded_at'); }
    /** Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): mixed { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** ID of the return this refund paid out. Present only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): string|\DateTimeInterface { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. [] (Value): {@see RefundTaxBreakdownRefundInput}. The tax refunded for one tax breakdown on an order.
     * @return list<array{'order_charge_id'?: string, 'order_id': string, 'tax_breakdown_id': string, 'tax_money': array{'amount': string, 'currency': string}|object, ...}|object>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. [] (Value): {@see RefundTenderAllocationInput}. One tender's share of a refund, listed in the refund's tender allocations.
     * @return list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'destination_cards'?: list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string, ...}|object>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': array{'amount': string, 'currency': string}|object, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'tender_type': string, ...}|object>
     * @throws SdkError When tender_allocations is omitted; use hasTenderAllocations() or valueOrDefault().
     */
    public function getTenderAllocations(): array { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
    /** Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. [] (Value): {@see RefundUnissuedGiftCardRecoveryInput}. Details of a gift card purchase refunded before the card was issued, including the amounts recovered.
     * @return list<array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': array{'amount': string, 'currency': string}|object, 'settlement_allocation_id': string, 'source_pending_amount_money': array{'amount': string, 'currency': string}|object, 'source_remaining_amount_money': array{'amount': string, 'currency': string}|object, ...}|object>
     * @throws SdkError When unissued_gift_card_recoveries is omitted; use hasUnissuedGiftCardRecoveries() or valueOrDefault().
     */
    public function getUnissuedGiftCardRecoveries(): array { return $this->get('unissued_gift_card_recoveries'); }
    public function hasUnissuedGiftCardRecoveries(): bool { return $this->has('unissued_gift_card_recoveries'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
