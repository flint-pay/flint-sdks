<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_return_version
 * @property-read ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass $line_item
 * Presence-aware input; omitted fields throw when accessed. */
final class AddReturnLineItemRequestInput extends Model {
    /** @param array{'expected_return_version'?: int, 'line_item': ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddReturnLineItemRequestInput')); }
    /** Return version from the last read. A stale value returns VERSION_CONFLICT without adding the line. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_return_version is omitted; use hasExpectedReturnVersion() or valueOrDefault().
     */
    public function getExpectedReturnVersion(): int { return $this->get('expected_return_version'); }
    public function hasExpectedReturnVersion(): bool { return $this->has('expected_return_version'); }
    /** The line to add. An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.
     * @return ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When line_item is omitted; use hasLineItem() or valueOrDefault().
     */
    public function getLineItem(): mixed { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
}
