<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object $line_item
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateLineItemParams extends Model {
    /** @param array{'expected_version'?: int, 'line_item': array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateLineItemParams')); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.
     * @return array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object
     * @throws SdkError When line_item is omitted; use hasLineItem() or valueOrDefault().
     */
    public function getLineItem(): array|object { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
}
