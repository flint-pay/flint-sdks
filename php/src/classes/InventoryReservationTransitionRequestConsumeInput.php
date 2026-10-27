<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $expected_version
 * @property-read list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object> $lines
 * @property-read InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass $provenance
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationTransitionRequestConsumeInput extends Model {
    /** @param array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object>, 'provenance'?: InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationTransitionRequestConsumeInput')); }
    /** Shape $ (Value): string.  Value enum: "consume".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): integer string. Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object. Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned. minLength: 1. Shape $[].target_consumed_quantity (Required): integer string. Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): {@see InventoryProvenanceRequestInput}. When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time.
     * @return InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When provenance is omitted; use hasProvenance() or valueOrDefault().
     */
    public function getProvenance(): mixed { return $this->get('provenance'); }
    public function hasProvenance(): bool { return $this->has('provenance'); }
}
