<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': string}|object> $lines
 * @property-read string|null $note
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateInventoryTransferRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': string}|object>, 'note'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateInventoryTransferRequestInput')); }
    /** Shape $ (Value): integer string. Required when any of these fields is present: lines. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Array of object. Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity must remain. Requires expected_version when present. minItems: 1. maxItems: 100. Shape $[] (Value): object. Shape $[].condition (Optional): string. Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined". Shape $[].inventory_item_id (Required): string. minLength: 1. Shape $[].inventory_transfer_line_id (Optional): string. Existing line in this transfer. Omit to add a line. minLength: 1. Shape $[].requested_quantity (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': string}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string|null { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
}
