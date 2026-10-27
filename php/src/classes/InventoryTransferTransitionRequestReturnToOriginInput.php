<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $expected_version
 * @property-read list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}|object> $lines
 * @property-read InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass $provenance
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferTransitionRequestReturnToOriginInput extends Model {
    /** @param array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}|object>, 'provenance'?: InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferTransitionRequestReturnToOriginInput')); }
    /** Shape $ (Value): string.  Value enum: "return_to_origin".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): integer string. Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object. Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned. minLength: 1. Shape $[].target_returned_quantity (Required): integer string. Cumulative quantity that should have returned to the origin. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): {@see InventoryProvenanceRequestInput}. When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time.
     * @return InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When provenance is omitted; use hasProvenance() or valueOrDefault().
     */
    public function getProvenance(): mixed { return $this->get('provenance'); }
    public function hasProvenance(): bool { return $this->has('provenance'); }
}
