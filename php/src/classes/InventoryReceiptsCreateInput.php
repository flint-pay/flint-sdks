<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'external_actor_id'?: string, 'lines': list<array{'disposition': string, 'inventory_item_id': string, 'inventory_reservation_id': string, 'inventory_reservation_line_id': string, 'quantity': int, 'receiving_location_id': string}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReceiptsCreateInput extends Model {
    /** @param array{'body': array{'external_actor_id'?: string, 'lines': list<array{'disposition': string, 'inventory_item_id': string, 'inventory_reservation_id': string, 'inventory_reservation_line_id': string, 'quantity': int, 'receiving_location_id': string}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptsCreateInput')); }
    /** The request body for: Create inventory receipt. Example: {"external_actor_id":"receiver_204","lines":[{"disposition":"sellable","inventory_item_id":"invi_01K0P7W6A4N9F3J2T8Q5R1C6XM","inventory_reservation_id":"invr_01K0P7W6A4N9F3J2T8Q5R1C6XM","inventory_reservation_line_id":"invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM","quantity":1,"receiving_location_id":"loc_01K0P7W6A4N9F3J2T8Q5R1C6XM"}],"occurred_at":"2026-07-21T14:18:00Z","source_system":{"external_source_id":"east-coast-wms","type":"wms"}}.
     * @return array{'external_actor_id'?: string, 'lines': list<array{'disposition': string, 'inventory_item_id': string, 'inventory_reservation_id': string, 'inventory_reservation_line_id': string, 'quantity': int, 'receiving_location_id': string}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
