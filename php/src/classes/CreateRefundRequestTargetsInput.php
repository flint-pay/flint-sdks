<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RefundChargeInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read RefundDestinationsInput|array<array-key, mixed>|\stdClass $destinations
 * @property-read string $external_reference_id
 * @property-read list<RefundLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $payment_intent_id
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $refund_type
 * @property-read list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass> $tax_breakdown_refunds
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRefundRequestTargetsInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundRequestTargetsInput')); }
    /** Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. [] (Value): {@see RefundChargeInput}. An order charge to refund when creating a refund, with an optional amount to refund.
     * @return list<RefundChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted.
     * @return RefundDestinationsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): mixed { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. [] (Value): {@see RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee.
     * @return list<RefundLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: 1.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Value enum: "targets".
     * @return string
     * @throws SdkError When refund_type is omitted; use hasRefundType() or valueOrDefault().
     */
    public function getRefundType(): string { return $this->get('refund_type'); }
    public function hasRefundType(): bool { return $this->has('refund_type'); }
    /** Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. [] (Value): {@see RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.
     * @return list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
}
