<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass $line_item
 * Presence-aware input; omitted fields throw when accessed. */
final class AddReturnLineItemRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'line_item': ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddReturnLineItemRequestInput')); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.
     * @return ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When line_item is omitted; use hasLineItem() or valueOrDefault().
     */
    public function getLineItem(): mixed { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
}
