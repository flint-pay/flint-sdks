<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_count_id
 * @property-read array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsUpdateInput extends Model {
    /** @param array{'inventory_count_id': string, 'body': array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsUpdateInput')); }
    /** Flint inventory count ID. Example: "invc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** The request body for: Update inventory count. Example: {"expected_version":2,"observations":[{"counted_damaged_quantity":0,"counted_on_hand_quantity":12,"counted_quality_control_quantity":0,"counted_quarantined_quantity":0,"expected_physical_version":9,"inventory_item_id":"invi_01K0P7W6A4N9F3J2T8Q5R1C6XM"}],"source_system":{"type":"manual"}}.
     * @return array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
