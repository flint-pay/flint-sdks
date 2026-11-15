<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $add_line_items
 * @property-read list<RefundChargeInput|array<array-key, mixed>|\stdClass> $charge_refunds
 * @property-read RefundDestinationsInput|array<array-key, mixed>|\stdClass $destinations
 * @property-read int $expected_order_version
 * @property-read string $note
 * @property-read string $reason
 * @property-read list<OrderEditRemovalRequestInput|array<array-key, mixed>|\stdClass> $remove_line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateOrderEditRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOrderEditRequestInput')); }
    /** Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines are priced and taxed as usual, without promotions, and do not join the order's delivery selection. minItems: 1. maxItems: 100. [] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When add_line_items is omitted; use hasAddLineItems() or valueOrDefault().
     */
    public function getAddLineItems(): array { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** Charges to release. Released value pays for added lines first and the rest is refunded. Omitting amount_money releases the charge's remaining refundable amount. maxItems: 100. [] (Value): {@see RefundChargeInput}. An order charge to refund when creating a refund, with an optional amount to refund.
     * @return list<RefundChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charge_refunds is omitted; use hasChargeRefunds() or valueOrDefault().
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted.
     * @return RefundDestinationsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): mixed { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
    /** The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_order_version is omitted; use hasExpectedOrderVersion() or valueOrDefault().
     */
    public function getExpectedOrderVersion(): int { return $this->get('expected_order_version'); }
    public function hasExpectedOrderVersion(): bool { return $this->has('expected_order_version'); }
    /** Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Reason for the edit and any refund it creates. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. Send remove_line_items, add_line_items, or both. minItems: 1. maxItems: 100. [] (Value): {@see OrderEditRemovalRequestInput}. An order line and the whole units to take off it.
     * @return list<OrderEditRemovalRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When remove_line_items is omitted; use hasRemoveLineItems() or valueOrDefault().
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
}
