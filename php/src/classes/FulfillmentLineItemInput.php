<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentLineItemInput extends Model {
    /** @param array{'modifiers'?: list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'order_line_item_id': string, 'quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentLineItemInput')); }
    /** Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@see OrderLineItemModifierInput}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Order line whose quantity is allocated to the fulfillment.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
