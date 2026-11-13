<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $add_line_items
 * @property-read list<RefundChargeInput|array<array-key, mixed>|\stdClass> $charge_refunds
 * @property-read RefundDestinationsInput|array<array-key, mixed>|\stdClass $destinations
 * @property-read string $order_id
 * @property-read string $reason
 * @property-read list<OrderEditRemovalRequestInput|array<array-key, mixed>|\stdClass> $remove_line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderEditPreviewRequestInput extends Model {
    /** @param array{'add_line_items'?: list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'charge_refunds'?: list<RefundChargeInput|array<array-key, mixed>|\stdClass>, 'destinations'?: RefundDestinationsInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'reason'?: string, 'remove_line_items'?: list<OrderEditRemovalRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditPreviewRequestInput')); }
    /** Lines to add after the removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only lines Flint can fulfill can be added: variant, bundle, and custom lines with a delivery requirement. Added lines are priced and taxed as usual, without promotions, and don't join the order's delivery selection. minItems: 1. maxItems: 100. [] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When add_line_items is omitted; use hasAddLineItems() or valueOrDefault().
     */
    public function getAddLineItems(): array { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** Charges to release. Omitting amount_money releases the charge's remaining refundable amount. Charges you don't list are unchanged. [] (Value): {@see RefundChargeInput}. An order charge to refund when creating a refund, with an optional amount to refund.
     * @return list<RefundChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charge_refunds is omitted; use hasChargeRefunds() or valueOrDefault().
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** Where each original payment is refunded to, with the same defaults as a refund. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted.
     * @return RefundDestinationsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): mixed { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
    /** The paid order to edit. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Reason for removing the items. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Original line units to remove. Each line can appear only once. Send remove_line_items, add_line_items, or both. minItems: 1. maxItems: 100. [] (Value): {@see OrderEditRemovalRequestInput}. An order line and the whole units to take off it.
     * @return list<OrderEditRemovalRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When remove_line_items is omitted; use hasRemoveLineItems() or valueOrDefault().
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
}
