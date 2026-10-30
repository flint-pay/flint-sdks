<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read int $expected_version
 * @property-read list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object> $lines
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationTransitionRequestCommitInput extends Model {
    /** @param array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationTransitionRequestCommitInput')); }
    /** Value enum: "commit".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required): string. Line being transitioned. minLength: 1. [].target_committed_quantity (Required): integer. Cumulative whole-number quantity that should have reached this target. Format: int64. minimum: 0.
     * @return list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
}
