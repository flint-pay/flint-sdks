<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_transfer_id
 * @property-read array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_received_damaged_quantity'?: int, 'target_received_quality_control_quantity'?: int, 'target_received_quantity': int, 'target_received_quarantined_quantity'?: int, 'target_received_sellable_quantity'?: int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': int}|object>, 'provenance'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersTransitionInput extends Model {
    /** @param array{'inventory_transfer_id': string, 'body': array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_received_damaged_quantity'?: int, 'target_received_quality_control_quantity'?: int, 'target_received_quantity': int, 'target_received_quarantined_quantity'?: int, 'target_received_sellable_quantity'?: int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': int}|object>, 'provenance'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersTransitionInput')); }
    /** Flint inventory transfer ID. Example: "invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_transfer_id is omitted; use hasInventoryTransferId() or valueOrDefault().
     */
    public function getInventoryTransferId(): string { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
    /** The request body for: Transition inventory transfer. Example: {"action":"depart","expected_version":2,"lines":[{"inventory_transfer_line_id":"invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM","target_departed_quantity":4}],"provenance":{"source_system":{"type":"manual"}}}.
     * @return array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_received_damaged_quantity'?: int, 'target_received_quality_control_quantity'?: int, 'target_received_quantity': int, 'target_received_quarantined_quantity'?: int, 'target_received_sellable_quantity'?: int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': int}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': int}|object>, 'provenance'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
