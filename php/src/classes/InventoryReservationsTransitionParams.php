<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsTransitionParams extends Model {
    /** @param array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object>}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass}|object|array{'action': string, 'expected_version'?: int, 'lines': list<mixed>}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsTransitionParams')); }
}
