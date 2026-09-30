<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read list<array{'inventory_reservation_line_id': string, 'target_released_from_committed_quantity'?: string, 'target_released_from_held_quantity'?: string, ...}|object> $lines
 * Presence-aware input; omitted fields throw when accessed. */
final class ReleaseInventoryReservationRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_released_from_committed_quantity'?: string, 'target_released_from_held_quantity'?: string, ...}|object>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReleaseInventoryReservationRequestInput')); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return list<array{'inventory_reservation_line_id': string, 'target_released_from_committed_quantity'?: string, 'target_released_from_held_quantity'?: string, ...}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
}
