<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_order_version
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class AddLineItemsRequestInput extends Model {
    /** @param array{'expected_order_version'?: int, 'line_items': list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddLineItemsRequestInput')); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_order_version is omitted; use hasExpectedOrderVersion() or valueOrDefault().
     */
    public function getExpectedOrderVersion(): int { return $this->get('expected_order_version'); }
    public function hasExpectedOrderVersion(): bool { return $this->has('expected_order_version'); }
    /** Line items to add to the order. minItems: 1. [] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
}
