<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class AddLineItemsRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'line_items': list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddLineItemsRequestInput')); }
    /** Shape $ (Value): integer string. Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): Array of {@see CreateOrderLineItemRequestInput}. minItems: 1. Shape $[] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
}
