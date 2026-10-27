<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $order_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCreateReturnRequestInput extends Model {
    /** @param array{'line_items': list<ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'order_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCreateReturnRequestInput')); }
    /** Shape $ (Value): Array of {@see ReturnLineItemRequestInput}. minItems: 1. maxItems: 100. Shape $[] (Value): {@see ReturnLineItemRequestInput}. An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.
     * @return list<ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
