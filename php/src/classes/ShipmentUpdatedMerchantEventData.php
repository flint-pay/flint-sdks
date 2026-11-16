<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ShipmentUpdatedMerchantEventDataObject $object
 * @property-read ?ShipmentUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentUpdatedMerchantEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'delivered_at'?: string, 'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'handed_off_at'?: string, 'metadata'?: mixed, 'order'?: mixed, 'order_id': string, 'package_count': int, 'packages'?: list<mixed>, 'return_id'?: string, 'return_line_items'?: list<mixed>, 'shipment_id': string, 'shipped_at'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'created_at'?: mixed, 'delivered_at'?: mixed, 'direction'?: mixed, 'external_reference_id'?: mixed, 'external_system'?: mixed, 'fulfillment_id'?: mixed, 'handed_off_at'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'package_count'?: mixed, 'packages'?: mixed, 'return_id'?: mixed, 'return_line_items'?: mixed, 'shipment_id'?: mixed, 'shipped_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentUpdatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ShipmentUpdatedMerchantEventDataObject
     */
    public function getObject(): ShipmentUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ShipmentUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ShipmentUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
