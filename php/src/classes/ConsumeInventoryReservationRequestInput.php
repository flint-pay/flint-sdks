<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string, ...}|object> $lines
 * @property-read array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass, ...}|object $provenance
 * Presence-aware input; omitted fields throw when accessed. */
final class ConsumeInventoryReservationRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string, ...}|object>, 'provenance': array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConsumeInventoryReservationRequestInput')); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string, ...}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass, ...}|object
     * @throws SdkError When provenance is omitted; use hasProvenance() or valueOrDefault().
     */
    public function getProvenance(): array|object { return $this->get('provenance'); }
    public function hasProvenance(): bool { return $this->has('provenance'); }
}
