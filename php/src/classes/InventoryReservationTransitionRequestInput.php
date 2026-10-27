<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationTransitionRequestInput extends Model {
    /** @param array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': string}|object>}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object>, 'provenance'?: InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationTransitionRequestInput')); }
}
