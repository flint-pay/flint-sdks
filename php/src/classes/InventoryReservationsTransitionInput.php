<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_reservation_id
 * @property-read array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object>}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsTransitionInput extends Model {
    /** @param array{'inventory_reservation_id': string, 'body': array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object>}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsTransitionInput')); }
    /** Flint inventory reservation ID. Example: "invr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** The request body for: Transition inventory reservation. Example: {"action":"commit","expected_version":3,"lines":[{"inventory_reservation_line_id":"invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM","target_committed_quantity":2}]}.
     * @return array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': int}|object>}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
